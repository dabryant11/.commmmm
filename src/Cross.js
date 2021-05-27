import styled from "styled-components";

function Cross() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1>Look Before You Cross</h1>
                <h4>June 29, 2015</h4>
              </center>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sglZGSwK6ow"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                As new media emerges keeping track and being able to develop a
                full understanding of what you’re using while staying current
                becomes increasingly difficult which can lead to people putting
                themselves at risk which leaves ethical questions to be
                answered. However positive aspects include greater
                interconnectedness, easier communication, and the exposure of
                information that in the past could have more easily been
                suppressed by totalitarian regimes. While there have been huge
                benefits to society from the digital revolution, especially in
                terms of the accessibility of information, there are a number of
                concerns. Expanded powers of communication and information
                sharing, increased capabilities for existing technologies, and
                the advent of new technology brought with it many potential
                opportunities for exploitation. The digital revolution helped
                usher in a new age of mass surveillance, generating a range of
                new civil and human rights issues. Reliability of data became an
                issue as information could easily be replicated, but not easily
                verified. The digital revolution made it possible to store and
                track facts, articles, statistics, as well as minutiae hitherto
                unfeasible.
              </p>

              <p>
                The digital media system is dismantling the already weakened
                barriers that have traditionally separated content and
                marketing. By seamlessly weaving together content, advertising,
                marketing, and direct transactions, online media can provide
                unprecedented access to individual consumer data along with a
                variety of direct-response and brand-marketing opportunities.
                This hunger to reach these segmented groups is what often leads
                to privacy concerns. The value of the web is likely driven by
                the fact that they are mostly ad-funded and free to users, but
                users face the risk of revealing too much information, which
                could be used without consent, for targeted advertising or for
                any other use. The scope here is privacy issues linked to the
                unpermitted use of personal data and web-surfing behavior
                information, including targeted advertising. By concentrating on
                all applications aside from e-commerce, we will be able to
                contrast how people make trade-offs on the web for the majority
                of their online time usage.
              </p>

              <p>
                While a large number of web users are indeed greatly concerned
                by cyber-privacy issues, the value users are willing to pay to
                ensure their privacy protection – an order of magnitude below
                the value users extract from using currently mostly ad-based,
                free online applications such as Facebook and Google. The value
                for privacy is not homogenous in the online user population,
                seven segments with different trade-offs between the value of
                cyber-privacy protection and use of online applications. There
                is no doubt that concern for privacy has become an important
                matter on the Internet, which has been increased because of the
                situation with Edward Snowden and NSA. Specifically the
                increased interest in privacy on two of the most popular
                websites, a Google web search regarding online privacy generated
                no less than 700 million entries on July 17, 2011. Assessing the
                evolution of web search queries on Google Insights on the same
                date shows that the terms ‘Google privacy’ and ‘Facebook
                privacy’ have quickly increased in importance. Despite the
                growing interest in privacy, consumer actions leave
                organizations in a grey area in which to make business
                decisions. Today, online users still rarely use the opt-out
                service that prevents third parties from using their data.
              </p>

              <p>
                In a fast paced world how sure are you that you are able to
                navigate your way through?
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Cross;

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
