import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-brand">My App</div>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Form</NavLink>
        </li>
        <li>
          <NavLink to="/board">Board</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">Shopping App</NavLink>
        </li>
      </ul>
    </nav>
  );
}
