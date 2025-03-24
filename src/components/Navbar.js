import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mt-1">
            <NavLink className="navbar-brand" to="#">Covid-19    <strong> Resources</strong></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav ms-auto text-center">
                <li className="nav-item active">
                  <NavLink className="nav-link ms-3 mr-2" to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link toplink mr-2 ml-2 " to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mr-2 ml-2" to="/data">Data</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Resources
        </NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item font-weight-bold" to="/oxygen">Oxygen</NavLink>

                    <NavLink className="dropdown-item font-weight-bold" to="/beds">Hospitals Beds</NavLink>
                    <NavLink className="dropdown-item font-weight-bold" to="/medicine">Medicines</NavLink>
                    <NavLink className="dropdown-item font-weight-bold" to="/">Food</NavLink>

                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/contact">Contact Us</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mr-2 ml-2" to="/contact">Contact</NavLink>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Navbar
