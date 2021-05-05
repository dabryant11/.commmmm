import styled from "styled-components";

function Projects() {
  return (
    <section style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/k-l8ZTE4mCY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <Description>
              {/* <h3 style={{ display: "inline" }}>Responsible Representation</h3> */}
              <p>
                I was fortunate to be the Head Coach for China’s 1st team to
                compete in the USA Football Flag Championship
              </p>
            </Description>
          </Card>
        </CardContainerr>

        <br></br>
        <br></br>
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

            <Description>
              {/* <h3 style={{ display: "inline" }}>Responsible Representation</h3> */}
              <p>
                I wanted to share a conversation with my friends about cultural
                differences, time abroad, religion and life experiences.
              </p>
            </Description>
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

            <Description>
              <h3 style={{ display: "inline" }}>Responsible Representation</h3>
              <p>
                Web application that allows users to track bills, legislators
                and campaign finances
              </p>
            </Description>
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

            <Description>
              <h3 style={{ display: "inline" }}>Recycle NYC</h3>
              <p>
                A Directory of 1500+ NYC Recycling Sites where users can publish
                and share reviews
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Projects;

const Card = styled.div`
  width: 100%;

  border: gold;
  padding: 10px;
  margin-right: 30%;
  margin-left: 30%;
  background-color: black;
`;

const Description = styled.div`
  padding: 2%;
  color: white;
`;

const CardContainerr = styled.div`
  display: flex;
`;
