import React, { Component } from "react";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

class App extends Component {
  state = {
    score: 0
  };

  updateScore = score => {
    console.log("update score hit", score);
    if (score === "add") {
      let score = this.state.score + 1;
      if (score === 12) {
        alert("You win!");
        score = 0;
      }
      this.setState({ score });
    } else {
      this.setState({ score: 0 });
    }
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Game updateScore={this.updateScore} />
      </div>
    );
  }
}

export default App;
