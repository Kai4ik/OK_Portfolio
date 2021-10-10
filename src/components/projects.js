import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";
import thc_desktop from "../images/thc_desktop.png";
import thc_mobile from "../images/thc_mobile.png";
import sma_desktop from "../images/sma_desktop.png";
import sma_mobile from "../images/sma_mobile.png";
import omnifood_desktop from "../images/omnifood_desktop.png";
import omnifood_mobile from "../images/omnifood_mobile.png";
import shoppingify_mobile from "../images/shoppingify_mobile.png";
import shoppingify_desktop from "../images/shoppingify_desktop.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectsSection = styled.div`
  display: flex;
  width: 80vw;
  margin: 20vh 10vw 10vh 10vw;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2vh 10vw 5vh 10vw;
  }
`;

const ProjectsSectionTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #f4b301;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2vh;
    text-align: center;
  }
`;

const ProjectShowcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 5rem 0rem;
  overflow-x: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectName = styled.h3`
  margin: 5vh 0 1vh 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: #ccd6f6;
  text-align: center;
`;

const ProjectImages = styled.div`
  display: flex;
  margin-left: 4vw;
  max-height: 45vh;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    max-height: 100vh;
  }
`;

const ProjectsTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  color: #ccd6f6;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectsText = styled.div`
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectDescription = styled.div`
  font-size: 1.3rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ProjectTechnologies = styled.div`
  font-size: 1rem;
  color: #f4b301;
  margin: 5vh 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Technology = styled.p`
  height: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LinkBtn = styled.a`
  font-size: 1rem;
  font-weight: 700;
  background: #f4b301;
  color: #101820ff;
  border: none;
  border-radius: 6px;
  height: 38px;
  width: 10vw;
  padding: 0 1rem;
  margin-bottom: 5vh;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s linear;
  &:hover {
    background: #ccd6f6;
    opacity: 0.8;
  }
  @media only screen and (max-width: 768px) {
    width: 35vw;
    text-align: center;
    padding: 1.5rem 1rem;
    &:hover {
      background: #f4b301;
      color: #101820ff;
    }
  }
`;

SwiperCore.use([Pagination]);

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const width = window.innerWidth;

  const projects = [
    {
      name: "THC Solutions",
      githubLink: null,
      websiteLink: "https://thcsolutions.online/",
      description:
        "THC solutions is a full-stack e-Commerce web application build for hydroponics equipment supplier based in Richmond Hill, Ontario. It was built using the MERN stack. The entire front-end was implemented by utilizing React Hooks concept. JWT was used for authentication purposes and Square for credit card processing.",
      technologiesUsed: [
        "React",
        "MongoDB",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "JWT",
        "Axios",
        "mongoose",
        "Square",
        "jQuery",
        "bcrypt",
      ],
      imageMobile: thc_mobile,
      imageDesktop: thc_desktop,
    },
    {
      name: "Shoppingify",
      githubLink: "https://github.com/Kai4ik/Shoppingify",
      websiteLink: "https://shoppingifyapp.herokuapp.com/",
      description:
        "Easy-to-use web application that allows users to create and save grocery shopping lists. While it provides all the main functionality you would expect from basic shopping list app, it also has some additional features such as the ability to view some statistics – top items/categories and monthly comparison.This is PERN stack application that is hosted on Heroku cloud platform.",
      technologiesUsed: [
        "React",
        "Redux",
        "JavaScript",
        "styled-components",
        "Axios",
        "Node.js",
        "Express.js",
        "JWT",
        "PostgreSQL",
        "Sequelize",
        "Recharts",
      ],
      imageMobile: shoppingify_mobile,
      imageDesktop: shoppingify_desktop,
    },
    {
      name: "Simple Music App",
      githubLink: "https://github.com/Kai4ik/Simple_Music_App",
      websiteLink: "https://simple-music-web-app.netlify.app/",
      description:
        "Simple web application build using React and styled-components. The entire project utilized the concept of React Hooks. The app allows users to play track, play next/previous one, or choose a particular track",
      technologiesUsed: ["React", "styled-components", "CSS", "HTML5 "],
      imageMobile: sma_mobile,
      imageDesktop: sma_desktop,
    },
    {
      name: "Omnifood",
      githubLink: "https://github.com/Kai4ik/Omnifood",
      websiteLink: "https://omniwebsite.netlify.app/",
      description:
        "Omnifood – simple responsive website built with HTML5, plain CSS3, vanilla JavaScript, and jQuery. All DOM manipulation is done with the jQuery library. Waypoints library is used to trigger animations (bounce up, pulse, fade in) when scrolling to a particular element. Responsiveness of the website was achieved by the usage of Media Queries.",
      technologiesUsed: ["HTML5", "CSS3", "jQuery", "Waypoints", "JavaScript"],
      imageMobile: omnifood_mobile,
      imageDesktop: omnifood_desktop,
    },
  ];

  return (
    <ProjectsSection id="work">
      {width > 768 && (
        <ProjectShowcase>
          <Swiper
            pagination={true}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveProject(swiper.activeIndex)}
          >
            {projects.map((project) => (
              <SwiperSlide>
                <ProjectImages>
                  <LazyLoadImage alt="" src={project.imageMobile} width="25%" />
                  <LazyLoadImage
                    alt=""
                    src={project.imageDesktop}
                    width="75%"
                  />
                </ProjectImages>
              </SwiperSlide>
            ))}
          </Swiper>
        </ProjectShowcase>
      )}
      <ProjectsTextSection>
        <ProjectsSectionTitle> Curious what I've done?</ProjectsSectionTitle>
        <ProjectsText>
          Here are some projects that I've worked on recently. Some of them were
          done during my co-op term and some just to practice new things I
          learned.
        </ProjectsText>
        {width <= 768 && (
          <ProjectShowcase>
            <Swiper
              pagination={true}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveProject(swiper.activeIndex)}
            >
              {projects.map((project) => (
                <SwiperSlide>
                  <ProjectImages>
                    <LazyLoadImage
                      alt=""
                      src={project.imageMobile}
                      width="25%"
                    />
                    <LazyLoadImage
                      alt=""
                      src={project.imageDesktop}
                      width="75%"
                    />
                  </ProjectImages>
                </SwiperSlide>
              ))}
            </Swiper>
          </ProjectShowcase>
        )}
        <ProjectName> {projects[activeProject].name}</ProjectName>
        <ProjectDescription>
          {projects[activeProject].description}
        </ProjectDescription>
        <ProjectTechnologies>
          {projects[activeProject].technologiesUsed.map((technology) => (
            <Technology>{technology}</Technology>
          ))}
        </ProjectTechnologies>
        <ProjectLinks>
          {projects[activeProject].githubLink && (
            <LinkBtn href={projects[activeProject].githubLink} target="blank">
              Review code
            </LinkBtn>
          )}
          <LinkBtn href={projects[activeProject].websiteLink} target="blank">
            Visit site
          </LinkBtn>
        </ProjectLinks>
      </ProjectsTextSection>
    </ProjectsSection>
  );
}
