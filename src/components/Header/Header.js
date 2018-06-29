import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="nav-container">
          <div className="nav-1">Reset</div>
          <div className="nav-item nav-2">Clickerz</div>
        </div>
      </header>
    );
  }
}

export default Header;
