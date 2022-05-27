const projectsData = [
  {
    id: "ee99d6ff-a70f-4026-bf13-1b120972fd54",
    name: "THC Solutions",
    githubLink: "https://github.com/Kai4ik/thc_solutions-front",
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
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/thc_mobile.png?alt=media&token=df1fcbd7-8036-43a6-af2d-f060a847e40f",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/thc_desktop.png?alt=media&token=338a5f85-174c-4dce-b748-493cb8c8f559",
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
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/shoppingify_mobile.png?alt=media&token=a789ead5-24e2-4a14-8e1f-6401e4d7b4e7",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/shoppingify_desktop.png?alt=media&token=4c6459b1-db5c-49dc-b8d8-b637d82b8d81",
  },
  {
    id: "6194d333-cg1f-463a-9586-e0708eaff662",
    name: "CatWiki",
    githubLink: "https://github.com/Kai4ik/catWiki",
    websiteLink: "https://catwiki.gatsbyjs.io/",
    description:
      "Static site about cats built using Gatsby SSG (static site generator) & Chakra UI.User can view more than 60 cat breeds, search for specific ones, and look at more detailed information about specific cat breeds.",
    technologiesUsed: [
      "Gatsby",
      "Chakra UI",
      "gatsby-node-api",
      "gatsby-image-plugin",
      "gatsby-ssr-api",
      "gatsby-browser-api",
      "TheCatApi",
    ],
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/catwiki_mobile.png?alt=media&token=f91eb6e4-f4ba-4f61-895f-4356ca4ce005",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/catwiki_desktop.png?alt=media&token=4ff96a29-63b3-4be8-8960-fcbb1237f7d2",
  },
  {
    id: "29f48a5f-206b-4885-b605-178a29f69c68",
    name: "Unsplash",
    websiteLink: "https://unsplash-web-gallery.vercel.app/",
    githubLink: "https://github.com/Kai4ik/unsplash",
    description:
      "Unsplash - photo gallery web application (Unsplash-inspired design) build with React and styled-components. <br /> Firebase Cloud storage is used to store photos that are uploaded by users. <br /> Firebase Cloud Firestore is used to store and query data about photos (image url (from Firebase storage), photo label, name of the user who uploaded the photo)",
    technologiesUsed: [
      "React (React Hooks)",
      "JavaScript",
      "styled-components",
      "Firebase Cloud Storage",
      "Firebase Cloud Firestore",
    ],
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/unsplash_mobile.png?alt=media&token=39f335ec-9cab-447e-8026-cd6a8ee847a5",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/unsplash_desktop.png?alt=media&token=cab76a96-56b8-402a-ac60-bd4fbd743518",
  },
  {
    id: "b08cb9f3-8648-405d-b2bc-30a00776a04e",
    name: "Wildfire Tracker",
    githubLink: "https://github.com/Kai4ik/wildfireTracker",
    description:
      "Wildfire Tracker - React application that tracks and shows on the map locations of actively burning fires around the world. This application uses the NASA Open API (to fetch current natural events) and Google Maps API.  ",
    technologiesUsed: [
      "React (React Hooks)",
      "JavaScript",
      "styled-components",
      "NASA API",
      "Google Maps API",
    ],
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/wildfire_mobile.png?alt=media&token=9c4bb095-11eb-4bab-a175-c9d25b73e76e",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/wildfire_desktop.png?alt=media&token=3ecf3ca7-f3b1-46ed-8638-325bf4475599",
  },
  {
    id: "6481af5a-4ad8-44ab-8cdc-46ffc56189bf",
    name: "Simple Music App",
    githubLink: "https://github.com/Kai4ik/Simple_Music_App",
    websiteLink: "https://simple-music-web-app.netlify.app/",
    description:
      "Simple web application build using React and styled-components. The entire project utilized the concept of React Hooks. The app allows users to play track, play next/previous one, or choose a particular track",
    technologiesUsed: ["React", "styled-components", "CSS", "HTML5 "],
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/sma_mobile.png?alt=media&token=45a86ecd-45fd-43d7-b8af-d5bfe396a12a",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/sma_desktop.png?alt=media&token=a6135956-4c2f-4c4f-8a50-8b26b5655b55",
  },
  {
    id: "374f5d0e-2427-4d72-b7a8-d066a92a5091",
    name: "Omnifood",
    githubLink: "https://github.com/Kai4ik/Omnifood",
    websiteLink: "https://omniwebsite.netlify.app/",
    description:
      "Omnifood – simple responsive website built with HTML5, plain CSS3, vanilla JavaScript, and jQuery. All DOM manipulation is done with the jQuery library. Waypoints library is used to trigger animations (bounce up, pulse, fade in) when scrolling to a particular element. Responsiveness of the website was achieved by the usage of Media Queries.",
    technologiesUsed: ["HTML5", "CSS3", "jQuery", "Waypoints", "JavaScript"],
    imageMobile:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/omnifood_mobile.png?alt=media&token=7c3ef0a1-9180-42e0-bd60-082f27040ad5",
    imageDesktop:
      "https://firebasestorage.googleapis.com/v0/b/ok-portfolio.appspot.com/o/omnifood_desktop.png?alt=media&token=b86487bd-7726-42d9-9e7f-4899dd6f5f6c",
  },
];

export default projectsData;
