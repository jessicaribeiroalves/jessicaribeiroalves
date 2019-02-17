import React, { Component } from "react";
import { HashRouter, Route } from 'react-router-dom';
import MenuBar from "./components/structure/MenuBar";
import HomePage from "./components/pages/HomePage";
import PortfolioPage from "./components/pages/PortfolioPage";
import ContactPage from "./components/pages/ContactPage";
import "./App.css";
import "hover.css/css/hover.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <MenuBar />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/contact" component={ContactPage} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;