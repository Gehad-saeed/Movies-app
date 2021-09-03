import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark dark bg-transparent">
  <div className="container-fluid">
    <NavLink className=" navbar-brand font-weight-bold" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className=" nav-link font-weight-bold" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link font-weight-bold" to="/movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link font-weight-bold" to="/tv">Tv</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link font-weight-bold" aria-current="page" to="/login">LogIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link font-weight-bold" aria-current="page" to="/register">Register</NavLink>
        </li>
         
      </ul>
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default NavBar;
