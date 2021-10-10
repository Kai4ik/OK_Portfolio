import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../images/OK_LOGO.png";
import ResumePdf from "../files/Resume.pdf";

const NavSection = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  padding: 0rem 1rem;
  box-shadow: 0 3px 2px black;
  overflow: hidden;
  z-index: 3;
  background: #101820ff;
`;

const LogoSection = styled.div`
  width: 65%;
  height: 100%;
  z-index: 3;
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100px;
`;

const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  height: 100%;
`;

const Option = styled.h3`
  font-size: 1.4rem;
  color: #ccd6f6;
  margin-right: 2rem;
  cursor: pointer;
  outline: none;
  transition: color 0.3s linear;
  &:hover {
    color: #f4b301;
  }
`;

const Resume = styled.a`
  font-size: 1.4rem;
  font-weight: 800;
  background: transparent;
  color: #f4b301;
  border: 1px solid #f4b301;
  border-radius: 6px;
  height: 38px;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s linear;
  &:hover {
    background: rgba(244, 179, 1, 0.5);
  }
`;

export default function TopNavigation() {
  return (
    <NavSection right="0">
      <LogoSection>
        <Logo src={logo} alt="my logo" />
      </LogoSection>
      <MenuOptions>
        <Link to="aboutMe" smooth={true}>
          <Option> about </Option>
        </Link>
        <Link to="skills" smooth={true} offset={-100}>
          <Option> skills </Option>
        </Link>
        <Link to="work" smooth={true} offset={-100}>
          <Option> work </Option>
        </Link>
        <Link to="contact" smooth={true}>
          <Option> contact </Option>
        </Link>
        <Resume href={ResumePdf} target="blank">
          resume
        </Resume>
      </MenuOptions>
    </NavSection>
  );
}
