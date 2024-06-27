import React from "react";

function Navbar() {
  return (
    <nav class="navbar fixed-top bg-white navbar-expand-lg border-bottom">
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            className="mx-5"
            src="media/logo.svg"
            style={{ width: "22%" }}
            alt="llogo img"
          />
        </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    Support
                </a>
              </li>
                 
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
