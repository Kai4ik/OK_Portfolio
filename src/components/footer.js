import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      <Icon href="https://github.com/Kai4ik" target="blank">
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon href="https://www.instagram.com/egoist.ko/" target="blank">
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
      <Icon href="https://www.linkedin.com/in/kai-orozobekov/" target="blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Icon>
      <Icon href="mailto:orozobekov.kai@gmail.com" target="blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </Icon>
    </FooterSection>
  );
}
