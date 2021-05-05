import React from "react";
function Header() {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <button
              // type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars" />
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#intro" className="nav-link link-scroll active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link link-scroll">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link link-scroll">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#writings" className="nav-link link-scroll">
                    Writings
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link link-scroll">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://drive.google.com/file/d/1P0PtdiuoGwP_IQZB4Vd_ysUPTajLx06Z/view"
                    className="nav-link link-scroll"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
