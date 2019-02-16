import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import ResumePDF from "./../../../docs/JessicaRibeiroAlvesResume.pdf";
import "./MenuBar.css";

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <div className="links">
                <NavItem>
                  <Badge color="dark" className="hvr-bob"><Link to="/">Home</Link></Badge>
                </NavItem>
                <NavItem>
                  <Badge color="dark" className="hvr-bob"><a href={ResumePDF} target="_blank">Resume</a></Badge>
                </NavItem>
                <NavItem>
                  <Badge color="dark" className="hvr-bob"><Link to="/portfolio">Portfolio</Link></Badge>
                </NavItem>
                <NavItem>
                  <Badge color="dark" className="hvr-bob"><Link to="/contact">Contact</Link></Badge>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;
