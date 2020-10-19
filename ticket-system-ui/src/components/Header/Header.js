import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
