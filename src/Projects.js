import styled from "styled-components";
import YoutubeEmbed from "./YoutubeEmbed";
import Darien from "./darien.jpeg";

function Projects() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xGXBvNfXgrw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <Discription>
              {/* <h3 style={{ display: "inline" }}>Responsible Representation</h3> */}
              <p>
                I wanted to share a conversation with my friends about cultural
                differences, time abroad, religion and life experiences.
              </p>
            </Discription>
          </Card>
        </CardContainerr>

        <br></br>
        <br></br>
        <CardContainerr>
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kgUK2Kn8Xcc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <Discription>
              <h3 style={{ display: "inline" }}>Responsible Representation</h3>
              <p>
                Web application that allows users to track bills, legislators
                and campaign finances
              </p>
            </Discription>
          </Card>
        </CardContainerr>

        <br></br>
        <br></br>
        <CardContainerr>
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Fb5q4aELEoE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <Discription>
              <h3 style={{ display: "inline" }}>Recycle NYC</h3>
              <p>
                A Directory of 1500+ NYC Recycling Sites where users can publish
                and share reviews
              </p>
            </Discription>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Projects;

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

// const CardContainer = styled.div`
//   margin: 5%;
//   display: flex;
//   flex-wrap: wrap;
// `;

const Card = styled.div`
  width: 100%;

  border: gold;
  padding: 10px;
  margin-right: 30%;
  margin-left: 30%;
  background-color: black;
`;
const Video = styled.div``;
const SkillsContanier = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: green;
  text-align: center;
`;
const Skills = styled.span`
  padding: 1.5%;
`;
const Discription = styled.div`
  padding: 2%;
  color: white;
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
  color: yellow;
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
    background-color: white;

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

const CardContainerr = styled.div`
  display: flex;
`;
