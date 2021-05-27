import styled from "styled-components";

function Simplicity() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1>Revolution of Simplicity</h1>
                <h4>June 23, 2015</h4>
              </center>
              <p>
                The Digital Revolution, known as the Third Industrial
                Revolution, is the change from analog, mechanical, and
                electronic technology to digital technology which began anywhere
                from the late 1950s to the late 1970s with the adoption and
                proliferation of digital computers and digital record keeping
                that continues to the present day. The growth of digital
                technology is giving power to individuals to communicate their
                experiences, which has allowed individuals to come together and
                develop solutions to universal issues.
              </p>

              <p>
                The Revolutions of 2011 were enabled by social networking and
                smartphone technology; however these revolutions in hindsight
                largely failed to reach their goals as hardcore Islamist
                governments and in Syria a civil war have formed in the absence
                of the dictatorships that were toppled. The economic impact of
                the digital revolution has been large. Without the World Wide
                Web for example, globalization and outsourcing would not be
                nearly as feasible as they are today. The digital revolution
                radically changed the way individuals and companies interact.
                Small regional companies were suddenly given access to much
                larger markets. Concepts such as On-demand services and
                manufacturing and rapidly dropping technology costs made
                possible innovations in all aspects of industry and everyday
                life. We are living in a revolution and the ability to
                communicate universal experiences is slowly affecting the
                physical world similar to the revolutions prior. The
                Agricultural Revolution led to agricultural cities in the
                ancient world in the Middle East, Mesoamerica, China, the Indus
                Valley, Southern Europe and South America. Then the Industrial
                Revolution led to industrial cities in the 19th century such as
                Manchester, Newcastle Upon Tyne and New York City. In the 20th
                century the rise of the service economy caused people to leave
                the industrial cities and move out into the suburbs. The
                Industrial Revolution and Digital Revolution are now taking
                place concurrently in China and India as people leave the rural
                areas for industrial and high tech cities like Beijing, Shanghai
                and Mumbai. The way these revolutions shaped cities is clear and
                has set a precedent and continues as we see the way our physical
                locations are changing because of the current revolution.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MnGAAILD4nU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                As things become increasingly simple the opportunity for
                marketers becomes more difficult because businesses are less
                willing to sacrifice their small-scaled product or service.
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Simplicity;

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
