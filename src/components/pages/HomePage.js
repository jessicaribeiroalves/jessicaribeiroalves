import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Typewriter from "../structure/Typewriter";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <br />
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Typewriter text="Jessica Alves" /><br />
            </Col>
          </Row>
          <div className="subtitle">
            <Row>
              <Col>
                <h4>Full Stack Developer</h4><br /><br />
              </Col>
            </Row>
          </div>
          <div className="description">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Jumbotron>
                  <h1 className="display-4">Welcome!</h1>
                  <p className="lead">My name is Jessica and I'm a full stack developer graduated at Coder Academy, living in Sydney, Australia. Welcome to my portfolio website and if you want to contact me or see some of the projects I've worked on so far, feel free to explore the menubar links.</p>
                  <hr className="my-2" />
                  <a className="hvr-grow" href="https://github.com/jessicaribeiroalves" target="_blank" style={{ color: "#587084" }}><br /><i className="fab fa-5x fa-github hvr-icon"></i><br />Go to my GitHub</a>
                </Jumbotron>
              </Col>
            </Row>
          </div>
        </Container>
      </div >
    );
  }
}

// TO DO: adjust margin and padding to not use <br />

export default HomePage;