import React, { useEffect } from "react";
import Header from "@/components/shared/Header";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Col, Row } from "reactstrap";
const AboutMe = () => {
  const { data, loading } = useGetUser();

  // debugger
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page" canonicalPath="/about" title="About Me - Arhan Choudhury">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title`}>Hello, Welcome</h1>
              <h4 className={`subtitle `}>To About Page</h4>
              <p className={`subsubTitle `}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div>
              <p>
                My name is Arhan Choudhury and I am an experienced software
                developer and freelance developer.{" "}
              </p>
              <p>
                I have a 's degree in Artificial Intelligence and several years
                of experience working on a wide range of technologies and
                projects from C++ development for ultrasound devices to modern
                mobile and web applications in React and Angular.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to explain programming topics clearly
                and in detail to a broad audience.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default AboutMe;
