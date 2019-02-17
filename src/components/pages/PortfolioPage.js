import React, { Component } from "react";
import { Container, Jumbotron, Row, Col, Card, CardLink, CardTitle, CardText, CardImg, CardBody } from "reactstrap";
import "./PortfolioPage.css";
import DevMarketImg from "../../docs/images/DevMarketScreenshot.png";
import PortfolioImg from "../../docs/images/HomeScreenshot.png";
import MusesImg from "../../docs/images/MusesHome.png";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolioContent">
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h1 className="display-3">Portfolio</h1>
              <Jumbotron>
                <Card body outline color="info">
                  <CardTitle className="title">MusesCodeJS Website</CardTitle>
                  <CardImg top width="100%" src={MusesImg} alt="MusesCodeJS screenshot" />
                  <CardBody>
                    <CardText>MERN application built for a non-profit organization called MusesCodeJS.</CardText>
                    <CardLink href="https://github.com/shaktigurung/MusesReactApp">Check GitHub repo</CardLink>
                    <CardLink href="http://ca-muses-static.s3-website-ap-southeast-2.amazonaws.com//">Check the website</CardLink>
                  </CardBody>
                </Card><br />
                <Card body outline color="info">
                  <CardTitle className="title">DevMarket</CardTitle>
                  <CardImg top width="100%" src={DevMarketImg} alt="DevMarket screenshot" />
                  <CardBody>
                    <CardText>Two sided marketplace platform using Ruby on Rails.</CardText>
                    <CardLink href="https://github.com/jessicaribeiroalves/devmarket">Check GitHub repo</CardLink>
                    <CardLink href="https://dev-market-aus.herokuapp.com/">Check the website</CardLink>
                  </CardBody>
                </Card><br />
                <Card body outline color="info">
                  <CardTitle className="title">Portfolio Website</CardTitle>
                  <CardImg top width="100%" src={PortfolioImg} alt="Portfolio screenshot" />
                  <CardBody>
                    <CardText>Portfolio website designed, developed and deployed to showcases talent, abilities and coding experience.</CardText>
                    <CardLink href="https://github.com/jessicaribeiroalves/jessicaribeiroalves">Check GitHub repo</CardLink>
                    <CardLink href="http://www.jessicaribeiroalves.com/">Check the website</CardLink>
                  </CardBody>
                </Card><br />
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PortfolioPage;