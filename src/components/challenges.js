import React from "react";
import styled from "styled-components";

// used to hash object which is used as a key
import hash from "object-hash";

// used to redirect user to challenge details page
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";

import challengesData from "../data/challenges-data";

const ChallengesSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh 15vw 15vh 15vw;
  width: 70vw;
  overflow: hidden;
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    margin: 5vh 10vw;
    width: 80vw;
  }
  @media only screen and (max-width: 768px) {
    margin: 2vh 10vw 6vh 10vw;
    width: 80vw;
  }
`;

const ChallengesSectionTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #f4b301;
`;

const ChallengesParagraph = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  color: #ccd6f6;
  margin: 2vh 0 6vh 0;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ChallengesMain = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  column-gap: 20px;
  cursor: pointer;
`;

const ChallengeContainer = styled.div`
  height: 100%;
  width: 90%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ChallengeTitle = styled.h3`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 1rem;
  background: #f9f9f9;
  opacity: 0.8;
`;

SwiperCore.use([Pagination, Autoplay]);

const Challenges = () => {
  // initializing history instance
  const navigate = useNavigate();

  return (
    <ChallengesSection id="challenges">
      <ChallengesSectionTitle>Coding Challenges</ChallengesSectionTitle>
      <ChallengesParagraph>
        Coding challenges are a great way for me to improve my development
        skills. It helps to become a better problem solver, learn new
        algorithms, and understand the programming language on a deep level.
        <br />
        They allow me to exercise myself and at the same time, they do not
        require me to build a complete application. <br /> Here are some of them
      </ChallengesParagraph>
      <ChallengesMain>
        <Swiper
          pagination={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {challengesData.map((challenge) => (
            <SwiperSlide key={hash(challenge)}>
              <ChallengeContainer
                onClick={() => navigate("/challenges", { state: challenge })}
              >
                <ImageContainer src={challenge.coverImg} />
                <ChallengeTitle> {challenge.problemTitle}</ChallengeTitle>
              </ChallengeContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </ChallengesMain>
    </ChallengesSection>
  );
};

export default Challenges;
