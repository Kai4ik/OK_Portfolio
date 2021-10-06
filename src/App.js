import "./App.scss";
import BurgerMenu from "./components/burgerMenu";
import TopNavigation from "./components/topNavigation";
import LeftNavigation from "./components/leftNavigation";
import Header from "./components/header";
import RightNavigation from "./components/rightNavigation";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function App() {
  const width = window.innerWidth;

  return (
    <div className="App">
      <Header></Header>
      {width > 768 ? <TopNavigation /> : <BurgerMenu></BurgerMenu>}
      <LeftNavigation />
      <LazyLoadComponent>
        <AboutMe />
        <Skills />
        <Projects />
        <ContactUs></ContactUs>
        {width < 768 && <Footer></Footer>}
      </LazyLoadComponent>
      <RightNavigation />
    </div>
  );
}

export default App;
