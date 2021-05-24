import styled from "styled-components";




function Template() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description></Description>
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
  background-color: black;
`;

const Description = styled.div`
  padding: 2%;
  color: white;
`;

const CardContainerr = styled.div`
  display: flex;
`;
