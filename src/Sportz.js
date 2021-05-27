import styled from "styled-components";

function Sportz() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> SportZ</h1>
                <h4>June 15, 2018</h4>
              </center>
              <p>
                Like most Americans sports have always been a large part of my
                life and like some of these people I have done a few crazy
                things for sports. Whether it be lathering up in a fresh coat of
                body paint to sport your teams colors or waking up at 5am for
                games and training growing up.
              </p>

              <p>
                Moving to China after graduation to work and coach football is
                something else that may have been considered crazy. Not only did
                I decide on this because of the opportunity to travel but being
                older and seeing how sports shaped my values, decision making
                and helped open up my true personality. Now having a greater
                appreciation for those moments that will forever be cherished, I
                jumped at the chance to enable others to have similar
                experiences.
              </p>

              <p>
                Being a part of a growing sports culture in China allowed me to
                revisit these experiences and see them through a new
                perspective. Being on the front end of an emerging culture
                allows access to things I wouldn’t have had back home given the
                hierarchy of any established sports culture. Various travel and
                collaboration opportunities with big brands like NHL, NFL,
                Tencent, Nike, Adidas, Under Armour and others. Opportunities
                and access to things that perhaps I was not qualified for at the
                time.
              </p>

              <p>
                Everybody needs a medium to get their message across, to an
                audience whether that is sports, music, food or something else.
                Most audiences need that candy to mask the medicine so the
                message is easier to consume.
              </p>

              <p>
                The medium for a large portion of my time here was sports and
                served as that “in” with a portion of the local Chinese
                community. Living in a different culture emphasized not only the
                differences but also similarities in human behavior. With the
                low number of Americans spending time abroad and even lower
                among minorities this allowed them to learn about me to either
                disprove or confirm their perceptions about Americans and or
                more specifically black men.
              </p>

              <p>We have to get to know each other better</p>

              <p>It helps us understand each other better</p>

              <p>Trust each other more and live more peacefully</p>

              <p>
                Getting away from the glamorous system of the NCAA and having
                global experiences that let me discover what I enjoy outside of
                sports is something that few former athletes and even fewer
                black men get to experience. Whether it is for financial
                reasons, cultural stigmas or just the general fears that keep
                people from self-exploration.
              </p>

              <p>
                Something I often remembering hearing during my times of sports
                trainings is…
              </p>

              <p>“Become comfortable with being uncomfortable “</p>

              <p>
                Like those trainings this time abroad has helped me develop this
                concept that will continue throughout life, as I may will never
                reach that moment of complete comfort. I encourage those that
                have also yet to reach that level of comfort to continue towards
                your goal despite possible fear, fear causes hesitation and
                hesitation will cause your worst fears to come true.{" "}
              </p>

              <p>“tomorrow you said yesterday”</p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Sportz;

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
