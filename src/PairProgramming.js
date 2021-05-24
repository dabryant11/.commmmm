import styled from "styled-components";

function PairProgramming() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1>Pair Programming</h1>
              <p>
                &ldquo;Communication is one of the most important skills you
                require for a successful life.&rdquo;
              </p>

              <p>Catherine Pulsifer</p>

              <p>
                Growing up with a sports background clear communication has been
                something that I have had to practice so that our teams could
                achieve the ultimate goal &ndash; win. Effective communication
                helps individuals, groups or organizations achieve their goals.
              </p>

              <p>
                Pair Programming has served as one of the most efficient
                practices as I am in the early stages of my coding journey. This
                practice has allowed me to see things through another persons
                perspective, develop new strategies and learn about alternative
                methods. For those unfamiliar pair programming is when two
                programmers collaborate on a project using a single code editor.
                It is encouraging to know that the skills learned and practiced
                from this exercise will serve our cohort as we enter the
                workforce. New York based company Meetup is a supporter of pair
                programming.
              </p>

              <p>
                {" "}
                The inspiration to cover pair programming and clear
                communication was sparked by my recent return home for the
                holidays and making cookies for my family. I often found myself
                asking about the location of various items such as measuring
                spoons, flour, sugar etc. I found myself reminiscing on the
                effective communication from our &ldquo;what the fluff?&rdquo;
                cohort. When I was often given directions such as its over there
                by the fridge or next to that other mysterious object in a vague
                location I became even more grateful of the clear communication
                of my pairing partners.
              </p>

              <p>
                Ultimately, the goal is to produce the requested deliverables
                and clear communication is essential when asking for those
                deliverables and even more so when pair programming is involved.
                Being able to get a message across by identifying a code block
                within the line numbers of a file or differentiate enumerable
                types is beneficial during pair programming.
              </p>

              <p>
                The importance of effective communication when pair programming
                has become even more apparent as we conclude Phase 1 of our
                bootcamp and projects become more complex.
              </p>

              <p>
                At times when what you are looking at looks like
                this&#8230;&#8230;
              </p>

              <p> &#8230;and makes you feel like this&#8230;</p>

              <p>
                {" "}
                You really begin to appreciate clear and direct communication as
                you sort through your code and produce deliverables.
              </p>

              <p>
                {" "}
                Special shoutout to my wonderful partner Jennifer Tracy as we
                have recently completed our Phase 1 project &ndash; check it out
                below!
              </p>

              <p>https://github.com/jtray86/date-night</p>

              <p>
                {" "}
                &ldquo;Communication works for those who work at it.&rdquo;
              </p>

              <p>John Powell</p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default PairProgramming;

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
