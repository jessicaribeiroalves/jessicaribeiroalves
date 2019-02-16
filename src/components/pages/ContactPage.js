import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";
import "./ContactPage.css";

class ContactPage extends Component {
  render() {
    return (
      <Container fluid>
        <div className="contact">
          <div className="contactInformation">
            <h1 className="display-3">Contact Me</h1>
            <Jumbotron>
              <a><i className="fas fa-3x fa-map-marker-alt"></i>Sydney, Australia</a><br /><br />
              <a><i className="fas fa-3x fa-mobile-alt"></i>+61 403 422 772</a><br /><br />
              <a><i className="fas fa-3x fa-envelope"></i>jessralves@gmail.com</a><br /><br />
            </Jumbotron>
          </div>
          <div className="contactIcons">
            <a className="hvr-grow" href="https://www.linkedin.com/in/jessica-ribeiro-alves/" target="_blank"><i className="fab fa-5x fa-linkedin hvr-icon"></i></a>
            <a className="hvr-grow" href="https://github.com/jessicaribeiroalves" target="_blank"><i className="fab fa-5x fa-github hvr-icon"></i></a>
            <a className="hvr-grow" href="https://www.hackerrank.com/jessralves" target="_blank"><i className="fab fa-5x fa-hackerrank hvr-icon"></i></a>
            <a className="hvr-grow" href="https://medium.com/@jessalves" target="_blank"><i className="fab fa-5x fa-medium hvr-icon"></i></a>
          </div>
        </div >
      </Container>
    );
  }
}

export default ContactPage;
