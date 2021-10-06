import React from "react";
import styled from "styled-components";

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh 15vw;
  width: 70vw;
  @media only screen and (max-width: 768px) {
    margin: 2vh 10vw 6vh 10vw;
    width: 80vw;
  }
`;

const SkillsSectionTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: #f4b301;
`;

const SkillsParagraph = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  color: #ccd6f6;
  margin: 2vh 0 6vh 0;
  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SkillsSectionMain = styled.div`
  color: #ccd6f6;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8vw;
  @media only screen and (max-width: 768px) {
    gap: 6vw;
  }
`;

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  cursor: pointer;
  height: 10vh;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${(props) => props.color};
  }
  @media only screen and (max-width: 768px) {
    height: 16vh;
  }
`;

const SkillName = styled.p`
  font-size: 1.4rem;
`;

export default function Skills() {
  const skillsArray = [
    { image: "devicon-html5-plain-wordmark", name: "HTML5", color: "#E34C26" },
    { image: "devicon-css3-plain", name: "CSS3", color: "#2965F1" },
    { image: "devicon-javascript-plain", name: "JS", color: "#F0DB4F" },
    { image: "devicon-react-original", name: "React", color: "#61DBFB" },
    { image: "devicon-nodejs-plain", name: "Node.js", color: "#3C873A" },
    { image: "devicon-gatsby-plain", name: "Gatsby", color: "#663399" },
    { image: "devicon-redux-original", name: "Redux", color: "#764ABC" },
    { image: "devicon-express-original", name: "Express.js", color: "#828282" },
    { image: "devicon-mongodb-plain", name: "MongoDB", color: "#4DB33D" },
    { image: "devicon-postgresql-plain", name: "PostgreSQL", color: "#336791" },
    { image: "devicon-mysql-plain", name: "MySQL", color: "#F29011" },
    { image: "devicon-sequelize-plain", name: "Sequelize", color: "#03AFEF" },
    { image: "devicon-jquery-plain", name: "jQuery", color: "#0868AC" },
    { image: "devicon-sass-original", name: "Sass", color: "#CC6699" },
    { image: "devicon-git-plain", name: "Git", color: "#F1502F" },
    { image: "devicon-github-original", name: "GitHub", color: "#F4CBB2" },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsSectionTitle> My toolkit</SkillsSectionTitle>
      <SkillsParagraph>
        Coding is today's language of creativity. Here are languages I speak by
        now:
      </SkillsParagraph>
      <SkillsSectionMain>
        {skillsArray.map((skill, index) => (
          <SkillIcon color={skill.color} key={`${skill}${index}`}>
            <i className={skill.image}></i>
            <SkillName> {skill.name}</SkillName>
          </SkillIcon>
        ))}
      </SkillsSectionMain>
    </SkillsSection>
  );
}
