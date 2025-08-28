import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-leaf"></i> SmartAgri
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Farmers Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-tractor"></i> Farmers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/farmer/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/farmer/login">
                    Login
                  </Link>
                </li>
              </ul>
            </li>

            {/* Buyers Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-shopping-cart"></i> Buyers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/buyer/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/buyer/login">
                    Login
                  </Link>
                </li>
              </ul>
            </li>

            {/* Admin Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-user-shield"></i> Admin
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/login">
                    Login
                  </Link>
                </li>
              </ul>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <i className="fas fa-blog"></i> Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
