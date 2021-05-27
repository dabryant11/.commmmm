import styled from "styled-components";
import React from "react";

function ThankYou() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> Thank You</h1>
                <h4>October 17, 2017</h4>
              </center>
              <p>
                I have recently had some time to reflected on the past couple
                years and wanted to thank those that have helped me reach the
                point I am at today. As I’m in the early stages of a career and
                experiencing the “real world” I am able to recall specific
                people and events that have dramatically impacted my life for
                the better. I got my first passport May 2013, just prior to my
                study abroad tour and since then I have spent about half of my
                time outside of the U.S. – this would have never been possible
                without the inspiration of a summer trip to Hawaii in 2010.
              </p>
              <p>
                Developing and having a study abroad experience was insightful,
                it provided an opportunity to reap the rewards of perseverance
                towards achieving a goal fueled by passion while shifting my
                worldview. Many of my recent accomplishments can be attributed
                to things I learned abroad or during that summer of 2010. Most
                recently the ability to remain flexible, open-minded and
                decision making without fear of taking the path less traveled.
              </p>
              <p>
                Growing up I was never one of those kids knew exactly what they
                wanted to be when they grew up and perhaps like some other
                people they’re still trying to figure it out. However I knew
                there was something I didn’t want, a predictable 9-5 office job,
                being someone that becomes agitated with routine and spending
                extensive time inside staring at a screen.
              </p>
              <p>
                Recognizing the pivotal moments and decisions that have led me
                to where I am today leave me very grateful and appreciative for
                those that have and continue to help me along the way.
                Understanding the impact of these moments and using these
                collective experiences as my guide to make decisions both
                professional and personal has proven to be effective. These
                moments being the core of what led me to my current opportunity,
                spending extensive time abroad and helping others achieve what
                they hope for through athletics.
              </p>
              <p>
                Having a career that allows me to help individuals both youth
                and adults to progress as more well rounded people is something
                that I have and continue to enjoy. My time abroad has let me see
                what is possible and truly how many options there are so that I
                can pursue a fulfilling goal, while enjoying the journey along
                the way.
              </p>
              <p>
                When there’s one moment one decision that affected your life in
                such an impactful way you can really step back and cherish the
                moment. Going from not even having a passport a few years ago to
                one where the front printing has been completely removed from
                use and a laissez-faire attitude.
              </p>
              <p>
                Traveling is a plus not only for cool photos that strike envy
                into friends and family but for reading history and seeing
                things on TV that suddenly become more real. Travel will open
                your mind, your heart and has the capacity to change your life.
                Just try not to lose your passport!
              </p>
              <p>
                Again, thank you so much for all your help. I greatly appreciate
                the assistance you have provided me. Many things wouldn’t have
                been possible without your help and or the opportunities you
                have provided for me. I’m very appreciative for all the help you
                have or continue to give me. I look forward to offering the same
                assistance and guidance that you gave to me to anybody that
                reaches out to me.
              </p>
              <li>7o</li>
              <li>Tyler Godoff</li>
              <li>Liu Xianmin</li>
              <li>David Williams</li>
              <li>Rich Hull</li>
              <li>Steve Pruneau</li>
              <li>Chris McLaurin</li>
              <li> Zach Brown</li>
              <li> Thomas Bogenschild</li>
              <li>Mom</li>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default ThankYou;

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
