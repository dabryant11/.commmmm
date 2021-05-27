import styled from "styled-components";

function Reality() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1>Merging Sci-Fi {"&"} Reality</h1>
                <h4>July 13, 2015</h4>
              </center>
              <p>
                The exponential growth of the world in the last 5 to 10 years is
                outstanding when compared to the 5 to 10 years prior.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cL9Wu2kWwSY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                Things that seemed so unrealistic just 10 years ago are slowly
                becoming reality, most recently with the incident at a
                Volkswagen factory. An automotive assembly line robot killed a
                worker at a car factory in Germany this week, a prosecutor’s
                office said. The man, 21, was installing the robot at a
                Volkswagen assembly line on Tuesday in Baunatal, which lies next
                to the city of Kassel, local newspaper the Hessische
                Niedersaechsische Allgemeine reported, citing a VW spokesman.
                The robot gripped and pressed him up against a metal plate,
                crushing his chest. Despite efforts to revive him, the worker,
                an employee of a third-party vendor, died at a hospital, the
                paper reported. After hearing about this I couldn’t help but
                think of the movie I, Robot with Will Smith.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/05bGPiyM4jg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                The first time I watched this when it came out it seemed like
                such a far fetched idea, and that was only 2004 but now this has
                become a reality (much smaller scale and less star power than
                the movie though). Deaths caused by industrial robots seem to be
                more of a reality than you might imagine – in the United States,
                at least one person is killed every year in a similar incident.
                And they have ceased causing people to break into a cold sweat
                over it, desensitized as we have become to such things. Early on
                in the continuing lifespan of science fiction, robots were a
                novelty. We have come to take them for granted now, in spite of
                the fact that the autonomous, self-conscious entities promised
                to us by the genre still seem a long way off. But that’s hardly
                the point, it seems.
              </p>

              <p>
                The science fiction trope – be it time travel, artificial
                intelligence, or robots – serves a twin purpose of being both
                literal truth and metaphor. Therein lies its unique strength.
                And this “literalness” seems to have bled into “real life” and
                altered our perceptions of technology. Technology alternately
                sparks a sense of wonder and then reverts to banality, thanks
                largely to a limited attention span, and, indeed, too many
                distractions plaguing the twenty-first century. And science
                fiction, that genre dedicated to invoking a “sense of wonder”,
                has ironically inured us to such things. If we are to look at
                the incident itself, tragic as it is, it’s a little hard to see
                why it might have caused such a stir. The death was apparently
                caused by human error, and the “robot” in question seems to have
                been a mechanized automaton whose job it had been to pick up car
                parts all by itself. But the image evoked by such an incident
                transcends any such attempt at rendering it less awe-inspiring.
                This is because of the sheer vocabulary of images science
                fiction has helped build over time, when it comes to robots and
                artificial intelligence.
              </p>

              <p>
                As global economies become increasingly more competitive and
                seeing some nations putting its people at risks to get ahead I
                can’t help but wonder what other issues may occur because the
                desire for speed over quality.
              </p>

              <p>The future is closer than you think</p>
              <iframe
                src="https://giphy.com/embed/20Mr9uJLkWfqWDs6Ul"
                width="480"
                height="324"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Reality;

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
