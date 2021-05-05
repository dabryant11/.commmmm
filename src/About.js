import Darien from "./circle-cropped.png";
import Linkedin from "./Linkedin.png";
import IG from "./IG.png";
import GitHub from "./GitHub.png";
import Gmail from "./Gmail.png";
import styled from "styled-components";

function About() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <Container>
          <ContainerGrid>
            <Grid>
              <br></br>
              <img src={Darien} />
              <br></br>
              <br></br>
              <a
                target="_blank"
                href="https://www.instagram.com/darienbryant/?hl=en"
              >
                <img src={IG} width="25" height="auto" />
              </a>
              <a target="_blank" href="https://github.com/dabryant11">
                <img src={GitHub} width="25" height="auto" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/darien-bryant-m-s"
              >
                <img src={Linkedin} width="25" height="auto" />
              </a>
              <a target="_blank" href="mailto: darienbryant11@gmail.com">
                <img src={Gmail} width="25" height="auto" />
              </a>
              <br></br>
              <br></br>
              <p>
                <Resume
                  href="https://drive.google.com/file/d/1cnpZmagYbZo5DtfMnPkllCipPpzMxZvQ/view?ts=60921b91"
                  target="_blank"
                >
                  Resume
                </Resume>
              </p>
            </Grid>
            <Grid>
              <AboutContent>
                {/* <h1 style={{ color: "#78ebbd" }}>Software Engineer</h1> */}
                <br></br>
                <p>Hi</p>
                <p>
                  I’m Darien, thank you visiting my site. This is my digital
                  portfolio providing a look into my personal view on topics
                  related to culture, marketing and software development. I hope
                  to offer unique examples and get everyone thinking about the
                  endless possibilities in the ever-changing world.
                </p>
                <p>Thanks for stopping by, have an awesome day 🙂</p>
              </AboutContent>
            </Grid>
          </ContainerGrid>
        </Container>
      </div>
    </section>
  );
}

export default About;

const Resume = styled.a`
  color: yellow;
  text-decoration: none;
  padding: 2%;
`;

const Container = styled.div`
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 0;
`;

const ContainerGrid = styled.div`
  display: grid;
  text-align: center;
  width: 100%;
  background-color: black;
  color: #d7f7ed;
  grid-template-columns: auto auto;
`;

const Grid = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
`;
// const Image = styled.img`
//   height: 25rem;
//   border: #78ebbd solid 1px;
//   padding: 100px;
//   background-color: rgb(1, 27, 59);
// `;
const AboutContent = styled.div`
  width: 100%;
  margin-top: 0%;
  font-size: large;
  text-align: left;
`;
