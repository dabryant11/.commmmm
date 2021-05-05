import logo from "./logo.svg";
import Darien from "./darien.jpeg";
import Typing from "./typing.jpeg";
import Ruby from "./ruby_icon.png";
import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import TechStack from "./TechStack";

// import styled from "styled-components";

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
      <meta
        name="google-site-verification"
        content="DiBaQ6R2E1Xr3L4_HedjChOFKCb0JG5Hb1GIehbSowA"
      />
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
      <Header />
      <About />
      <TechStack />

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
                      <img src={Ruby} alt="" className="img-technology" />
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

      <section id="projects" className="section-inverse">
        <div className="container clearfix">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <h2 className="heading">Featured Projects</h2>
                <CardContainer>
                  <Card>
                    <iframe
                      width="100%"
                      height="60%"
                      src="https://www.youtube.com/embed/Fb5q4aELEoE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <Video>
                      <Discription>
                        <h3 style={{ display: "inline" }}>MyFI</h3>
                        <Language>React.js</Language>
                        <Language>Rails API</Language>
                        <p>
                          A financial app to help people in debt plan to get out
                          of debt and become financially independent.
                        </p>
                        <RepoLink
                          href="https://github.com/jtray86/personal-fi-frontend"
                          target="_blank"
                        >
                          Frontend Repo
                        </RepoLink>
                        |
                        <RepoLink
                          href="https://github.com/jtray86/personal-fi-backend"
                          target="_blank"
                        >
                          Backend Repo
                        </RepoLink>
                      </Discription>
                    </Video>
                  </Card>
                  <Card>
                    <Video>
                      <YoutubeEmbed embedId="vaaAz0gT8Ek" />
                      <Discription>
                        <h3 style={{ display: "inline" }}>The Pass</h3>
                        <Language>React.js</Language>
                        <Language>Rails API</Language>
                        <p>
                          A travel-social app for gay or male presenting queer
                          people and straight/queer women to meet and plan
                          travel togther.
                        </p>
                        <RepoLink
                          href="https://github.com/jtray86/The-Pass-Frontend"
                          target="_blank"
                        >
                          Frontend Repo
                        </RepoLink>
                        |
                        <RepoLink
                          href="https://github.com/jtray86/the-pass-backend"
                          target="_blank"
                        >
                          Backend Repo
                        </RepoLink>
                      </Discription>
                    </Video>
                  </Card>
                </CardContainer>
                <p />
              </div>
              <div className="row">
                <div className="featured-project-card">
                  <br />
                  <br />
                  <h5>Responsible Representation</h5>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kgUK2Kn8Xcc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
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
                  <br />
                  <br />
                  <h5>Recycle NYC</h5>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Fb5q4aELEoE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <p>A Directory of 1000+ NYC recycling locations</p>
                  <h6>Tech Stack:</h6>
                  <p>
                    React, Ruby on Rails API, NYC Open Data API, Google Maps
                    API, PostgreSQL, Active Record Rack Cors, Active Model
                    Serializer, BCrypt, JWT, Semantic UI, HTML, CSS
                  </p>
                  <div className="icon-row">
                    <h5></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div
        id="lightboxOverlay"
        className="lightboxOverlay"
        style={{ display: "none" }}
      />

      <div>
        <title>About Me</title>
        <meta name="description" content="this is website for about me" />
        <meta name="author" content="Himanshu tiwari" />
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1.0"
        />
        <meta charSet="UTF-8" />
        {/* Latest compiled and minified CSS */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="css/style2.css" />
      </div>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 0;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  margin-top: 2rem;
  background-color: rgb(1, 20, 43);
  content: justified;
  width: 100%;
`;

const Grid = styled.div`
  background-color: rgb(1, 20, 43);
  padding: 20px;
  text-align: center;
  color: #d7f7ed;
`;
const Image = styled.img`
  height: 25rem;
  border: #78ebbd solid 1px;
  padding: 10px;
  box-shadow: 5px 5px 8px 2px #44cfa5;
  background-color: rgb(1, 27, 59);
`;
const AboutContent = styled.div`
  width: 30rem;
  margin-top: 16%;
  font-size: large;
`;

const CardContainer = styled.div`
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 40%;

  border: #78ebbd solid 1px;
  padding: 10px;
  box-shadow: 5px 5px 20px 2px #44cfa5;
  margin: 3%;
  background-color: rgb(1, 27, 59);
`;
const Video = styled.div`
  width: 100%;
`;
const SkillsContanier = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: #78ebbd;
  text-align: center;
`;
const Skills = styled.span`
  padding: 1.5%;
`;
const Discription = styled.div`
  padding: 2%;
  color: #d7f7ed;
`;

const Language = styled.span`
  float: right;
  margin: 1.5%;
  font-size: x-small;
  border: solid 0.5px #78ebbd;
  border-radius: 3px;
  padding: 2px;
`;

const RepoLink = styled.a`
  color: #78ebbd;
  text-decoration: none;
  padding: 2%;

  position: relative;
  z-index: 1;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background-color: #78ebbd;

    z-index: -1;
    transition: transform 0.3s;
  }
  :hover::after {
    transform: scaleY(1);
  }

  :hover {
    color: rgb(1, 27, 59);
  }
`;
const Empty = styled.div`
  height: 10rem;
  width: 100%;
`;

const Containerr = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 2rem; */
  align-items: center;
  padding: 1rem;
  min-height: 70vh;
  .flex-item {
    margin: 1rem;
  }
`;
const PhotoContainer = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
  img {
    width: 100%;
  }
`;
const TextContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  padding-top: 0;
  h1 {
    margin: 0;
  }
`;

const Greeting = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding: 5px;
`;
const AboutMe = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 1.17rem;
  :nth-of-type(2) {
    margin-top: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 0.7rem; */
  a {
    margin: 0.35rem;
  }
`;
const LogoLink = styled.a`
  display: flex;
  border-radius: 50%;
  background: ${({ background }) => background};
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: ${(props) => props.theme.shadow};
  img {
    width: 80%;
  }
  :hover {
    transform: scale(1.2);
  }
  span {
    display: none;
  }
`;

const ButtonBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

const Button = styled.a`
  padding: 8px;
  background: ${(props) => props.theme.itemBackground};
  border: 1px solid ${(props) => props.theme.resumeBorder};
  box-shadow: ${(props) => props.theme.shadow};
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.resumeColor};
  font-weight: bold;
  font-size: 0.9rem;
  :hover {
    transform: scale(1.1);
  }
`;
