import styled from "styled-components";

function Regulate() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> Innovation or Regulation</h1>
                <h4>June 8, 2015</h4>
              </center>
              <p>
                Marketing is a creativity-meets-systems discipline with many
                moving parts. Unlike journalism, every blog post, info graphic,
                guide, and social media strategy has an underlying sales and
                revenue objective. As marketers our ultimate goal is to steadily
                move audiences to the point of transaction. In our hearts, we
                want to position our brands as storytellers and strong creative
                forces. Often times though we are stifled with sacred cows,
                “creative” guidelines, workplace environment or even legal
                restrictions. For truly “creative” ideas the inability to use
                previous situations as a precedent and establish regulations is
                often what hinders innovation. Another aspect to this is what
                people grow up becoming used to affects their view on the
                credibility of certain strategies, leaving new ideas to be
                pushed by the wayside. Multiple occurrences of these situations
                foster a work environment that stifles innovation. We tend to
                think of creativity as original ideas but it is rather
                individuals thinking of situations in a different light or
                finding ways to express ideas in subtle, original, or
                less-than-obvious ways. Creativity might not be a new product or
                service but rather a new use for it, Harvard Business professor
                Teresa Amabile points out that in business creativity takes on a
                different form. The goal is simple—across teams, we want to
                bring new ideas to market in ways that support the needs of our
                customer bases. “To be creative, an idea must also be
                appropriate—useful and actionable,” write Amabile. “It must
                somehow influence the way business gets done—by improving a
                product, for instance, or by opening up a new way to approach a
                process.”.
              </p>
              <p>Fostering a creative work environment includes…</p>
              <li>
                Challenge – Ensure that individuals are matched with projects
                that align with their skills and passions
              </li>
              <br></br>
              <li>
                Freedom – Give people autonomy to set their own direction
                regarding ‘how’ to complete their work
              </li>
              <br></br>
              <li>
                Resources – Provide team members with the time and money that
                they need to see projects through
              </li>
              <br></br>
              <li>
                Team design – Pay careful attention to the creative teams that
                you’re building, with a clear division of roles and effort
              </li>
              <br></br>
              <li>
                Encouragement – Reward successes through positive reinforcement
              </li>
              <br></br>
              <li>
                Support – Ensure that systems and processes are in place to make
                creative work a top priority
              </li>
              <p>
                As new media emerges the way marketers use these mediums require
                a faith in the judgment of certain individuals because the lack
                of regulation of the unknown. Rather than creating rules for the
                sake of rules marketing teams should focus on providing
                carefully selected team members with resources that foster
                creative use of new media. Individuals that are able to simplify
                complex situations will be ideal candidates, being able to find
                simplicity in a world that continues to be more complex and
                taking characteristics from multiple sources to develop a new
                product, service or ad. Inspiration is something that cannot be
                limited to a single or couple fields or people because anything
                can be an inspiration.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6oY25nOld2U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                Personally one of the best things for me is traveling, going to
                a different part of the world forces me to think in different
                ways, the food order, the way I get around and also the people I
                talk to. I think the access of information and the internet has
                allowed people to find solutions rather than create them. Thus
                begins a recent cover story by Newsweek reporting the latest
                results from tests of our nation’s “creativity quotient” (CQ).
                The tests were designed by E. Alfred Torrence and are widely
                accepted as the best way to measure CQ. Children who have scored
                highly on the Torrence test in years past have become
                innovators, authors, entrepreneurs, software developers,
                diplomats, and college presidents. In May, however, a researcher
                at William and Mary analyzed over 300,000 Torrence scores and
                observed that creativity has been steadily on the rise. That is,
                until 1990. Over the last 20 years, CQ scores have tumbled.
              </p>

              <p>
                While innovation is essential for success in marketing this is
                something that can also cause issues internally with brands
                because of the fear for the unknown and a need for flexible
                rules.This need for flexibility starts with the ability to
                effectively handle feedback because brands reflect the creative
                visions of many different stakeholders including marketers,
                engineers, c-level executives, in-the-trenches specialists, and
                even customers. That’s why the feedback process is so important
                to the marketing process—particularly around content, social
                media, visuals, and campaign copy.
              </p>

              <p>
                In general people follow rules because nobody wants to be an
                exception and it is rude if the rules are not followed. The
                challenge is to know what to improve and change and what to
                keep, thus the battle of continuing with regulated methods or
                branch out and focus on innovation begins. Innovation and
                regulation simply don’t work together, regulated
                industries—including strictly licensed services from lawyers and
                doctors, public utilities such as power and water companies, and
                government-provided services including roads, bridges, and the
                post office—operate outside market-based systems. Competition is
                prohibited, even criminalized. Since innovative technologies are
                a particularly ruthless kind of competitor, they are directly or
                indirectly banned.
              </p>

              <p>
                As new media emerges establishing and maintaining regulation
                while encouraging innovation will be the ultimate challenge.
              </p>

              <p>
                Don’t let the fear of the unknown hold back your marketing team.
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Regulate;

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
