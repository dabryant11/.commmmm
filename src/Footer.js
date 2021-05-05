import React from "react";
function Footer() {
  return (
    <div>
      <footer id="contact" style={{ backgroundColor: "rgb(244, 219, 82)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">FIND ME ON THE WEB</h2>
              <div className="row">
                <div className="col-lg-6">
                  <p className="social">
                    <a
                      href="https://www.linkedin.com/in/darien-bryant-m-s/"
                      title
                      target="_blank"
                      className="linkedin"
                    >
                      <i className="fa fa-linkedin-square" />
                    </a>
                    <a
                      href="https://github.com/dabryant11"
                      title
                      target="_blank"
                      className="github"
                    >
                      <i className="fa fa-github" aria-hidden="true" />
                    </a>

                    <a
                      href="mailto:darienbryant11@gmail.com"
                      title
                      target="_blank"
                      className="email"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2021 Darien Bryant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
