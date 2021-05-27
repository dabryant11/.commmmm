import styled from "styled-components";

function Music() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <center>
                <h1> Music</h1>
                <h4>July 17, 2018</h4>
              </center>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/4973256&color=ff5500&show_comments=false&show_user=false"
              ></iframe>
              <p>
                Earlier this year Tokyo Metro Co. started playing background
                music on one of the trains on the Hibiya Line. The train is the
                first with music in the country other than sightseeing trains,
                according to the subway operator. “We hope calm music will help
                soothe our customers,” a Tokyo Metro official said.
              </p>

              <p>
                From the drumbeats of our ancient ancestors to today’s unlimited
                streaming services, music is an integral part of the human
                experience. Researchers have pondered the possible therapeutic
                and mood boosting benefits of music for centuries. The American
                Music Therapy Association (AMTA) reports that music therapy
                programs can be designed to achieve goals such as managing
                stress, enhancing memory, and alleviating pain.
              </p>

              <p>
                Pharrell Williams is held in high regard internationally not
                only for his music but his overall creativity. This is
                attributed to his curiosity, Williams, who describes himself as
                curious and ever the “perpetual student,” said he finds
                inspiration from just about anywhere — whether that be Lagerfeld
                or strangers on the street.
              </p>

              <p>
                The relationship between curiosity and creativity is shown
                through the various genres Pharrell samples in his music.
                Sampling sounds from gospel services to Midwestern funk bands
                and most famously his many Japanese influences. Going down the
                rabbit hole of sampling and inspiration you see how something is
                developed reinforces the six degrees of separation, which
                continues to shrink because of our heavily connected lives
                online.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uVwyUSFS1Ww"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                Projects initiated by curiosity can lead to shifts in culture
                but like everything, start with one step. The power of 1 can be
                felt in the impact that a single person can have on a community,
                Future with Atlanta and Drake with Toronto. My one step that
                sparked me into a unique career oriented around sports and East
                Asia came from a family vacation during high school. Various
                accidents led to learning languages and developing different
                tastes in music. Learning more about history and seeing the
                reemergence of cultural themes through music and traveling keeps
                things from not seeming so different.
              </p>

              <p>
                The goal of improving daily life is the consistent cultural
                theme, musical transit is the sample, the subway symphony
                campaign started a few years ago in New York then later turned
                into this…
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8q6p8VJRMJ8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                Let your goal or inspiration morph into what it may become for
                it could benefit not only yourself but also perhaps those around
                you.
              </p>

              <p>
                Tokyo Metro decided on the trial after the classical music
                played by accident on a train in July last year drew favorable
                responses from many passengers.
              </p>

              <p>
                The ideal man bears the accidents of life with dignity and
                grace, making the best of circumstances.
              </p>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wCsO56kWwTc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Music;

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
