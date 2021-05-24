import styled from "styled-components";

function Mirror() {
  return (
    <section id="skills" style={{ backgroundColor: "black" }}>
      <div>
        <CardContainerr>
          <Card>
            <Description>
              <h1> Mirror Mirror on the Wall</h1>
              <p>
                I have been on a road trip for the past couple weeks across the
                U.S. and something that has made this time in various
                Airbnb&rsquo;s more enjoyable is the ability to cast my Netflix
                from my phone to a bigger screen. Prior to my recent coding
                bootcamp I would view this ability as something magical or that
                it should just happen but I have now become more investigative
                into the inner works of technology.
              </p>

              <p>
                Chromecast gets things to your TV screen from a remote device in
                part by using something called the DIAL (Discovery And Launch)
                protocol. DIAL was developed jointly by Netflix and YouTube,
                which is owned by Google. DIAL actually launched on Google TV,
                Google&rsquo;s earlier foray into TV control, and now it&rsquo;s
                being integrated into devices and apps by a number of
                manufacturers and content providers.
              </p>

              <p>
                One of Chromecast&rsquo;s components, the DIAL Service Discovery
                protocol, uses Simple Service Discovery Protocol (SSDP) version
                1.1, which is defined by UPnP (Universal Plug and Play), to
                allow a DIAL client device to locate a DIAL server device
                running on the same network. The other component, the DIAL REST
                (Representational State Transfer) Service, is then accessed to
                query, launch or stop applications using HTTP (Hypertext
                Transfer Protocol) requests from the client device to the server
                device. In the case of Chromecast, your phone, tablet or
                computer is the client and the Chromecast itself is the server.
              </p>

              <p>
                Google created Google Cast screen-sharing technology to work on
                top of DIAL, adding a lot more functionality than DIAL could
                offer alone. It developed the Google Cast SDK (Software
                Development Kit) to enable developers to add related
                functionality to third-party apps that can be used to launch
                media from the client device to the Chromecast. There are Google
                Cast APIs (Application Programming Interfaces) for each
                compatible operating system. All this allows for functionality
                such as pausing and volume control, as well as additional
                features that app developers are free to implement.
              </p>

              <p>
                The Chromecast is actually running a pared-down version of the
                Chrome browser, and the applications on the device are Web
                applications that receive the aforementioned HTTP requests and
                react accordingly. Once the app is launched, it will actually be
                running on the Chromecast, but a communication channel will be
                open that allows the client device to act as a sort of remote
                control. This dynamic allows you to turn off your mobile device
                without stopping whatever is streaming from the Chromecast to
                your TV.
              </p>

              <p>
                To set up Chromecast, you have to either install a special app
                or a Chrome extension, depending upon what device you&rsquo;re
                using as a media launcher. Once it&rsquo;s set up, you use
                third-party apps like Netflix, YouTube or the Chrome browser to
                do the actual launching and controlling of your content.
              </p>

              <p>
                {" "}
                Screen casting differs from screen mirroring in two ways. When
                you&rsquo;re casting to another display, you&rsquo;re not
                mirroring the screen of your device. You can cast a video to
                another display and still use your device, often a phone or
                tablet, without interrupting the video or showing any of your
                other content. When you cast content from your phone to a TV,
                you will no longer see the content on your phone. It will only
                appear on the TV.
              </p>

              <p>
                Additionally, the content is not played from your phone or
                tablet. The device connected to the display (Google&rsquo;s
                Chromecast, for example) downloads and plays the content on the
                TV. Once you have screen cast the content to the TV, you will
                need to control it from the TV and not your phone or personal
                device.
              </p>

              <p>
                The term &ldquo;casting&rdquo; as it is currently used grew in
                popularity largely after the launch of Chromecast, and it
                quickly became the standard term for playing content on your TV
                from an app on your mobile device. Google&rsquo;s Chromecast is
                one of the most popular streaming devices that is capable of
                casting and can be built into any number of apps.
              </p>

              <p>
                When you send content to your Chromecast, the device loads a
                special lightweight webpage using HTML5, Javascript, and CSS.
                It&rsquo;s not the same web page that you would view if you were
                using the sites web application. This webpage then loads the
                content using the HTML5 tag and waits for commands such as
                pausing, fast forwarding and rewinding.
              </p>

              <p>
                For now, Google has restrictions on who can use their Cast API
                and what apps are created with it. Developers must first get
                approval by Google to use and access the API and have their
                Chromecast device approved for development. Next, they have to
                get written approval from Google before their apps will run on
                Chromecast devices. It seems Google wants to maintain a healthy
                user experience by keeping a watchful eye over Chromecast apps.
                If you&rsquo;re a developer interested in the Google Cast API,
                you can get started by requesting access here. In fact, it seems
                you can add support to your existing application with less than
                200 lines of code.
              </p>

              <p>
                The second method bypasses the Google Cast API and allows you to
                project web content to your Chromecast through a Chrome web
                browser tab. You do this by installing the Google Cast extension
                for Chrome on your computer. This method, while will be
                extremely popular until more applications are built using the
                above method, will yield different results for different people
                depending on their computer speed. When you&rsquo;re casting or
                mirroring a webpage using the extension, the Chromecast loads
                your current webpage using an HTML5 standard called WebRTC. If
                you&rsquo;ve heard of WebRTC before, you normally would
                associate it with video chatting. That&rsquo;s still
                what&rsquo;s going on here, basically. Your computer essentially
                video chats or streams a video of the current tab in Chrome over
                to the Chromecast. The video is constantly encoding and
                transmitting. This is why you need a powerful computer. If your
                computer and network can&rsquo;t handle a higher bit-rate, the
                extension allows you to choose between 480p, 720p, and a higher
                bit-rate 720p to adjust accordingly.
              </p>

              <p>
                Chromecast uses a lightweight Chrome OS along with the standard
                web technologies of HTML5, WebRTC, APIs and Chrome extensions.
                It seems at least for now, Google wants to provide a great user
                experience by keeping a watchful eye over new Chromecast
                applications. Hopefully after reading this you will have a
                greater appreciation of the technology that goes into the
                conveniences that casting provides.
              </p>
            </Description>
          </Card>
        </CardContainerr>
      </div>
    </section>
  );
}

export default Mirror;

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
