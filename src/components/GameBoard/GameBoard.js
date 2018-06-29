import React from "react";
import "./Gameboard.css";

class GameBoard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt="game" height="200px" width="250px" />
      </div>
    );
  }
}

export default GameBoard;
