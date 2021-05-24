import styled from "styled-components";

function Yourself() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1>creating_yourself {">"} finding_yourself</h1>
              <p>May have a good year like that name on the blimp</p>

              <p>But you know what it takes to be poppin&rsquo; this long?</p>

              <p>Dedication on another level niggas never seen in they life</p>

              <p>
                Celebratin&rsquo; all your first downs like they touchdowns
                bring a price
              </p>

              <p>&ndash; J. Cole</p>

              <p>
                As this journey continues, it is important to celebrate small
                victories but not to get distracted from the overarching goal.
              </p>

              <p>
                This is an accurate depiction of me making the transition from
                phase 1 to phase 2&#8230;
              </p>

              <p>
                {" "}
                After being successfully run over by the phase 2 code challenge
                I was forced to retake my challenge and work on my project solo.
              </p>

              <p>
                I used this time to reflect, streamline my workflow and refine
                my understanding of concepts such as validations,
                collection_select and active record associations.
              </p>

              <p>Magic isn&rsquo;t real and things don&rsquo;t just happen</p>

              <p>
                Many things in life, especially in technology are taken for
                granted and understood as that&rsquo;s just the way things
                are&#8230;
              </p>

              <p>
                Making the shift from a consumer of the web to a maker of the
                web has required me to gain a deeper understanding but also made
                me appreciative for those that have created before me i.e. Rack
                &amp; Sinatra to serve as the building blocks for Ruby on Rails,
                PageRank or even the World Wide Web as a whole.
              </p>

              <p>
                {" "}
                The concept of PageRank is something that really stuck with me
                as many of us having been in heavy isolation over the past year.
                The PageRank algorithm among others establishes the true meaning
                of something through connections for Google&rsquo;s search
                engine.
              </p>

              <p>
                Connections are no longer being taken for granted as I make the
                shift from consumer to a creator of the world wide web.
              </p>

              <p>
                Understanding what has come prior and the why&rsquo;s or why
                nots of why something works is critical when trying to
                reengineer a successful product, idea or concept. An experience
                I had with this was trying develop a successful football culture
                in China. Having to recreate something that is so specific to
                American culture in a country like China was not an easy feat.
                Having an understanding of why something could or could not work
                allowed me to thrive internationally by knowing what would
                translate and what needed to be tweaked. Without a proper
                understanding as to why or why not something works I believe I
                would not have been as successful. As my coding journey
                continues I hope to increase my development skills so that I can
                translate my diverse experiences prior to this cohort into a new
                career.
              </p>

              <p>
                If you don&rsquo;t fully understand previous history you will
                struggle to build on a pre existing idea, product or concept and
                those that don&rsquo;t suffer the consequences in many
                forms&#8230;
              </p>

              <p>
                {" "}
                The protests of 2020 were successful because of technology and
                that protest leaders understood and built upon the foundations
                that others previously set. The link below further illustrates
                the point that things don&rsquo;t just happen&#8230;
              </p>

              <p>Events that led to 2020 protests</p>

              <p>Ooh, this ain&rsquo;t &rsquo;92 so we into new rules</p>

              <p>Niggas got hip, so we don&rsquo;t loot the projects</p>

              <p>&lsquo;Bout to hit Rodeo with my lil&rsquo; cousin Marcus</p>

              <p>&ndash; Anderson .Paak</p>

              <p>
                As our cohorts reaches the halfway mark we are no longer just
                users of the internet. We are creators of the web.
              </p>

              <p>Put some respek on our names</p>

              <p></p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Yourself;

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
