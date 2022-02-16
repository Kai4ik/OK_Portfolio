import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";
import ProjectsData from "./projects-data";
import { LazyLoadImage } from "react-lazy-load-image-component";

// firebase config for analytics
import analytics from "../firebase/config";

// used to log events that provide insights on what's happening on web app
import { logEvent } from "firebase/analytics";

const ProjectsSection = styled.div`
  display: flex;
  width: 80vw;
  margin: 20vh 10vw 10vh 10vw;
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    margin: 8vh 5vw 4vh 5vw;
    width: 90vw;
    flex-direction: column;
  }
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
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 100%;
  }
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
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 100%;
    margin-top: 4vh;
  }
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
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait), {
    justify-content: center;
  }
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
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 20vw;
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
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  const projects = ProjectsData;

  const handleSlideChange = (swiper) => {
    setActiveProject(swiper.activeIndex);
    logEvent(analytics, "Project viewed");
  };

  return (
    <ProjectsSection id="work">
      {width > 768 && (
        <ProjectShowcase>
          <Swiper
            pagination={true}
            className="mySwiper"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
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
                <SwiperSlide key={project.id}>
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
          {projects[activeProject].technologiesUsed.map((technology, index) => (
            <Technology key={index}>{technology}</Technology>
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
