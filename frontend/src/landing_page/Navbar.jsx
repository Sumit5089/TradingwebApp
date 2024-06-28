import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav class="navbar fixed-top bg-white navbar-expand-lg border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            className="mx-4"
            src="media/logo.svg"
            style={{ width: "22%" }}
            alt="llogo img"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                    About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                    Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                    Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                    Support
                </Link>
              </li>
                 
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
