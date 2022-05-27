import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FaDev } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
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
        onClick={() =>
          logEvent(analytics, "github", { github_link: "clicked" })
        }
      >
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon
        hoverColor="#D62976"
        href="https://www.instagram.com/egoist.ko/"
        target="blank"
        onClick={() =>
          logEvent(analytics, "instagram", { instagram_link: "clicked" })
        }
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon
        hoverColor="#0077B5"
        href="https://www.linkedin.com/in/kai-orozobekov/"
        target="blank"
        onClick={() =>
          logEvent(analytics, "linkedin", { linkedin_link: "clicked" })
        }
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon
        hoverColor="#353A40"
        href="https://dev.to/kairatorozobekov"
        target="blank"
        onClick={() => logEvent(analytics, "devto", { devto_link: "clicked" })}
      >
        <FaDev />
      </Icon>
      <Icon
        hoverColor="#FFC017"
        href="https://medium.com/@kai4ik"
        target="blank"
        onClick={() =>
          logEvent(analytics, "medium", { medium_link: "clicked" })
        }
      >
        <BsMedium />
      </Icon>
      <VerticalArrow lineHeight="18vh"></VerticalArrow>
    </NavSection>
  );
}
