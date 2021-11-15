import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  const img =
    "https://image.freepik.com/free-vector/logo-organic-restaurant_1071-147.jpg";
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        class="card-img-top"
        src={img}
        alt="Card image cap"
        style={{ height: 50, width: 50, borderRadius: 25 }}
      />
      <h5 className="text-light ml-2 text-success "> The Restaurant </h5>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="/">Home</Link> <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Link to="/contact">Contact</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <Link to="/about">About</Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <Link to="/userinfo">User Info</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
