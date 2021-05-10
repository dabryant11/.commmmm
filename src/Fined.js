import styled from "styled-components";

function Fined() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1>
                &ldquo;I&rsquo;m Just Here So I Won&rsquo;t Get Fined&rdquo;
              </h1>
              <p>
                Feeling It Marshawn Lynch GIF by NFL - Find &amp; Share on GIPHY
                Diversity and inclusion has become a topic of more conversations
                in recent years and the tech industry is no different. Negative
                influences and a narrow array of potential opportunities keep
                those within a funnel of limited career considerations. Never
                having a computer class growing up and only recently altering my
                perspective of a computer from a tool of consumption to a tool
                of creation left me with a feeling of disappointment.
              </p>

              <p>
                There are many factors as to why this problem exists and
                Marshawn Lynch talks about his childhood experiences and how the
                perception of career possibilities plays in one&rsquo;s career
                trajectory. Marshawn also talks about getting over his mental
                hurdle of asking for help.
              </p>

              <p>
                {" "}
                This coding bootcamp has been a challenge for me and has forced
                me to overcome many mental blocks but one in particular has been
                asking for help. Although there is merit in finding out a
                solution by one&rsquo;s self and powering through a problem. The
                level of efficiency that is required to be successful at certain
                times lends itself better to reach out and ask for help.
              </p>

              <p>
                With the help of many others and a little bit of hard work I
                have come across some moments of growth where things finally
                &lsquo;click&rsquo;&#8230;
              </p>

              <p>
                {" "}
                The experiences that Marshawn talked about are some of the very
                same that underrepresented youth are continuing to deal with.
                Hearing about his story made me reflect on a recent reading of
                mine, &ldquo;The Outliers&rdquo; by Malcolm Gladwell where he
                talks about Bill Gates among many other successful individuals.
              </p>

              <p>
                The story of Bill Gates starts when he was an eighth grade
                student. The mothers group at his school have a bake sale every
                year. They buy something for the eighth grade class with the
                proceeds. It just so happened that they bought a PC before they
                had software. To get the PC to perform required punching holes
                in a card, then putting the card in the PC. It started working.
                Gates was obviously consumed and challenged by the process. But
                keep in mind that he was the only one in his class who became a
                household name. He kept with it until he couldn&rsquo;t go any
                further. That was in his sophmore year in high school. It turns
                out that University of Washington, conveniently was across the
                street from high school, had the next level computer he needed.
                There he met Paul Allen who became his partner 4 years later. No
                doubt that Gates had an extraordinary aptitude for programming
                and software development. However a few things lined up for him,
                but it was, as Gladwell explains, 10,000 hours of focused hard
                work on one thing that ultimately led to the tipping point in
                his career.
              </p>

              <p>
                Something else that has increased my level of efficiency is
                watching videos in 2x speed. Initially this was something that
                seemed odd to me but given the amount of time in a day and the
                amount of information I have needed to consume I couldn&rsquo;t
                see doing this program any other way.
              </p>

              <p>
                Although receiving this information often feels like this&#8230;
              </p>

              <p> Some of the water(information) will stick, ya gotta&#8230;</p>

              <p>
                {" "}
                Before the program started I was worried that going through such
                a rigorous program would diminish my interest in coding.
                However, I feel like this experience has done the exact
                opposite, my wrist hurts and I can&rsquo;t remember the last
                time I had a good night&rsquo;s sleep but this has been
                something I really have enjoyed. Being in a program that has
                forced me to learn and implement new technologies in such a
                short of amount of time will set me up for success in my career.
                The life cycle of up to date tech is becoming faster and faster
                I believe having this skill set will be advantageous. I&rsquo;m
                excited to continue this journey and add tools to my programming
                toolbelt&#8230;
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Fined;

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
