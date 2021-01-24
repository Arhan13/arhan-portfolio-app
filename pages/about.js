import React, { useEffect } from "react";
import Header from "@/components/shared/Header";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Row } from "reactstrap";
import { SocialIcon } from "react-social-icons";
const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };
  // debugger
  return (
    <BaseLayout user={data} loading={loading} navClass="transparent">
      <BasePage
        className="about-page background cover cover-white"
        title="About Me - Arhan Choudhury"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello People</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>
                How are you doing today?
              </h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                My name is Arhan Choudhury and I am a web developer and
                blockchain developer.{" "}
              </p>
              <p>
                I am currently doing by bachelor's degree in Computer Science
                Engineering from Srm Institute of Science and
                Technology(2019-2023) and have experience working on a wide
                range of technologies and projects like document automation
                system and dispute resolution system. I mainly work on modern
                mobile and web applications in React and Angular.
              </p>
              <p>
                I regard myself to be a very open minded person, ready for new
                challenge, especially when it comes to technology. People
                consider me to be a social, temperamental person who doesn’t
                hesitate in giving my opinion for what I think and believe in,
                honest and respectfully.
              </p>
              <p>My Socials - </p>
              <p>
                <SocialIcon
                  url="https://www.linkedin.com/in/arhan-choudhury-941527120/"
                  style={{ margin: "10px" }}
                />
                <SocialIcon
                  url="https://github.com/Arhan13"
                  style={{ margin: "10px" }}
                />
                <SocialIcon
                  url="https://twitter.com/arhan_choudhury"
                  style={{ margin: "10px" }}
                />
                <SocialIcon
                  url="https://www.facebook.com/arhan.choudhury"
                  style={{ margin: "10px" }}
                />
                <SocialIcon
                  url="https://www.instagram.com/arhanchoudhury/"
                  style={{ margin: "10px" }}
                />

                <SocialIcon
                  url="https://open.spotify.com/playlist/6f8C4oMy2e2hC0IKOBGIv1?si=hO7RVLf-SOSWCGuoQF_0DQ"
                  style={{ margin: "10px" }}
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCm-7CmS5w3oeTOELYULfzxA"
                  style={{ margin: "10px" }}
                />
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default About;
