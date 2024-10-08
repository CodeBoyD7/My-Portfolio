import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.8em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a deep passion for programming and continuously learning
              new things along the way.
              <br />
              <br />I am fluent in languages such as
              <i>
                <b className="purple"> React js , JavaScript, and Python </b>
              </i>
              , and I love creating innovative solutions.
              <br />
              <br />
              My interests lie in building impactful &nbsp;
              <i>
                <b className="purple"> Web Technologies and Products </b>
              </i>
              , as well as exploring the world of
              <i>
                <b className="purple"> TypeScript</b>.
              </i>
              <br />
              <br />I enjoy working with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {"  "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              such as{" "}
              <i>
                <b className="purple"> React.js</b> and <b> Next.js</b>
              </i>{" "}
              to develop efficient and scalable applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="./avatar.jpg"
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%", height: "300px", width: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple"> connect</span> and collaborate!
            </p>
            <ul className="home-about-social-links d-flex justify-content-center">
              <li className="social-icons mx-3">
                <a
                  href="https://github.com/CodeBoyD7/My-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub size={40} />
                </a>
              </li>

              <li className="social-icons mx-3">
                <a
                  href="https://www.linkedin.com/in/teja-vasu-yellapu-a198a4233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size={40} />
                </a>
              </li>
              <li className="social-icons mx-3">
                <a
                  href="https://www.instagram.com/_vasu_d7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={40} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
