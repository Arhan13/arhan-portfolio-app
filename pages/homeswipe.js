import { useEffect, useRef, useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";
import { LiquidSwipe } from "helpers/liquidswipe";
//import { useMediaQuery } from "@react-hook/media-query";

const ROLES = [
  "Developer",
  "ReactJs",
  "Student",
  "Basketball",
  "Trading",
  "Foodie",
];

const BlueCard = ({data, loading}) => {
  
  return (
    <BaseLayout
      navClass="transparent"
      className={`cover cover-black`}
      user={data}
      loading={loading}
    >
      <BasePage indexPage title="Arhan's Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div
                    //className={`flipper ${isFlipping ? "isFlipping" : ""}`}
                    className={`flipper cover-orange`}
                  >
                    <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Frontend Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Arhan Choudhury. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>

                  <Typed
                    loop
                    strings={ROLES}
                    typeSpeed={100}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>
                  <h1 style={{ marginTop: "10px" }}>
                    "The more things seem to change the more they stay the same"
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

const OrangeCard = ({data, loading}) => {
  //const { data, loading } = useGetUser();
  return (
    <BaseLayout
      navClass="transparent"
      className={`cover cover-orange`}
      user={data}
      loading={loading}
    >
      <BasePage indexPage title="Arhan's Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div
                    //className={`flipper ${isFlipping ? "isFlipping" : ""}`}
                    className={`flipper cover-blue`}
                  >
                    <div className="front">
                      <div className="image image-2">
                        <div className="hero-section-content">
                          <h2> Frontend Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Arhan Choudhury. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>

                  <Typed
                    loop
                    strings={ROLES}
                    typeSpeed={100}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>
                  <h1 style={{ marginTop: "10px" }}>
                    "The more things seem to change the more they stay the same"
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

const HomeSwipe = () => {
  const { data, loading } = useGetUser();
  const [isFlipping, setIsFlipping] = useState(false);
  //const phoneView = useMediaQuery("only screen and (min-width: 770px)");
  
  //const phoneView = useMediaQuery("only screen and (min-width: 770px)");
  // const flipInterval = useRef();
  var componentsToRender = [
    <BlueCard data loading/>,
    <OrangeCard data loading/>,
    <BlueCard data loading/>,
    <OrangeCard data loading/>,
    <BlueCard data loading/>,
    <OrangeCard data loading/>,
    <BlueCard data loading/>,
    <OrangeCard data loading/>,
  ];
  var backgroundColors = ["blue", "orange"];

  // useEffect(() => {
  //   startAnimation();
  //   return () => flipInterval.current && clearInterval(flipInterval.current);
  // }, []);

  // const startAnimation = () => {
  //   flipInterval.current = setInterval(() => {
  //     setIsFlipping((prevFlipping) => !prevFlipping);
  //   }, 10000);
  // };

  return (
    componentsToRender && (
      <>
        <LiquidSwipe
          components={componentsToRender}
          colors={backgroundColors}
        />
      </>
    )
  );
};
export default HomeSwipe;
