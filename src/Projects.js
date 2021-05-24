import styled from "styled-components";
import RW from "./russ.jpeg";

function Projects() {
  return (
    <section style={{ backgroundColor: "white" }}>
      <div>
        <ColumnOne>
          <Card>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kgUK2Kn8Xcc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Card>
          <Words>
            <p>
              Web application that allows users to track bills, legislators and
              campaign finances
            </p>
          </Words>
        </ColumnOne>
        <ColumnTwo>
          <Card>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Fb5q4aELEoE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Card>
          <Words>
            <p>
              A Directory of 1500+ NYC Recycling Sites where users can publish
              and share reviews
            </p>
          </Words>
        </ColumnTwo>
        <ColumnOne>
          <Card>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/k-l8ZTE4mCY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Card>
          <Words>
            <p>
              Head Coach for China’s 1st team to compete in the USA Football
              Flag Championship
            </p>
          </Words>
        </ColumnOne>
        <ColumnTwo>
          <Card>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xGXBvNfXgrw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Card>
          <Words>
            <p>
              A conversation with friends about cultural differences, time
              abroad, religion and life experiences.
            </p>
          </Words>
        </ColumnTwo>
        {/* <img src={RW} width="100%" /> */}
      </div>
    </section>
  );
}

export default Projects;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Words = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: white;
`;
const ColumnOne = styled.div`
  position: absolute;
  width: 50%;
  margin-right: 50%;
  background: white;
`;
const ColumnTrey = styled.div`
  position: absolute;
  width: 50%;
  margin-right: 50%;
  background: green;
`;
const ColumnTwo = styled.div`
  margin-left: 50%;
  width: 50%;
  background: white;
`;
const ColumnQuad = styled.div`
  width: 50%;
  margin-left: 50%;
  background: blue;
`;

const Description = styled.div`
  padding: 2%;
  color: black;
  background: white;
`;
const Wordz = styled.div`
  /* display: Inline; */
  padding: 2%;
  color: black;
  background: white;
`;
