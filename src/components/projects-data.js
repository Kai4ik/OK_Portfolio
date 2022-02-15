import thc_desktop from "../images/thc_desktop.png";
import thc_mobile from "../images/thc_mobile.png";
import sma_desktop from "../images/sma_desktop.png";
import sma_mobile from "../images/sma_mobile.png";
import omnifood_desktop from "../images/omnifood_desktop.png";
import omnifood_mobile from "../images/omnifood_mobile.png";
import shoppingify_mobile from "../images/shoppingify_mobile.png";
import shoppingify_desktop from "../images/shoppingify_desktop.png";
import wildfire_desktop from "../images/wildfire_desktop.png";
import wildfire_mobile from "../images/wildfire_mobile.png";

const projectsData = [
  {
    id: "ee99d6ff-a70f-4026-bf13-1b120972fd54",
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
    id: "6194d233-cb1f-453a-9586-e0708eaff662",
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
    id: "b08cb9f3-8648-405d-b2bc-30a00776a04e",
    name: "Wildfire Tracker",
    githubLink: "https://github.com/Kai4ik/wildfireTracker",
    websiteLink: "https://wildfire-tracking-app.netlify.app/",
    description:
      "Wildfire Tracker - React application that tracks and shows on the map locations of actively burning fires around the world. This application uses the NASA Open API (to fetch current natural events) and Google Maps API.  ",
    technologiesUsed: [
      "React (React Hooks)",
      "JavaScript",
      "styled-components",
      "NASA API",
      "Google Maps API",
    ],
    imageMobile: wildfire_mobile,
    imageDesktop: wildfire_desktop,
  },
  {
    id: "6481af5a-4ad8-44ab-8cdc-46ffc56189bf",
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
    id: "374f5d0e-2427-4d72-b7a8-d066a92a5091",
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

export default projectsData;
