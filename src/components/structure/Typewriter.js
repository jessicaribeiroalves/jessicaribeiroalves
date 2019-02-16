import React, { Component } from "react";
import "./Typewriter.css";

class Typewriter extends Component {
  render() {
    return (
      <div className="typewriter">
        <h1>{this.props.text}</h1>
      </div>

    )
  }
}

export default Typewriter;