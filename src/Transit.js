import styled from "styled-components";

function Transit() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> Transit</h1>
                <h4>July 9, 2018</h4>
              </center>
              <p>
                Only spending a few days each year at home during college
                expanded my bubble and prepared me for these past few years
                abroad. Living abroad and traveling I began to realize how
                experiences shape people and their belief systems. Expanding
                your bubble lets you immerse yourself in contrasting viewpoints,
                develop a sense of empathy and a unique perspective. This
                development has led to a growing obsession with duality and
                rejection for the excluded middle. The experiences of those in
                middle America in comparison to those in major coastline cities
                is drastically different.
              </p>
              <p>
                Perspective is something that can be used however you see fit…
              </p>
              <p>
                People often voice their opinion about others that post
                extremely long FB posts – but how is this any different from
                these blog posts?
              </p>

              <p>Maybe it’s different because this has a different URL</p>

              <p>
                I ease my growing disdain of flying with love for new places,
                people and the experiences that change my perceptive. Moments of
                solitude during flights is something that I am beginning to
                appreciate, providing a disconnect from the Internet that has
                not been able to be replicated since years of childhood, prior
                to AIM and MySpace. These moments of introspection are often
                shared during other modes of transportation. Riding the train
                back to Shanghai in late March I contemplated my future as what
                appeared to be a critical moment in my life, reminiscent of
                making my college decision.
              </p>

              <p>
                Often times when people are making decisions their perspective
                becomes shifted and they forget that things are never as big as
                you think.
              </p>

              <p>
                Lack of understanding this concept is something that led to
                flawed decision making during the Spring of 2011. Since then I
                like to believe that I have made decisions more objectively
                while not worrying too much about what others may think. Being
                able to connect certain events and seeing how they have prepared
                you for things to come full circle is a peaceful feeling.
              </p>

              <p>I’m just gonna be myself and see where that takes me…</p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Transit;

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
