import React, { useState } from "react";
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
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100px;
`;

const BurgerButton = styled.div`
  width: 50px;
  height: 50px;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  z-index: 3;
`;

const Line = styled.span`
  height: 4px;
  width: ${(props) => props.width};
  background: #ccd6f6;
  margin-bottom: 5px;
`;

const MenuOpen = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #101820ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.6s linear;
  transform: translateX(${(props) => props.menuStatus});
`;

const MenuOption = styled.div`
  font-size: 3rem;
  color: #ccd6f6;
  margin-bottom: 2vh;
  cursor: pointer;
  outline: none;
`;

const Resume = styled.a`
  font-size: 2rem;
  color: #f4b301;
  border: 1px solid #f4b301;
  border-radius: 6px;
  height: 60px;
  padding: 0 2rem;
  margin-top: 4vh;
  text-decoration: none;
`;

export default function BurgerMenu() {
  const [menuStatus, setMenuStatus] = useState("-100%");
  const [openedMenu, setOpenedMenu] = useState(false);

  const toggleMenu = () => {
    setMenuStatus(openedMenu ? "-100%" : "0%");
    setOpenedMenu(!openedMenu);
  };

  return (
    <>
      <NavSection>
        <LogoSection>
          <Logo src={logo} alt="my logo" />
        </LogoSection>
        <BurgerButton onClick={toggleMenu}>
          <Line width={"40px"}></Line>
          <Line width={"32px"}></Line>
          <Line width={"24px"}></Line>
        </BurgerButton>
      </NavSection>
      <MenuOpen menuStatus={menuStatus}>
        <Link to="aboutMe" smooth={true} onClick={toggleMenu} offset={50}>
          <MenuOption> about </MenuOption>
        </Link>
        <Link to="skills" smooth={true} onClick={toggleMenu} offset={-100}>
          <MenuOption> skills </MenuOption>
        </Link>
        <Link to="work" smooth={true} onClick={toggleMenu} offset={-100}>
          <MenuOption> work </MenuOption>
        </Link>
        <Link to="contact" smooth={true} onClick={toggleMenu} offset={-100}>
          <MenuOption> contact </MenuOption>
        </Link>
        <Resume href={ResumePdf} target="blank">
          resume
        </Resume>
      </MenuOpen>
    </>
  );
}
