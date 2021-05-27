import styled from "styled-components";

function Nom() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> nomMmmmm</h1>
                <h4>June 26, 2018</h4>
              </center>
              <p>
                Prior moving to China I didn’t think I liked Chinese food,
                growing up in the Midwest my experience with Chinese food was
                through assimilated menu items such as sweet sour pork and
                orange chicken.
              </p>

              <p>
                The little things are what make the difference, being abroad and
                far from the foods that I grew up with I began to learn to cook.
                Fresh ingredients and slight adjustments in recipes can make a
                large difference in the taste of a dish as a whole. Slight
                adjustments in my approach at the market whether it be adding a
                smile, staying a little longer to speak Mandarin with the local
                vendors and their children made a large difference. Not only in
                the discounted vegetables I received on my following visits but
                also I like to think I had an impact on the people.
              </p>

              <p>What’s the weirdest food you’ve had?</p>

              <p>
                I’m often asked this when I return home about my time in Asia,
                various factors shaped the things I ate based on price and how
                easy it was to get.
              </p>

              <p>
                Being in a very different environment from the one I grew up in
                I had to relearn many simple things. These obstacles compounded
                by the black experience – hesitant to buy lotion because the
                possibility of local versions having skin whitening. Pushing
                past these fears and removing myself from an echo chamber that
                discourages new food, products, services and experiences allowed
                me to make the most of my time abroad and have a new perspective
                returning to the States and or wherever I may end up next.
              </p>

              <p>
                As fast as a successful risk taken for a product or service can
                build confidence to try the next one, a negative can set one
                back twice as fast.
              </p>

              <p>
                Successful risks I have taken despite my initial skepticism
                include things such as mango cheese tea, dragon bean, rambuton
                and balut – some I continue to enjoy to this day while others
                provided a single moment of joy. For every mango cheese tea
                there is a durian that lingers with me and makes me skeptical to
                try new things – I can’t help but relate this to the attitudes
                people may have towards others. Being a home body and spending
                too much at home, perhaps too a fault I leaned on popular food
                deliver service 美团(meituan), filing for IPO later this year.
                This service is much more accessible given the low price when
                compared to the American equivalent of Uber Eats and Postmates.
                Looking at the global market of food delivery and its connection
                to the ride sharing services, there is a growing division
                between East and West. The rise of Asia is undeniable, whether
                it is Uber being bought out by Didi in China or the manipulation
                of Uber via investments by Softbank (Japanese) globally.
              </p>

              <p>
                Food is a part of daily life and through that with trying new
                dishes and enjoying them you are not only accepting the dish but
                the people that feel such an attachment to it.
              </p>

              <p>
                Some of the best meals I’ve had were in places that were off the
                beaten path.
              </p>

              <p>
                Break the biases you may have towards a specific drink, dish or
                cuisine and you may be pleasantly surprised by what you find.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/yGf6LNWY9AI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>Where do you draw your line?</p>

              <p>
                Chances are your cuisine as some similar version of whatever it
                is you are or are not considering. During the summer when I was
                growing up there were often trucks that went around and sold ice
                cream, during winter in Japan there is a truck that goes around
                and sells sweet potatoes – same same but different.
              </p>

              <p>
                So the next time you come across durian, fermented egg – or that
                person from a different background asking you for advice maybe
                it’ll be worth the risk?
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/to4QyuBwqi0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                “The way to develop self-confidence is to do the thing you fear
                and get a record of successful experiences behind you.” William
                Jennings Bryan
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Nom;

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
