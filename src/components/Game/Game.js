import React from "react";
import "./Game.css";
import Scoreboard from "./../Scoreboard/Scoreboard";
import GameBoard from "./../GameBoard/GameBoard";

import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.png";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";

class Game extends React.Component {
  state = {
    score: 0,
    pictures: [
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      { id: 4, src: image4 },
      { id: 5, src: image5 },
      { id: 6, src: image6 },
      { id: 7, src: image7 },
      { id: 8, src: image8 },
      { id: 9, src: image9 },
      { id: 10, src: image10 },
      { id: 11, src: image11 },
      { id: 12, src: image12 }
    ],
    clicked: []
  };
  updateScore = () => {};
  updateClicked = () => {};

  render() {
    const board = this.state.pictures.map(meme => {
      return (
        <div className="picture-container" key={Math.random()}>
          <GameBoard
            key={meme.id}
            id={meme.id}
            src={meme.src}
            updateClicked={this.updateClicked}
          />
        </div>
      );
    });

    return (
      <div>
        <div className="scoreboard-container">
          <Scoreboard score={this.state.score} />
        </div>
        <div className="gameboard-container">
          <div className="k">{board}</div>
        </div>
      </div>
    );
  }
}

export default Game;
