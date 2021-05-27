import styled from "styled-components";

function Psychologist() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1>Rise of the Cyber Psychologist</h1>
                <h4>June 2, 2015</h4>
              </center>
              <p>
                Life in the 21st Century increasingly involves ‘multi-tasking’
                while making use of our digital tools, social and professional
                networks, mobile technology, wi-fi, and an “app” or product for
                almost everything one might crave, on-demand. Our screens have
                shrunken and our concepts of ‘identity’, ‘friend’, ‘like’ and
                ‘connected’ re-defined. Our lives, on either side of the Digital
                Native Divide, have become shaped and influenced by the ease and
                constancy of data sharing, by social marketing, by technology
                tools, and by shared expectations and social norms, increasingly
                centering around our devotion to devices. Lives are shaped by
                experiences and technology is increasingly becoming a larger
                part of these experiences. The advancement in media and
                technology will continue to shape experiences but the core human
                concepts will remain constant making the psychology of consumers
                important.
              </p>
              <p>
                A surprising percentage of children have had an imaginary friend
                at some point, according to Marjorie Taylor and her colleagues
                at the University of Oregon, by age seven, about 37% of children
                take imaginative play a step farther and create an invisible
                friend. The variety of forms that invisible friends come in is a
                testament to the power of imagination. This “imagination” is
                something that can soon be limited thanks to a developing
                product called Musio. Natural language and machine learning
                company AKA says it’s taking the next step toward the creation
                of a robot that you can really, truly talk to, with a new
                project called Musio.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/K63au9RV9S4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                Perhaps this invention and the usage of social media among
                consumers is an attempt to combat the feeling of loneliness.
                Though technology has changed the tools we have to reach out to
                others, it has not changed our deep psychological need to truly
                connect with others. Social media can help us satisfy a portion
                of this need. We let others know what we are doing and hear
                about their activities. However, this doesn’t fulfill our
                deepest and most basic need to establish an emotional connection
                with another person. At its most fundamental level, this
                connection is not about reading or sending updates of
                activities. Sometimes words do not even need to be exchanged.
                Spending a lazy Saturday afternoon in comfortable silence with a
                close friend can mean more to us than a mass of comments on our
                Instagram. At times social media can create a dangerous illusion
                of being connected. We pay attention to numbers on Facebook and
                Twitter, and often fool ourselves into thinking that we’ve
                satisfied that need to form relationships with others This
                desire to connect with people is shown in the large percentage
                of time consumers spend on social media especially when compared
                to other options on the internet. Social media swallows more
                than a quarter of time spent online and a third of all internet
                usage is now happening via mobile, a new global report has
                found. The average person has five social media accounts and
                spends around 1 hour and 40 minutes browsing these networks
                every day, accounting for 28pc of the total time spent on the
                internet.
              </p>

              <p>
                In a time with such a variety of choice the job as a marketer
                becomes increasingly difficult, choice is the purest expression
                of free will. The freedom to choose allows us to shape our lives
                exactly how we wish, provided we have the resources to do so.
                For marketers to understand why consumers choose
                products/services they need to understand the mind of consumers
                as a whole to take it to the next level. Being able to bring
                human concepts to their core will keep marketers from being
                overwhelmed in the growing media. Choice theory is the study of
                how decisions get made. The term was coined in a book of the
                same name by William Glasser, who argued that all choices are
                made to satisfy five basic needs: survival, love and belonging,
                power, freedom, and fun.
              </p>

              <p>
                Social media and technology is something that temporary reduces
                the feeling of being alone and nobody wants to be alone
                regardless of how they show it because it satisfies basic needs
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Psychologist;

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
