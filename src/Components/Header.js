import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 fw-semibold" href="#">
            Flatlogic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Centering the navbar items */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                {" "}
                {/* Added margin-right */}
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown me-4">
                {" "}
                {/* Added margin-right */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownPages"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownPages"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Page 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-4">
                {" "}
                {/* Added margin-right */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownShop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownShop"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Shop 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shop 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown me-4">
                {" "}
                {/* Added margin-right */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownBlog"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownBlog"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Right-side icons without outline */}
            <form className="d-flex me-5">
              <button className="btn btn-light" type="button">
                <FaSearch />
              </button>
              <button className="btn btn-light ms-2" type="button">
                <FaUser />
              </button>
              <button className="btn btn-light ms-2" type="button">
                <FaShoppingCart />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
