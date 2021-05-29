import React from "react";
import {
  NavLink,
} from "react-router-dom";

export const Navigator = () => {
  return (
    // <!-- Navbar -->
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div className='container-fluid'>
      <a className="navbar-brand" href="/">
        Juan Mangiantini | Director 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
          <li className="nav-item">
            <NavLink 
            activeStyle={{color:'blue',textDecoration:'underline'}} 
            className="nav-link" 
            to="/directing"
            >
              Directing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  
            activeStyle={{color:'blue',textDecoration:'underline'}}
            className="nav-link" 
            to="/cinematography"
            >
              Cinematography
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            className="nav-link"
            to="/videoclip"
            activeStyle={{color:'blue',textDecoration:'underline'}}
            >
              Videoclip
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            className="nav-link" 
            to="/podcast"
            activeStyle={{color:'blue',textDecoration:'underline'}}
            >
              Podcast
            </NavLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    // <!-- Navbar -->
  );
};
