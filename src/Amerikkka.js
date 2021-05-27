import styled from "styled-components";

function Amerikkka() {
  return (
    <section id="skills" style={{ backgroundColor: "red" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1>Amerikkka</h1>
                <h4>June 20, 2018</h4>
              </center>
              <p>
                As my time in China has come to a close I have begun to look
                back and appreciate how this brief time has changed me in
                various ways. Whether it be small things like drinking hot water
                and considering fruit dessert or larger concepts such as my view
                on import food or the financial technology industry.
              </p>
              <p>
                With the rise of nationalism globally especially in China I
                begun to self examine what it means to be an American. There is
                a large difference in the way Chinese people perceive the U.S.
                in 2013, the first time I visited China verses now.
              </p>

              <p>
                Being a black American I was drawn to Barack Obama for obvious
                reasons but specifically his multiracial background and how his
                experiences in Asia affected him. Being removed from American
                culture for an extended period of time I begun to observe things
                that are exclusive or are often associated with the U.S.,
                something as simple as baseball caps or Americans love of
                acronyms.
              </p>

              <p>
                These are both things that I enjoy as well, but I never
                considered myself a patriotic person, owning American Flag
                apparel or whatever that means to you. After spending this time
                as an expat I have become more appreciative of things that often
                go over looked living in the states and the freedoms that come
                with that. Whether it be being able to use Google and their
                services, speak freely about the government, having a blog
                website that doesn’t get blocked or being able to visit a Waffle
                House.
              </p>

              <p>
                Not being of Chinese ethnicity I know I would never be Chinese
                regardless of how long I lived there, someone moving to America
                may eventually blend because of the many people from diverse
                racial backgrounds.
              </p>

              <p>This led me to a specific series of questions…</p>

              <p>What it means to be an American?</p>

              <p>What is American identity to the outside world?</p>

              <p>When do you stop being a foreigner?</p>

              <p>
                As the role of the U.S. and its influence minimizes in the
                global setting how will other countries handle filling this
                power vacuum, quality PR and the benefit of doubt that is often
                lent to those in positions towards the top.
              </p>

              <p>
                With the U.S. being the melting pot that it is why do so many
                citizens not have a more global perspective when compared to
                other nations? Is it that these people subscribe to their
                version of America and remain in their bubble, have forgotten
                their history or perhaps haven’t had enough international
                experiences to be curious about other cultures.
              </p>

              <p>
                As of late perspectives in America have evolved to be more
                welcoming of other cultures whether it be the rising popularity
                of fusion food in America or the 2017 billboard success,
                Despacito despite not being spoken in English. Expectations of
                masculinity in the States are something that has also shifted in
                such a short period of time. When I was younger, things or
                people were often considered gay if they were disliked or not
                manly enough. Now these conversations have a much different tone
                and complexity.
              </p>

              <p>
                Evolution of communication in culture is something that I have
                noticed especially when examining the meaning of words and how
                they evolve through experience. An example of this is learning a
                new language a you are told the translation word but over time
                using and hearing that word it begins to develop a slightly
                different meaning for you as you recall previous moments when it
                was used. Your experiences shape the way in which you interpret
                various forms of communication.
              </p>

              <p>
                Language barriers are not the only thing that lead to
                miscommunication but also the lack of cultural understanding and
                aspects associated with a particular language and culture. Slang
                is the easiest example of this and how people may speak the same
                language but this difference in cultural expression establishes
                a disconnect.
              </p>

              <p>
                With the increasing number of people from multiracial
                backgrounds and those being displaced globally the question of
                identity will become increasingly difficult for the individual
                but also in how they are viewed.
              </p>

              <p>
                “To be yourself in a world that is constantly trying to make you
                something else is the greatest accomplishment.” Ralph Waldo
                Emerson
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Amerikkka;

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
