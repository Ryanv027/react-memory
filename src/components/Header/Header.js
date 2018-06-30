import React from "react";
import "./Header.css";

class Header extends React.Component {
  refresh = () => {
    console.log("refresh hit");
    window.location.reload();
  };
  render() {
    return (
      <header className="header">
        <div className="nav-container">
          <ul>
            <li className="reset" onClick={this.refresh}>
              Reset
            </li>
            <li>Click an image to begin</li>
            <li>Score: {this.props.score}</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
