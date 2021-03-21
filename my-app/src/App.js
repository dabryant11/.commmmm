import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>DARIEN BRYANT</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow" />
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="vendor/font-awesome/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@700&family=Bungee&family=Cabin+Sketch:wght@700&family=Quicksand&display=swap"
        />
        <link rel="stylesheet" href="vendor/lightbox2/css/lightbox.min.css" />
        <link
          rel="stylesheet"
          href="css/style.default.css"
          id="theme-stylesheet"
        />
        <link rel="stylesheet" href="css/custom.css" />
        <link rel="shortcut icon" href="img/favicon.png" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}',
          }}
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "/* add css styles here (optional) */\n\n.styles_react-code-input-container__tpiKG {\n  position: relative;\n}\n\n.styles_react-code-input__CRulA > input {\n  border: solid 1px #a8adb7;\n  border-right: none;\n  font-family: 'Lato';\n  font-size: 20px;\n  color: #525461;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0;\n  -webkit-appearance: initial;\n}\n\n.styles_react-code-input__CRulA > input:last-child {\n  border-right: solid 1px #a8adb7;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:focus {\n  outline: none;\n  border: 1px solid #006fff;\n  caret-color: #006fff;\n}\n\n.styles_react-code-input__CRulA > input:focus + input {\n  border-left: none;\n}\n\n.styles_loading__Z65VQ {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\n.styles_blur__19vMK {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  opacity: 0.5;\n  filter: blur(0.5px);\n  transition: opacity 0.3s;\n}\n\n.styles_title__1cca0 {\n  margin: 0;\n  height: 20px;\n  padding-bottom: 10px;\n}\n\n.styles_spin__6y_8G {\n  display: inline-block;\n  animation: styles_loadingCircle__293ky 1s infinite linear;\n}\n\n@keyframes styles_loadingCircle__293ky {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
          }}
        />
        <style
          type="text/css"
          data-styled-jsx
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </div>
      {/* navbar*/}
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
      {/* intro */}
      <section
        id="intro"
        style={{
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/Oakland_Bay_Bridge_Western_Part.jpg",
        }}
        className="intro"
      >
        <div className="overlay" />
        <div className="content">
          <div className="container clearfix">
            <div className="row">
              <div className="col-8">
                <p>Hi, I'm Darien</p>
                <h1>I am a Software Engineer based in Oakland, CA.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro end*/}
      {/* about*/}
      <section id="about" className="section-inverse">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="heading">About me</h2>
            </div>
            <div className="col-lg-6">
              {/* <p class="lead">Tell me about yourself</p> */}
              <p>
                Full stack developer who has transitioned into a tech career to
                diversify his skillset and increase software implementation in
                the industries of previous experience. Leveraging a background
                in Federal, State and local policy issues focused on Primary and
                Secondary Education has allowed me to be collaborative across
                industries. Blended a career of athletics, diplomacy, and
                political analysis with a personal passion for global education,
                youth development, and equipping the next generation of global
                leaders. Desire to impact sectors that are eager to implement
                new technologies.
              </p>

              <br />
              <p />
              <h5>
                <a
                  href="https://drive.google.com/file/d/1P0PtdiuoGwP_IQZB4Vd_ysUPTajLx06Z/view"
                  target="_blank"
                >
                  download resume
                </a>{" "}
                <i className="fa fa-download" aria-hidden="true" />
              </h5>
              <p />
            </div>
            <div className="col-lg-5 mx-auto">
              <p>
                <img src="img/profile.png" alt="" className="profile-image" />
              </p>
              {/* <p><img src="img/teacher.jpg" alt="" class="profile-sub-image"><img src="img/cooper.jpg" alt="" class="profile-sub-image"></p> */}
            </div>
          </div>
        </div>
      </section>
      {/* about end*/}
      {/* Skills*/}
      <section id="skills" style={{ backgroundColor: "#15966b" }}>
        <div className="container">
          <div className="row skills">
            <div className="col-lg-12">
              <h2 className="heading">Technical Skills</h2>
              <div className="row">
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/js_icon.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>JavaScript</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/ruby_icon.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>Ruby</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/react_icon.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>React</h6>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="./img/rails.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>Ruby on Rails</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/css.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>CSS</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/html.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>HTML5</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="box">
                    <div className="icon">
                      <img
                        src="img/bootstrap.png"
                        alt=""
                        className="img-technology"
                      />
                    </div>
                    <h6>Bootstrap</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills end*/}
      {/* Projects*/}
      <section id="projects" className="section-inverse">
        <div className="container clearfix">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <h2 className="heading">Featured Projects</h2>
                <p />
              </div>
              <div className="row">
                <div className="featured-project-card">
                  <a href="" target="_blank">
                    <img
                      src="img/portfolio-1.jpg"
                      alt="PLACEHOLDER"
                      className="img-fluid"
                      id="card"
                    />
                  </a>
                  <br />
                  <br />
                  <h5>Responsible Representation</h5>
                  <p>
                    A Directory of Ohio Legislators, Bills, Committees, State
                    Agenices and Campaign Finance reports
                  </p>
                  <h6>Tech Stack:</h6>
                  <p>
                    React, Ruby on Rails API, NYC Open Data API, Google Maps
                    API, PostgreSQL, Active Record Rack Cors, Active Model
                    Serializer, BCrypt, JWT, Semantic UI, HTML, CSS
                  </p>
                  <div className="icon-row">
                    <h5>
                      <a href="https://youtu.be/XhGUIsml7eE" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                      <a href="" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="featured-project-card">
                  <a href="" target="_blank">
                    <img
                      src="img/portfolio-1.jpg"
                      alt="PLACEHOLDER"
                      className="img-fluid"
                      id="card"
                    />
                  </a>
                  <br />
                  <br />
                  <h5>Recycle NYC</h5>
                  <p>A Directory of 1000+ NYC recycling locations</p>
                  <h6>Tech Stack:</h6>
                  <p>
                    React, Ruby on Rails API, NYC Open Data API, Google Maps
                    API, PostgreSQL, Active Record Rack Cors, Active Model
                    Serializer, BCrypt, JWT, Semantic UI, HTML, CSS
                  </p>
                  <div className="icon-row">
                    <h5>
                      <a href="https://youtu.be/XhGUIsml7eE" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                      <a href="" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="featured-project-card">
                  <a href="" target="_blank">
                    <img
                      src="img/portfolio-1.jpg"
                      alt="PLACEHOLDER"
                      className="img-fluid"
                      id="card"
                    />
                  </a>
                  <br />
                  <br />
                  <h5>Recipe Book</h5>
                  <p>A Directory of Recipes</p>
                  <h6>Tech Stack:</h6>
                  <p>
                    Ruby on Rails API, Javascript, Active Record Rack Cors,
                    HTML, CSS
                  </p>
                  <div className="icon-row">
                    <h5>
                      <a href="https://youtu.be/XhGUIsml7eE" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                      <a href="" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="featured-project-card">
                  <a href="" target="_blank">
                    <img
                      src="img/portfolio-1.jpg"
                      alt="PLACEHOLDER"
                      className="img-fluid"
                      id="card"
                    />
                  </a>
                  <br />
                  <br />
                  <h5>Finstagram</h5>
                  <p>Instagram Clone</p>
                  <h6>Tech Stack:</h6>
                  <p>Ruby on Rails API</p>
                  <div className="icon-row">
                    <h5>
                      <a href="https://youtu.be/XhGUIsml7eE" target="_blank">
                        <i className="fa fa-youtube-play" aria-hidden="true" />
                      </a>
                      <a
                        href="https://github.com/iannakim/NYC-School-Monitor_frontend"
                        target="_blank"
                      >
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects end*/}
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
      <div
        id="lightboxOverlay"
        className="lightboxOverlay"
        style={{ display: "none" }}
      />
      <div id="lightbox" className="lightbox" style={{ display: "none" }}>
        <div className="lb-outerContainer">
          <div className="lb-container">
            <img
              className="lb-image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            <div className="lb-nav">
              <a className="lb-prev" href />
              <a className="lb-next" href />
            </div>
            <div className="lb-loader">
              <a className="lb-cancel" />
            </div>
          </div>
        </div>
        <div className="lb-dataContainer">
          <div className="lb-data">
            <div className="lb-details">
              <span className="lb-caption" />
              <span className="lb-number" />
            </div>
            <div className="lb-closeContainer">
              <a className="lb-close" />
            </div>
          </div>
        </div>
      </div>
      <div id="jobseer-app-root">
        <div className="App_app__149U- App_container__19p2R App_extension__E_Tgi">
          <div
            id="jobseer-main-container"
            className="App_main-container__cEGmw "
          >
            <main
              id="jobseer-main"
              className="App_main__2i7Lm App_fromSm__2iURZ App_hidden__1GGjt"
            >
              <div className="App_main-inner__1zpbH">
                <div
                  className="Header_header-shadow__X-svx"
                  style={{
                    zIndex: 999,
                    position: "sticky",
                    top: "0px",
                    padding: "8px 16px",
                    backgroundColor: "white",
                    color: "rgb(42, 50, 73)",
                    height: "40px",
                  }}
                >
                  <img
                    src="chrome-extension://fgmojdlldojifnjgpnhmfdchbiapfjhb/media/jobseer-with-bg.b13d61da.png"
                    alt="Jobseer Logo"
                    style={{
                      width: "62px",
                      position: "absolute",
                      left: "16px",
                      height: "62px",
                      top: "0px",
                    }}
                  />
                  <span
                    style={{ position: "absolute", left: "98px", top: "10px" }}
                  >
                    <svg
                      width="199px"
                      height="39px"
                      viewBox="0 0 199 39"
                      style={{ width: "78px", height: "22px" }}
                    >
                      <defs>
                        <linearGradient
                          x1="100%"
                          y1="50%"
                          x2="0%"
                          y2="50%"
                          id="linearGradient-1"
                        >
                          <stop stopColor="#FFFFFF" offset="0%" />
                          <stop stopColor="#5C79FF" offset="51.7509834%" />
                          <stop stopColor="#1B44FF" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          x1="100%"
                          y1="50%"
                          x2="0%"
                          y2="50%"
                          id="linearGradient-2"
                        >
                          <stop stopColor="#1B44FF" offset="0%" />
                          <stop stopColor="#5C79FF" offset="48.2490166%" />
                          <stop stopColor="#FFFFFF" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g
                        id="logo"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="company-logo"
                          transform="translate(-143.000000, -164.000000)"
                          fillRule="nonzero"
                        >
                          <g
                            id="\u8D44\u6E90-13jobseertext"
                            transform="translate(143.000000, 164.000000)"
                          >
                            <path
                              d="M2.25,37.49 C1.40441298,36.904044 0.929561481,35.9163529 1,34.89 C0.930945063,34.0268126 1.22028327,33.1732648 1.8,32.53 C2.50028683,31.9522661 3.3822063,31.6405838 4.29,31.65 L5.99,31.55 C8.54,31.44 9.82,29.94 9.82,27.03 L9.82,4.3 C9.75969526,3.17815853 10.1861039,2.08480313 10.99,1.3 C11.8071791,0.548732781 12.8912688,0.156155422 14,0.21 C15.1108445,0.158902847 16.1944157,0.563436095 17,1.33 C17.7820901,2.12703808 18.1954066,3.21471317 18.14,4.33 L18.14,26.93 C18.14,33.9366667 14.6366667,37.67 7.63,38.13 L5.93,38.24 C4.65486172,38.3860085 3.36629294,38.1233926 2.25,37.49 Z"
                              id="\u8DEF\u5F84"
                              fill="#1B44FF"
                            />
                            <path
                              d="M78.33,12.85 C80.1037263,13.9975759 81.5124084,15.6283163 82.39,17.55 C83.4009437,19.7743504 83.8998669,22.1972034 83.85,24.64 C83.8953942,27.1017307 83.3968692,29.543137 82.39,31.79 C81.5080147,33.7525926 80.0904248,35.4266657 78.3,36.62 C76.5174347,37.7813858 74.4271359,38.3806048 72.3,38.34 C70.6012245,38.3663166 68.9220025,37.9748415 67.41,37.2 C66.017357,36.4765691 64.8641866,35.3650795 64.09,34 L64.09,34.43 C64.1393673,35.4666997 63.7426195,36.4749486 63,37.2 C62.21615,37.904728 61.182061,38.2650377 60.13,38.2 C59.0722406,38.2626086 58.0328568,37.9029602 57.24,37.2 C56.5025901,36.4880103 56.105747,35.4940822 56.15,34.47 L56.15,3.88 C56.1120008,2.8672651 56.5304339,1.89092123 57.29,1.22 C58.1301025,0.523851286 59.2002288,0.167142524 60.29,0.22 C61.3231842,0.181158388 62.3321032,0.538931096 63.11,1.22 C63.8212042,1.85401092 64.2194519,2.76742301 64.2,3.72 L64.2,15.35 C64.9899042,14.0323863 66.1424813,12.9700712 67.52,12.29 C69.0156719,11.555556 70.6639146,11.1854724 72.33,11.21 C74.4456355,11.1719963 76.5278425,11.7411328 78.33,12.85 Z M74.33,30.25 C75.4502209,28.6020455 75.9918635,26.6289189 75.87,24.64 C76.0006687,22.7031962 75.4564937,20.7809159 74.33,19.2 C73.2036655,17.986264 71.6198143,17.3007047 69.9640081,17.3101124 C68.3082019,17.3197151 66.7323258,18.0234129 65.62,19.25 C64.5023564,20.8577924 63.9597695,22.7956029 64.08,24.75 C63.9538772,26.7206164 64.4964879,28.6761291 65.62,30.3 C66.6837218,31.6125489 68.3131679,32.3342671 70,32.24 C71.6843478,32.3226672 73.3035068,31.5802417 74.34,30.25 L74.33,30.25 Z"
                              id="\u5F62\u72B6"
                              fill="#1B44FF"
                            />
                            <path
                              d="M146,31 C146.460436,31.6271983 146.693246,32.3926495 146.66,33.17 C146.664496,33.7718156 146.479028,34.3597128 146.13,34.85 C145.741254,35.389616 145.235241,35.834087 144.65,36.15 C143.315456,36.8316213 141.905921,37.3551627 140.45,37.71 C139.011469,38.0978166 137.529791,38.3027653 136.04,38.32 C133.473481,38.3830751 130.930209,37.8201917 128.63,36.68 C126.581379,35.6276889 124.890276,33.9922596 123.77,31.98 C122.595865,29.7652723 122.010483,27.2860068 122.07,24.78 C122.022773,22.3259058 122.589978,19.898958 123.72,17.72 C124.765411,15.7221797 126.348255,14.0562101 128.29,12.91 C130.305833,11.7437409 132.601466,11.1490889 134.93,11.19 C137.112097,11.1424613 139.266992,11.6811849 141.17,12.75 C142.958984,13.8059587 144.406521,15.3541631 145.34,17.21 C146.356239,19.325558 146.85006,21.6540633 146.78,24 C146.826163,24.6382163 146.62974,25.2703412 146.23,25.77 C145.823789,26.1982062 145.249181,26.4251217 144.66,26.39 L129.79,26.39 C129.864539,28.0827611 130.541998,29.6930568 131.7,30.93 C132.942095,31.9337912 134.516365,32.4335597 136.11,32.33 C137.043259,32.3442298 137.973441,32.2195314 138.87,31.96 C139.790984,31.6766021 140.695683,31.3427646 141.58,30.96 C142.07,30.75 142.58,30.56 143.01,30.4 C143.402218,30.2603068 143.813842,30.1827057 144.23,30.17 C144.921357,30.1348909 145.584876,30.4460327 146,31 Z M131.43,18.19 C130.422897,19.3713613 129.844919,20.8585956 129.79,22.41 L140.000096,22.41 C140.008009,20.8771646 139.512654,19.3840744 138.59,18.16 C137.687907,17.1772367 136.391742,16.6521614 135.06,16.73 C133.698228,16.6828518 132.379892,17.2130916 131.43,18.19 L131.43,18.19 Z"
                              id="\u5F62\u72B6"
                              fill="#1B44FF"
                            />
                            <path
                              d="M174.27,31 C174.730436,31.6271983 174.963246,32.3926495 174.93,33.17 C174.929847,33.7711084 174.744815,34.3576245 174.4,34.85 C174.009983,35.3922137 173.500083,35.8370931 172.91,36.15 C171.579596,36.8330888 170.173194,37.3567132 168.72,37.71 C167.281216,38.0965721 165.799696,38.3014989 164.31,38.32 C161.743481,38.3830751 159.200209,37.8201917 156.9,36.68 C154.835159,35.6454661 153.128229,34.0151744 152,32 C150.825865,29.7852723 150.240483,27.3060068 150.3,24.8 C150.268183,22.3416253 150.852634,19.9144354 152,17.74 C153.041817,15.7428792 154.621274,14.0768294 156.56,12.93 C158.575833,11.7637409 160.871466,11.1690889 163.2,11.21 C165.382427,11.1595045 167.538091,11.6984205 169.44,12.77 C171.233672,13.8201054 172.682676,15.3698795 173.61,17.23 C174.63691,19.3360902 175.144402,21.6575225 175.09,24 C175.133358,24.6395251 174.933318,25.2717962 174.53,25.77 C174.123789,26.1982062 173.549181,26.4251217 172.96,26.39 L158.1,26.39 C158.160525,28.08691 158.835782,29.7039727 160,30.94 C161.237599,31.9449094 162.809254,32.4449813 164.4,32.34 C165.336542,32.3541856 166.270015,32.2294978 167.17,31.97 C168.087669,31.686466 168.989033,31.3526275 169.87,30.97 C170.37,30.76 170.87,30.57 171.31,30.41 C171.702218,30.2703068 172.113842,30.1927057 172.53,30.18 C173.208792,30.1543307 173.857718,30.4601463 174.27,31 L174.27,31 Z M159.74,18.19 C158.732897,19.3713613 158.154919,20.8585956 158.1,22.41 L168.34,22.41 C168.35612,20.8775006 167.863776,19.3828864 166.94,18.16 C166.037907,17.1772367 164.741742,16.6521614 163.41,16.73 C162.034277,16.6700817 160.698615,17.2014347 159.74,18.19 L159.74,18.19 Z"
                              id="\u5F62\u72B6"
                              fill="#1B44FF"
                            />
                            <path
                              d="M198,12 C198.658941,12.6459912 198.999253,13.5498306 198.93,14.47 C199.008094,15.4140263 198.705667,16.3501119 198.09,17.07 C197.234268,17.7445175 196.179536,18.1171895 195.09,18.13 L193.49,18.29 C191.885907,18.3427244 190.368239,19.0296308 189.27,20.2 C188.368279,21.3675653 187.907872,22.8160765 187.97,24.29 L187.97,34.47 C188.045621,35.5326594 187.624619,36.5703915 186.83,37.28 C186.036619,37.9479197 185.026832,38.3034785 183.99,38.28 C182.933974,38.3098753 181.903164,37.9544238 181.09,37.28 C180.295381,36.5703915 179.874379,35.5326594 179.95,34.47 L179.95,15 C179.89174,13.9628693 180.325213,12.958841 181.12,12.29 C181.906913,11.6313054 182.903877,11.276514 183.93,11.29 C184.901734,11.2566725 185.850719,11.5884606 186.59,12.22 C187.314376,12.8761086 187.703879,13.8241435 187.65,14.8 L187.65,16.23 C188.221985,14.7858758 189.237352,13.5604326 190.55,12.73 C191.816362,11.9184875 193.26884,11.4435065 194.77,11.35 L195.51,11.29 C196.402155,11.176383 197.301932,11.4329456 198,12 Z"
                              id="\u8DEF\u5F84"
                              fill="#1B44FF"
                            />
                            <path
                              d="M29.23,36.06 L32.8,29.87 C31.9534618,28.3011257 31.5523123,26.5305349 31.64,24.75 C31.64,19.7633333 33.59,17.2666667 37.49,17.26 C38.2927618,17.2511353 39.0900051,17.3936213 39.84,17.68 L43.06,12.11 C41.2691208,11.4910595 39.3846732,11.1865707 37.49,11.21 C34.9660266,11.15604 32.4670319,11.7190003 30.21,12.85 C28.1696379,13.903162 26.4884255,15.5391244 25.38,17.55 C24.2011803,19.7629635 23.6155038,22.2434758 23.68,24.75 C23.6155038,27.2565242 24.2011803,29.7370365 25.38,31.95 C26.308575,33.6137488 27.6303935,35.024833 29.23,36.06 Z"
                              id="\u8DEF\u5F84"
                              fill="#1B44FF"
                            />
                            <path
                              d="M45.7,13.43 L42.13,19.62 C43.0087411,21.1814657 43.4249525,22.9607697 43.33,24.75 C43.33,29.7433333 41.3833333,32.24 37.49,32.24 C36.670773,32.2513339 35.8566914,32.1088696 35.09,31.82 L31.86,37.41 C33.6669623,38.0502694 35.5731208,38.3651411 37.49,38.34 C40.0146432,38.3979406 42.5137241,37.8238738 44.76,36.67 C46.7932175,35.6172287 48.4752333,33.994292 49.6,32 C50.7741352,29.7852723 51.3595173,27.3060068 51.3,24.8 C51.3595173,22.2939932 50.7741352,19.8147277 49.6,17.6 C48.6680721,15.9065305 47.3273927,14.4730348 45.7,13.43 Z"
                              id="\u8DEF\u5F84"
                              fill="#1B44FF"
                            />
                            <path
                              d="M94.13,20.45 C96.1239657,21.3564454 98.2091567,22.0470392 100.35,22.51 L104.16,15.92 C102.648515,15.5934097 101.158939,15.172588 99.7,14.66 C98.800105,14.3669664 97.9815067,13.8669021 97.31,13.2 C96.8242515,12.6105112 96.5716267,11.863311 96.6,11.1 C96.5803449,9.7132644 97.2804099,8.41530597 98.45,7.67 C99.9908682,6.76363412 101.765,6.33227653 103.55,6.43 C105.128624,6.38292934 106.703065,6.61655604 108.2,7.12 C109.599661,7.67349111 110.939803,8.36701466 112.2,9.19 C112.645991,9.4661254 113.11831,9.69726042 113.61,9.88 C113.963539,9.98641918 114.330792,10.040328 114.7,10.04 C115.447931,10.01661 116.142565,9.64712359 116.58,9.04 C117.126946,8.38398372 117.421329,7.5540366 117.41,6.7 C117.426299,6.13961946 117.306187,5.58367068 117.06,5.08 C116.771714,4.5741104 116.383912,4.13187968 115.92,3.78 C112.64,1.26 108.5,-8.85142654e-16 103.5,-8.85142654e-16 C100.84599,-0.0438933921 98.2123889,0.470561666 95.77,1.51 C93.6378941,2.4020829 91.7861029,3.8531133 90.41,5.71 C89.1376607,7.45073059 88.4576412,9.55388367 88.47,11.71 C88.4148634,13.5208296 88.8836282,15.3090804 89.82,16.86 C90.8953077,18.433783 92.3877557,19.6769125 94.13,20.45 Z"
                              id="\u8DEF\u5F84"
                              fill="url(#linearGradient-1)"
                            />
                            <path
                              d="M114.84,20.08 C112.728276,18.5788572 110.353977,17.4866798 107.84,16.86 L104.09,23.37 C105.47941,23.6722173 106.823896,24.1528711 108.09,24.8 C109.122865,25.2870461 109.789654,26.3182422 109.81,27.46 C109.865671,28.8212131 109.170812,30.103438 108,30.8 C106.361432,31.6856619 104.509867,32.1009661 102.65,32 C100.911145,32.0179677 99.1781297,31.7958725 97.5,31.34 C95.8666359,30.8668677 94.3104624,30.1595161 92.88,29.24 C92.4534408,28.9686382 91.9971151,28.747186 91.52,28.58 C91.1535787,28.4522637 90.7680427,28.3880077 90.38,28.39 C89.631664,28.411865 88.9363963,28.7816883 88.5,29.39 C87.6060819,30.5292847 87.4210082,32.0715661 88.02,33.39 C88.3001117,33.8878554 88.6899792,34.3153417 89.16,34.64 C90.9204517,35.9549449 92.9266433,36.9036355 95.06,37.43 C97.6044328,38.1063139 100.227248,38.4425723 102.86,38.43 C105.575599,38.4882727 108.275364,38.002043 110.8,37 C112.909535,36.1900119 114.749328,34.8041039 116.11,33 C117.369039,31.255389 118.031846,29.1512399 118,27 C118.139913,24.3157046 116.960177,21.7322312 114.84,20.08 Z"
                              id="\u8DEF\u5F84"
                              fill="url(#linearGradient-2)"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
                <div style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
                  <div
                    style={{
                      padding: "32px 16px 16px",
                      height: "100%",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="Common_h2__13uCV"
                      style={{ marginBottom: "0px", marginTop: "0px" }}
                    >
                      Start job search
                    </div>
                    <div
                      className="Common_h6__1OU1O"
                      style={{ marginBottom: "16px", marginBlockStart: "0px" }}
                    >
                      Click the website to start job search
                    </div>
                    <div className="jsx-220741319 tutorial">
                      <div className="jsx-220741319 tutorial__website">
                        <div
                          className="jsx-220741319"
                          style={{ display: "block" }}
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            className="tutorial__website__icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <g>
                                <g transform="translate(-62 -115) translate(62 115)">
                                  <rect
                                    width={48}
                                    height={48}
                                    fill="#E4EFF4"
                                    rx={8}
                                  />
                                  <g fillRule="nonzero">
                                    <path
                                      fill="#006A9A"
                                      d="M2.165 10.537h5.69v17.749h-5.69V10.537zm2.847-8.823c1.82 0 3.294 1.434 3.294 3.198 0 1.765-1.475 3.2-3.294 3.2-1.826 0-3.298-1.435-3.298-3.2 0-1.764 1.472-3.198 3.298-3.198m6.41 8.823h5.45v2.426h.076c.758-1.396 2.614-2.867 5.38-2.867 5.751 0 6.815 3.674 6.815 8.455v9.735h-5.68v-8.63c0-2.06-.041-4.707-2.954-4.707-2.959 0-3.41 2.241-3.41 4.555v8.782h-5.677V10.537z"
                                      transform="translate(8.571 8.571)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div
                            className="jsx-220741319 Common_h5__3WAC4"
                            style={{ margin: "12px 0px" }}
                          >
                            LinkedIn
                          </div>
                          <button className="jsx-220741319 tutorial__website__start-button">
                            Start
                          </button>
                        </div>
                      </div>
                      <div className="jsx-220741319 tutorial__website">
                        <div
                          className="jsx-220741319"
                          style={{ display: "block" }}
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            className="tutorial__website__icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <g>
                                <g transform="translate(-166 -115) translate(166 115)">
                                  <rect
                                    width={48}
                                    height={48}
                                    fill="#E8EFFD"
                                    rx={8}
                                  />
                                  <g fill="#2164F3" fillRule="nonzero">
                                    <path
                                      d="M13.994 13.253c-1.397.717-3.09.52-4.286-.497-1.196-1.018-1.661-2.657-1.177-4.152.483-1.494 1.82-2.55 3.386-2.673 1.566-.124 3.052.708 3.765 2.108l.01.022c.264.508.417 1.11.417 1.746 0 1.447-.807 2.773-2.092 3.436l-.022.01zM9.852.736c3.175-1.158 6.807-1.095 9.524 1.262.565.466 1.012 1.06 1.303 1.732l.012.03c.274.887-.963-.09-1.131-.216-.831-.572-1.731-1.036-2.68-1.38l-.084-.028C11.443.496 6.378 3.481 3.248 8.121c-1.25 1.99-2.21 4.15-2.847 6.413l-.043.177c-.065.312-.16.588-.283.848l.01-.023c-.138.262-.063-.703-.063-.736.131-1.096.325-2.073.586-3.02l-.034.142C2.024 6.866 5.237 2.655 9.854.736h-.002zM9.9 27.725V16.459c.32.032.625.047.946.047h.025c1.52 0 2.941-.428 4.148-1.17l-.034.019v12.368c0 1.057-.193 1.839-.668 2.348-.457.5-1.103.786-1.78.786l-.091-.002h.005c-.697.026-1.369-.26-1.833-.78l-.002-.002c-.474-.52-.72-1.303-.715-2.348z"
                                      transform="translate(11.143 8.571)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div
                            className="jsx-220741319 Common_h5__3WAC4"
                            style={{ margin: "12px 0px" }}
                          >
                            Indeed
                          </div>
                          <button className="jsx-220741319 tutorial__website__start-button">
                            Start
                          </button>
                        </div>
                      </div>
                      <div className="jsx-220741319 tutorial__website">
                        <div
                          className="jsx-220741319"
                          style={{ display: "block" }}
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            className="tutorial__website__icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <g>
                                <g transform="translate(-374 -115) translate(374 115)">
                                  <rect
                                    width={48}
                                    height={48}
                                    fill="#FFF0F0"
                                    rx={8}
                                  />
                                  <g fillRule="nonzero">
                                    <path
                                      fill="#C00"
                                      d="M31.97.034H4.99c-1.11 0-2.003.9-2.003 2.003L2.981 14.38c0 .017.006.034.006.05 0 1.817-1.262 3.338-2.959 3.746H31.97c1.109 0 2.003-.9 2.003-2.003V2.037c0-1.104-.9-2.003-2.003-2.003"
                                      transform="translate(7 15)"
                                    />
                                    <path
                                      fill="#FFFFFE"
                                      d="M13.623 7.173l-.911 4.198c.249 0 .413-.05.492-.141.08-.097.164-.357.26-.781l.538-2.484c.062-.288.09-.475.09-.56 0-.073-.034-.141-.096-.18-.057-.029-.181-.052-.373-.052zm-1.454-1.091h1.273c.82 0 1.369.033 1.64.107.272.074.464.192.583.362.113.17.17.356.164.566-.006.21-.08.61-.21 1.216l-.486 2.235c-.124.577-.237.956-.334 1.148-.096.192-.226.345-.384.458-.164.108-.345.181-.56.227-.21.04-.52.062-.928.062h-2.144l1.386-6.381zm6.008 0l-.181.825h-1.658l.175-.825h1.664zm-.25 1.154l-1.12 5.238H15.15l1.12-5.238h1.658zm3.497 1.912H19.93l.125-.594c.045-.21.056-.351.04-.419-.023-.073-.074-.113-.165-.113-.09 0-.158.034-.203.096-.045.068-.09.21-.142.436l-.52 2.444c-.04.18-.045.322-.017.413.028.09.085.141.175.141.108 0 .193-.05.25-.141.056-.097.118-.278.175-.55l.13-.616h1.408c-.09.413-.17.724-.243.934-.068.209-.204.418-.396.639-.187.215-.419.379-.679.492-.26.108-.566.164-.916.164-.447 0-.787-.073-1.013-.226-.232-.147-.368-.362-.419-.64-.05-.27-.022-.667.085-1.17l.311-1.477c.097-.441.21-.775.346-1.001.135-.22.367-.425.695-.6.329-.175.696-.266 1.11-.266.412 0 .746.085 1 .26.255.176.402.396.442.662.05.266.017.64-.085 1.132m2.732-.119l.085-.38c.062-.265.085-.44.068-.52-.011-.073-.068-.113-.164-.113-.119 0-.198.034-.243.096-.045.068-.096.244-.164.538l-.085.379h.503zm1.483.843H23.46l-.255 1.12c-.05.232-.068.385-.045.453.022.067.085.101.186.101.13 0 .227-.045.289-.135.062-.09.124-.266.181-.52l.153-.685h1.59l-.085.384c-.074.317-.148.566-.232.741-.08.176-.227.357-.425.55-.203.192-.441.344-.701.44-.266.102-.577.148-.945.148-.356 0-.656-.046-.905-.148-.249-.096-.436-.226-.543-.396-.113-.164-.176-.356-.187-.56-.011-.198.028-.497.113-.882l.34-1.516c.102-.453.249-.81.435-1.075.193-.26.447-.464.775-.6.328-.141.685-.21 1.07-.21.47 0 .842.086 1.108.255.266.164.436.39.493.668.062.277.033.668-.08 1.171.006.006-.152.696-.152.696zm1.256-3.344h.147c.073 0 .124-.01.158-.028.028-.017.045-.05.045-.096 0-.034-.017-.068-.045-.09-.028-.023-.08-.029-.141-.029h-.164v.243zm-.182.51v-.894h.425c.102 0 .18.022.226.073.045.046.074.113.074.181 0 .068-.023.125-.063.164-.04.04-.101.068-.18.085.033.012.062.029.084.057.023.022.057.073.102.153l.102.18h-.215l-.074-.14c-.045-.086-.085-.142-.118-.176-.034-.034-.085-.051-.136-.045h-.045v.367l-.182-.005zm.39-1.126c-.203 0-.373.068-.503.203-.124.125-.192.295-.192.476 0 .186.068.345.198.475s.294.198.475.198c.187 0 .345-.068.475-.198s.198-.294.198-.475c0-.13-.034-.244-.101-.357-.063-.102-.153-.186-.255-.243-.102-.05-.198-.08-.294-.08zm-.044-.164c.248 0 .458.085.616.249.159.164.243.362.243.588 0 .232-.084.43-.248.594-.165.164-.363.249-.594.249-.227.006-.442-.085-.594-.249-.159-.158-.25-.368-.244-.594 0-.164.046-.311.13-.447.085-.136.193-.238.323-.3.136-.062.26-.09.368-.09z"
                                      transform="translate(7 15)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div
                            className="jsx-220741319 Common_h5__3WAC4"
                            style={{ margin: "12px 0px" }}
                          >
                            Dice
                          </div>
                          <button className="jsx-220741319 tutorial__website__start-button">
                            Start
                          </button>
                        </div>
                      </div>
                      <div className="jsx-220741319 tutorial__website">
                        <div
                          className="jsx-220741319"
                          style={{ display: "block" }}
                        >
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            className="tutorial__website__icon"
                          >
                            <g fill="none" fillRule="evenodd">
                              <g>
                                <g transform="translate(-270 -115) translate(270 115)">
                                  <rect
                                    width={48}
                                    height={48}
                                    fill="#FDF4EC"
                                    rx={8}
                                  />
                                  <g fillRule="nonzero">
                                    <path
                                      fill="#4285F4"
                                      d="M27.41 14.328c0-.949-.077-1.902-.24-2.836H14.004v5.375h7.539c-.313 1.733-1.318 3.266-2.79 4.24v3.488h4.497c2.641-2.43 4.16-6.02 4.16-10.267z"
                                      transform="translate(10 10)"
                                    />
                                    <path
                                      fill="#34A853"
                                      d="M14.005 27.964c3.764 0 6.939-1.236 9.251-3.37l-4.497-3.486c-1.251.851-2.867 1.333-4.749 1.333-3.64 0-6.728-2.456-7.836-5.759h-4.64v3.595c2.369 4.713 7.194 7.687 12.471 7.687z"
                                      transform="translate(10 10)"
                                    />
                                    <path
                                      fill="#FBBC04"
                                      d="M6.17 16.682c-.585-1.733-.585-3.61 0-5.344V7.744H1.532c-1.98 3.943-1.98 8.59 0 12.533l4.636-3.595z"
                                      transform="translate(10 10)"
                                    />
                                    <path
                                      fill="#EA4335"
                                      d="M14.005 5.574c1.99-.03 3.913.718 5.354 2.093l3.985-3.985C20.82 1.312 17.472.01 14.005.052 8.728.051 3.903 3.025 1.533 7.743l4.636 3.594c1.103-3.307 4.195-5.764 7.836-5.764z"
                                      transform="translate(10 10)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div
                            className="jsx-220741319 Common_h5__3WAC4"
                            style={{ margin: "12px 0px" }}
                          >
                            Google
                          </div>
                          <button className="jsx-220741319 tutorial__website__start-button">
                            Start
                          </button>
                        </div>
                      </div>
                      <div className="jsx-220741319 tutorial__website">
                        <div
                          className="jsx-220741319"
                          style={{ display: "block" }}
                        >
                          <svg
                            width="48px"
                            height="48px"
                            viewBox="0 0 48 48"
                            className="tutorial__website__icon"
                          >
                            <g
                              id="logo"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="company-logo"
                                transform="translate(-314.000000, -66.000000)"
                              >
                                <g
                                  id="\u7F16\u7EC4-3"
                                  transform="translate(314.000000, 66.000000)"
                                >
                                  <rect
                                    id="\u77E9\u5F62"
                                    fill="#FFE6E4"
                                    x={0}
                                    y={0}
                                    width={48}
                                    height={48}
                                    rx={8}
                                  />
                                  <image
                                    id="bqag2d4y5czqb0vcepxv"
                                    x={9}
                                    y={9}
                                    width={30}
                                    height={30}
                                    xlinkHref="data:image/png;base64,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"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div
                            className="jsx-220741319 Common_h5__3WAC4"
                            style={{ margin: "12px 0px" }}
                          >
                            Handshake
                          </div>
                          <button className="jsx-220741319 tutorial__website__start-button">
                            Start
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="jsx-608748325"
                      style={{ marginTop: "32px", overflowX: "hidden" }}
                    >
                      <div
                        className="jsx-608748325 Common_h2__13uCV"
                        style={{ marginBottom: "0px" }}
                      >
                        Tutorial
                      </div>
                      <div
                        className="jsx-608748325 Common_h6__1OU1O"
                        style={{
                          marginBottom: "16px",
                          marginBlockStart: "0px",
                        }}
                      >
                        3 Tips to take full advantage of JobSeer
                      </div>
                      <div className="jsx-608748325 steps-container">
                        <div
                          className="jsx-608748325"
                          style={{
                            width: "95%",
                            height: "1px",
                            borderBottom: "1px dashed rgb(128, 128, 128)",
                            position: "absolute",
                            top: "50%",
                            left: "2.5%",
                          }}
                        />
                        <div className="jsx-1073655687 tutorial-video__step">
                          <div className="jsx-1073655687 tutorial-video__step__body">
                            <div className="jsx-1073655687 index">1</div>
                            <div className="jsx-1073655687 tutorial-title">
                              How to start?
                            </div>
                          </div>
                        </div>
                        <div className="jsx-161277894 tutorial-video__step">
                          <div className="jsx-161277894 tutorial-video__step__body">
                            <div className="jsx-161277894 index">2</div>
                            <div className="jsx-161277894 tutorial-title">
                              How to find contacts?
                            </div>
                          </div>
                        </div>
                        <div className="jsx-493700523 tutorial-video__step">
                          <div className="jsx-493700523 tutorial-video__step__body">
                            <div className="jsx-493700523 index">3</div>
                            <div className="jsx-493700523 tutorial-title">
                              How to check history?
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="jsx-608748325"
                        style={{
                          paddingTop: "8px",
                          position: "relative",
                          textAlign: "center",
                        }}
                      >
                        <video
                          controls
                          poster="chrome-extension://fgmojdlldojifnjgpnhmfdchbiapfjhb/images/app/intro-bg.png"
                          className="jsx-608748325"
                          style={{
                            width: "calc(100% - 16px)",
                            height: "179px",
                          }}
                        >
                          <source
                            src="chrome-extension://fgmojdlldojifnjgpnhmfdchbiapfjhb/videos/tutorial-1.mp4"
                            // type="video/mp4"
                            className="jsx-608748325"
                          />
                        </video>
                        <div
                          className="jsx-608748325"
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                            display: "block",
                          }}
                        >
                          <svg width="32px" height="32px" viewBox="0 0 32 32">
                            <title>play</title>
                            <defs>
                              <filter id="filter-1">
                                <feColorMatrix
                                  in="SourceGraphic"
                                  // type="matrix"
                                  values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                                />
                              </filter>
                            </defs>
                            <g
                              id="extension-beta-1"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Beta-tutorial-1"
                                transform="translate(-1089.000000, -656.000000)"
                              >
                                <g
                                  id="\u77E9\u5F62"
                                  transform="translate(930.000000, 0.000000)"
                                >
                                  <g
                                    id="\u64AD\u653E"
                                    transform="translate(16.000000, 467.000000)"
                                    filter="url(#filter-1)"
                                  >
                                    <g transform="translate(143.000000, 189.000000)">
                                      <rect
                                        id="\u77E9\u5F62"
                                        fill="#000000"
                                        fillRule="nonzero"
                                        opacity={0}
                                        x={0}
                                        y={0}
                                        width={32}
                                        height={32}
                                      />
                                      <path
                                        d="M16,2 C23.732,2 30,8.268 30,16 C30,23.732 23.732,30 16,30 C8.268,30 2,23.732 2,16 C2,8.268 8.268,2 16,2 Z M14.3013125,11.21875 C13.30575,11.21875 12.5,12.025 12.5,13.018375 L12.5,18.9796875 C12.5,19.3068125 12.5898438,19.629125 12.7533125,19.907625 C13.27425,20.7612812 14.3807187,21.0338437 15.230125,20.52625 L20.0993437,17.5737188 C20.3476875,17.4221563 20.5533125,17.21825 20.690375,16.9832188 C21.2254062,16.1288438 20.9630312,15.01925 20.1274687,14.5087188 L15.2582812,11.4999688 C14.9609375,11.3116875 14.6335937,11.21875 14.3013125,11.21875 L14.3013125,11.21875 Z"
                                        id="\u5F62\u72B6"
                                        fill="#FFFFFF"
                                        fillRule="nonzero"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
