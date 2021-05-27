import styled from "styled-components";

function Template() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> Lost in the Sauce</h1>
                <h4>May 23, 2015</h4>
              </center>
              <p>
                “If a man does not have sauce (technology) he is lost, but the
                same man can be lost in the sauce (technology)” – Gucci Mane
              </p>

              <p>
                As the immersion in “new” media becomes more intense so does the
                power of marketers, as this trend continues consumers can become
                overwhelmed steering them towards “new-er” media. With the
                growing trend of wearables and the recent release of the iWatch
                consumers become increasingly connected to technology.
              </p>

              <p>
                Wearable technology is the same as other once “new” media, once
                consumers are there then these platforms can be used by
                marketers which explains the never ending cat and mouse game
                between marketers and consumers in the various platform options.
                The increase of omnichannel consumers is forcing marketers to
                look for additional platforms to introduce and maintain a
                relationship with consumers. Currently “36% of U.S.
                organizations interact with customers and prospects in five or
                more channels”. Wearables appear to be one of the next
                platforms, Disney Magic Bands just announced a $1 billion
                expansion of MyMagic+ including how they can leverage other
                wearable technology. The ability to reach the majority of
                consumers 24/7 is now realistic because of the easy access to
                world through smartphones and wearables. Sometimes people spend
                a little more time then they should on their phones, which has
                led to changes in society…
              </p>

              <p>
                Fortunately for marketers this increases the margin of error
                given the extended time consumers spend on phones. Globalization
                has increased because of “new” media, transformations in
                international communication have created the perception for many
                of increased interconnectedness, of a shrinking of the world.
                New media technologies and the Internet have intensified this
                interconnectedness between countries and the rapid spread of
                information, news, content and programming.
              </p>

              <p>
                Interactive media content has potential to be the next “new”
                given the shared characteristic that has made social media
                popular. As consumers search for additional ways to be immersed
                in brands, products and services the potential is there.
                Everyone wants to be immersed in interesting web content, and
                brands are quickly learning how to use that to their advantage.
                But to succeed, it has to be done well. Interactive content is
                continuing to grow through social media but could see
                exponential growth with the development of virtual reality.
                Virtual reality like many other things of today seemed
                unrealistic 10 or 15 yrs ago but has now become realistic.
                Virtual reality has always been an interesting concept, put on
                goggles and be transported anywhere, it’s the same escapism
                peddled by drugs, alcohol, sex, and art. Virtual reality at its
                core is an organic experience. Depending on how wearables and
                virtual reality progress will heat up the debate between “on”
                and “off” screen marketing, should be an interesting thing to
                monitor.
              </p>

              <p>
                As “new” media becomes more immersive, do not get lost in the
                sauce (technology).
              </p>
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
