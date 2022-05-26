import React, { useState } from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

const HeaderSection = styled.section`
  height: 85vh;
  overflow: hidden;
  position: relative;
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height: 60vh;
  }
  @media only screen and (max-width: 768px) {
    height: 80vh;
  }
`;

const NameTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: #ccd6f6;
  margin: 0 8vw;
  position: absolute;
`;

const Name = styled.div`
  color: #f4b301;
`;

const MobileFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  @media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    height: 60vh;
  }
`;

export default function Header() {
  const [height, setHeight] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setHeight(window.innerHeight);
  });

  return (
    <HeaderSection>
      <MobileFlex>
        <Particles
          height={height > 1300 ? "900px" : "700px"}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
              },
            },
          }}
        />
        <NameTitle>
          Hi, my name is <Name> Kairat Orozobekov.</Name> I'm a full-stack web
          developer
        </NameTitle>
      </MobileFlex>
    </HeaderSection>
  );
}
