import styled from "styled-components";

function Pain() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1>No Pain No Gain </h1>
              <p>
                During this bootcamp and in preparation I have spent many hours
                on my laptop. Due to this increased time on the computer I begun
                to develop some pain in my wrist, hand and fingers. This was
                troubling for me and forced me to walk the fine line between the
                curiosity of trying to figure out what was going on and the
                scary search results from using WebMD.
              </p>

              <p>
                The website below talks more about conditions but I have and
                will continue to refrain from diagnosing myself through
                webpages.
              </p>

              <p>https://ada.com/conditions/repetitive-strain-injury/</p>

              <p>
                One of the things that I came across that may be causing this
                pain was colder weather which made sense to me as I made the
                transition from California to Ohio during winter while I
                complete this program. Another potential factor may be the lack
                of physical activity for me over the past year as most gyms have
                been closed. Although the pain still remains I have found some
                things that have been useful for me and hopefully they can help
                you alleviate discomfort.
              </p>

              <p>
                Initially I was trying to shrug off this pain as something that
                was insignificant coming from a physical career the thought that
                computer programming could take a toll on my body seemed
                laughable but minor adjustments have proved beneficial.
              </p>

              <p>
                In recent weeks I have tried to increase my physical activity
                &ndash; getting back into ice hockey, yoga and hopefully pickup
                basketball when the weather warms up and more vaccines get
                distributed.
              </p>

              <p>
                In addition to these lifestyle changes I found some material
                things that have made my programming life easier &ndash; I would
                also suggest investing in a better chair than the one I have
                been using&#8230;
              </p>

              <p> Putty link</p>

              <p> Mouse link</p>

              <p> Dr teals salt</p>

              <p>
                {" "}
                In addition to these items I utilized my annual eye exam
                courtesy of my previous employer and found out that I needed
                glasses and opted for a pair with a blue light filter that has
                also helped me in this new career path.
              </p>

              <p>
                I&rsquo;m always impressed by people that know all the best
                tricks for efficiency and I have been trying to incorporate all
                types of shortcuts, strategies etc. to optimize my time as a
                computer programmer. However I have been trying to combat the
                desire for speed by slowing down to develop a strategy before
                beginning to code.
              </p>

              <p>
                &ldquo;It&rsquo;s better to go slowly in the right direction
                than go speeding off in the wrong direction.&rdquo;
              </p>

              <p>
                This is something that I am still working on but as I
                incorporate this philosophy into my coding it has helped my
                problem solving.
              </p>

              <p>
                I have also been trying to do more things with my left hand in
                daily life &ndash; the results have not been ideal at times.
              </p>

              <p>
                I can&rsquo;t say I&rsquo;m quite free of pain while using a
                computer at this point, but these small improvements have
                improved the quality of my programming journey.
              </p>

              <p>
                {" "}
                If you&rsquo;re a sucker for shortcuts like I am please check
                out these useful blogs by cohort mates listed below.
              </p>

              <p>Windows Shortcuts by Nick Repasy</p>

              <p>Mac Shortcuts by Jordan Carroll</p>

              <p>
                Don&rsquo;t forget to take breaks and happy coding
                &#55357;&#56898;
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Pain;

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
