import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="nav-container">
          <ul>
            <li>Reset</li>
            <li>Click an image to begin</li>
            <li>Score: 0</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
