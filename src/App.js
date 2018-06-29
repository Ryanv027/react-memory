import React, { Component } from "react";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
