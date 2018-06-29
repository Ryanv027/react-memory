import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Score: {this.props.score}</h1>
      </div>
    );
  }
}

export default Scoreboard;
