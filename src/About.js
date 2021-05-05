import Darien from "./darien.jpeg";
import styled from "styled-components";

function About() {
  return (
    <div>
      <Container>
        <ContainerGrid>
          <Grid>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={Darien} />
          </Grid>
          <Grid>
            <AboutContent>
              {/* <h1 style={{ color: "#78ebbd" }}>Software Engineer</h1> */}
              <p>Hi</p>
              <p>
                I’m Darien, thank you visiting my site. This is my digital
                portfolio providing a look into my personal view on topics
                related to culture, marketing and software development. I hope
                to offer unique examples and get everyone thinking about the
                endless possibilities in the ever-changing world.
              </p>
              <p>Thanks for stopping by, have an awesome day 🙂</p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1P0PtdiuoGwP_IQZB4Vd_ysUPTajLx06Z/view"
                  target="_blank"
                >
                  download resume
                </a>
              </p>
            </AboutContent>
          </Grid>
        </ContainerGrid>
      </Container>
    </div>
  );
}

export default About;

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
