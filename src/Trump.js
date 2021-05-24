import styled from "styled-components";
import mag from "./img/trump-mag.jpeg";

function Trump() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1>"I'm Thankful for Trump"</h1>
              <img src={mag} />
              <p>June 28, 2016</p>
              <p>
                Regardless of what side you support or even if you don’t support
                a side at all, Donald has gotten a lot of people to talk about
                public policy. Perhaps not always in the most levelheaded state
                but the dialogue has taken place. For some this is the first
                time that they have discussed international or domestic policies
                amongst their peers. Until recently conversations about policies
                have not seen this level of emotional investment. Dialogue so
                heated that is often reserved for which state has the best high
                school football or whom Cindy should choose on this season of
                The Bachelorette.
              </p>
              <p>
                The first step in having these conversations effectively is
                getting people to the table. By bringing more people to the
                conversation this provides a more accurate representation of the
                general population. This is something that Donald has been able
                to do regardless of your political viewpoint. However, these
                conversations have not always been held in the most peaceful
                manner. I’m hopefully that the terrible things that have taken
                place during this election process will show people the need to
                effectively communicate in less hostile ways. This will become
                increasingly important with the amount of communication tools on
                the rise.
              </p>
              <p>
                The political disruption that Donald has caused has led to some
                Republicans turning their back on the party but has also
                galvanized new members. His presence has also strengthened the
                support of the Democratic Party. I hope that the individuals on
                both sides will view issues with their own perspective rather
                than a blind loyalty to a political party or a lobbyist
                purchasing their public policy influence.
              </p>
              <p>
                When these public policy or election decisions are made with
                clouded judgment the end result puts the public at risk because
                of the lack of follow through. These campaign promises we are
                often sold that are suppose to transform communities lack
                commitment and commitment is what turns a promise into a
                reality. Accountability has historically been a speaking point
                for elections with this year being no different. Unfortunately
                change often only takes place when a significant event takes
                place, social media has played a large role in the rise of
                accountability. Perhaps this is the next event that enables us
                to begin having legitimate discussions about accountability?
              </p>

              <p>
                Regardless whether you love or hate him, he has gotten not only
                people in the U.S. but globally talking more about public
                policies, so thank you Donald.
              </p>

              <p>
                On an unrelated note I recently purchased a one-way ticket out
                of the U.S. to…
              </p>
              <center>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/RDrfE9I8_hs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </center>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Trump;

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
