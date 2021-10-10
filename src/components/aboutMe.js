import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import MyPhoto from "../images/MyPhoto2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-scroll";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ViewWork = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  border: 1px solid #ccd6f6;
  border-radius: 6px;
  height: 50px;
  background: transparent;
  margin-bottom: 100px;
  color: #ccd6f6;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    border: 1px solid #f4b301;
    color: #f4b301;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ViewWorkText = styled.div`
  margin-right: 15px;
`;

const About = styled.section`
  display: flex;
  width: 80vw;
  margin: 0 10vw;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
    margin: 0 5vw;
  }
`;

const AboutTextSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  padding: 4rem 5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem 0 1rem;
    justify-content: flex-start;
  }
`;

const AboutTextTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #f4b301;
`;

const AboutText = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  font-weight: 300;
  color: #ccd6f6;
  padding: 1rem 0;
`;

const TextParagraph = styled.div`
  margin-bottom: 2vh;
`;

const InduceSentence = styled.div`
  color: #f4b301;
  display: flex;
  align-items: center;
  gap: 1vw;
  @media only screen and (max-width: 768px) {
    display: inline;
  }
`;

const InduceText = styled.div`
  display: inline;
  @media only screen and (max-width: 768px) {
    margin-right: 2vw;
  }
`;

export default function AboutMe() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  const height = window.innerHeight;

  return (
    <AboutSection id="aboutMe">
      <Link to="work" smooth={true} offset={-100}>
        <ViewWork>
          <ViewWorkText> View my work </ViewWorkText>
          <FontAwesomeIcon icon={faArrowRight} />
        </ViewWork>
      </Link>
      <About>
        <AboutTextSection>
          <AboutTextTitle> Who am I? </AboutTextTitle>
          <AboutText>
            <TextParagraph>
              I'm a full-stack web developer located in Toronto who really loves
              working with all layers of the stack. Whether it's front-end or
              back-end, the only thing that matters to me is building efficient
              user-friendly web applications that meet all client requirements.
            </TextParagraph>
            <TextParagraph>
              I am passionate about coding which gives me freedom of creativity
              and at the same time requires applying logical thinking when
              solving complex problems.
            </TextParagraph>
            <InduceSentence>
              <InduceText> Let's make something special together!</InduceText>
              <FontAwesomeIcon icon={faSmileWink} />
            </InduceSentence>
          </AboutText>
        </AboutTextSection>
        <LazyLoadImage
          alt="Photo of me"
          src={MyPhoto}
          width={width > 768 ? "50%" : height > 700 ? "100%" : "150%"}
          height="100%"
        />
      </About>
    </AboutSection>
  );
}
