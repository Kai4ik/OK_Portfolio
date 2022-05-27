import React, { useState } from "react";
import { Helmet } from "react-helmet";

// components required for home page
import BurgerMenu from "../components/burgerMenu";
import TopNavigation from "../components/topNavigation";
import LeftNavigation from "../components/leftNavigation";
import Header from "../components/header";
import RightNavigation from "../components/rightNavigation";
import Skills from "../components/skills";
import Projects from "../components/projects";
import AboutMe from "../components/aboutMe";
import Challenges from "../components/challenges";
import ContactUs from "../components/contact";
import Footer from "../components/footer";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <>
      <Helmet>
        <title>
          Kairat Orozobekov | Full-Stack Developer | Toronto, Canada
        </title>
        <meta
          name="description"
          content="Kairat Orozobekov - full-stack web developer based in Toronto. Top skills - React, Node.js, JavaScript"
        />
        <meta
          name="keywords"
          content="HTML5, CSS3, JavaScript, React, Node.js, JavaScript, MongoDB"
        />

        <meta name="author" content="Kairat Orozobekov" />
      </Helmet>
      <Header />
      {width > 768 ? <TopNavigation /> : <BurgerMenu />}
      <LeftNavigation />
      <LazyLoadComponent>
        <AboutMe />
        <Skills />
        <Projects />
        <Challenges />
        <ContactUs />
        {width < 768 && <Footer />}
      </LazyLoadComponent>
      <RightNavigation />
    </>
  );
};

export default Home;
