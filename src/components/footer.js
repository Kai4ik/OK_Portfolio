import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// firebase config for analytics
import analytics from "../firebase/config";

// used to log events that provide insights on what's happening on web app
import { logEvent } from "firebase/analytics";

const FooterSection = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 6px #f4b301;
`;

const Icon = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: #ccd6f6;
  font-size: 2rem;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Icon
        href="https://github.com/Kai4ik"
        target="blank"
        onClick={logEvent(analytics, "GitHub link clicked")}
      >
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon
        href="https://www.instagram.com/egoist.ko/"
        target="blank"
        onClick={logEvent(analytics, "IG link clicked")}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon
        href="https://www.linkedin.com/in/kai-orozobekov/"
        target="blank"
        onClick={logEvent(analytics, "Linkedin link clicked")}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon
        href="mailto:orozobekov.kai@gmail.com"
        target="blank"
        onClick={logEvent(analytics, "Email link clicked")}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Icon>
    </FooterSection>
  );
}
