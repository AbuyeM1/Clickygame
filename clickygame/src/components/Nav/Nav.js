import React from "react";
import "./style.css";

const Nav = (props) => (
  <ul className="nav nav-fill">
    <li className="nav-item nav-text text-left">Clicky Game.</li>
    <li className="nav-item nav-text text-right">
      Score: {props.score} | High score: {props.topScore}
    </li>
  </ul>
);

export default Nav;
