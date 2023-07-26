import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="https://i.postimg.cc/k4cCFG5L/rotten-potatoes.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="user-image">
        <img src="https://i.postimg.cc/fTYff9yW/urahichi.gif" alt="user" />
      </div>
    </div>
  );
};

export default Header;
