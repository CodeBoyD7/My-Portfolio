import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Teja Vasu Yellapu</span>{" "}
            from <span className="purple">Andhra Pradesh, India.</span>
            <br />
            I am currently a student pursuing an MCA (Master of Computer
            Application) in Computer Science.
            <br />I have completed my B.Sc in Computer Science from{" "}
            <span className="purple">Andhra University</span>.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working with different Operating Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Being socially active
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>
          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Vasu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
