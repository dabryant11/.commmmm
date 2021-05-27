import styled from "styled-components";

function Template() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> The New Normal</h1>
                <h4>January 4, 2016</h4>
              </center>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Template;

const Card = styled.div`
  width: 100%;

  border: gold;
  padding: 10px;
  margin-right: 30%;
  margin-left: 30%;
  background-color: white;
`;

const Description = styled.div`
  padding: 2%;
  color: black;
`;

const CardContainerr = styled.div`
  display: flex;
`;
