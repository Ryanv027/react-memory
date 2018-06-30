import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
  render() {
    return (
      <div>
        <div className="instructions-container">
          <p>
            Click an image below, but make sure not to click the same one twice!
            If you do your game will reset!
          </p>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
