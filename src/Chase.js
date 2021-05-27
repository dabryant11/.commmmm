import styled from "styled-components";

function Chase() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> The Chase</h1>
                <h4>June 17, 2015</h4>
              </center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iMEl9VfgkMs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                I think this video does an excellent job in showing the chase of
                the mouse (consumers) by the cat (marketers). For those that
                have followed the cartoon the cat never catches the mouse, which
                fits the never ending chase of consumers of various platforms
                i.e. myspace to facebook to twitter to instagram to snapchat to…
              </p>

              <p>
                As marketers we destroy media platforms for consumers by
                flooding the market with ads and consumers flee to new networks
                and technology. Similar to the way in when your parents use
                something it no longer becomes cool you are forced to turn to
                something new. Is it because they need the next cool thing,
                oversaturated with unwanted info or simply growing bored. As the
                rate of technology is growing exponentially the turnover rate
                will grow leaving marketers increasingly one step behind unless
                things change. This is already becoming prevalent with Twitter.
                As brands are finally catching on to this platform and the usage
                is in decline, specifically among younger consumers.
              </p>

              <p>
                Research for the declining popularity of Facebook among younger
                consumers is finally being published, which shows the gap in
                marketers and younger consumers. Indeed, even Facebook itself
                admitted last fall that it had lost younger users. “We did see a
                decrease in [teenage] daily users [during the quarter],
                especially younger teens,” Facebook chief financial officer
                David Ebersman said during a call with analysts. With more than
                half of teens stating social media plays a role in purchases,
                Twitter has surpassed Facebook as the site deemed most
                important, according to a fall survey by investment-banking firm
                Piper Jaffray. The report also found Facebook’s popularity is
                diminishing among this key demographic, with 23 percent of
                teenagers stating it is the most important social network site,
                down from 33 percent six months ago and 42 percent a year ago.
              </p>

              <p>
                In the past Facebook has denied this trend is occurring, but in
                its third-quarter earnings call this month, the company finally
                acknowledged the fact the social network site is waning among
                youths. In addition to the obvious problem of having to accept
                friend requests from grandma and long lost relatives, privacy is
                a big concern. Facebook just cut a privacy setting that kept all
                user names out of the social network’s graph search. It also
                specifically targeted the teen demographic when it decided to
                allow 13- to 17-year-olds the ability to share photo, updates
                and comments with the public, not just friends. The result?
                Advertisers now have access to private user information they
                didn’t have before, a move that may not bode well with teens.
              </p>

              <p>
                With a marketing philosophy like the quote below it is clear how
                consumers can become annoyed with advertisement…
              </p>

              <p>
                “The more content I can put out, the more luck I have,” he says.
                He’s redeployed an employee at VaynerMedia, his social media
                consultancy, to “shadow my life” by following him to record his
                remarks and turn them into social media content.” – Gary
                Vaynerchuk
              </p>

              <p>
                Instead of relentlessly demanding more consumer attention and
                creating unwanted content, treat the attention that is gained
                with value and provide useful content for people. Then ask
                yourself a simple question of any new marketing efforts: is this
                campaign/email/microsite/print ad/etc. going to reduce the
                cognitive overload for consumers feel as they shop my category?
                If the answer is “no” or “not sure,” go back to the drawing
                board. When it comes to interacting with your customers, more
                isn’t better. By putting the audience first, we create content
                they will read, share, and talk about rather than expediting the
                process of consumers heading to a new platform.
              </p>

              <p>Will the cat ever catch the mouse?</p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Chase;

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
