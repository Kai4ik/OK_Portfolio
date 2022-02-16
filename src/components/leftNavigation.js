import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { NavSection, VerticalArrow } from "./reusableElements";

// firebase config for analytics
import analytics from "../firebase/config";

// used to log events that provide insights on what's happening on web app
import { logEvent } from "firebase/analytics";

const Icon = styled.a`
  margin-bottom: 20px;
  cursor: pointer;
  color: #ccd6f6;
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

export default function LeftNavigation() {
  return (
    <NavSection>
      <Icon
        hoverColor="#2B3137"
        href="https://github.com/Kai4ik"
        target="blank"
        onClick={() => logEvent(analytics, "Github link clicked")}
      >
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon
        hoverColor="#D62976"
        href="https://www.instagram.com/egoist.ko/"
        target="blank"
        onClick={() => logEvent(analytics, "IG link clicked")}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon
        hoverColor="#0077B5"
        href="https://www.linkedin.com/in/kai-orozobekov/"
        target="blank"
        onClick={() => logEvent(analytics, "Linkedin link clicked")}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <VerticalArrow lineHeight="18vh"></VerticalArrow>
    </NavSection>
  );
}
