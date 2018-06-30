import React from "react";
import "./Gameboard.css";

class GameBoard extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.onClick}>
          <img src={this.props.src} alt="game" height="170px" width="170px" />
        </div>
      </div>
    );
  }
}

export default GameBoard;
