
import React from "react";
import Project from "./project";
import passwordGeneratorPic from "../img/passwordGenerator.png";
import snodesPic from "../img/snodes1.png";
import NoteTaker1 from "../img/NoteTaker1.png";
import readmeGenerator from "../img/readmeGenerator.png";
import weatherdashboard1 from "../img/weatherdashboard 1.png";
import schedulerPhoto1 from "../img/schedulerPhoto1.png";


const projects = [
  {
    id: 0,
    title: "Password Generator",
    languages: "Javascript, HTML, CSS, Random Math",
    packages:"none",
    image: passwordGeneratorPic,
    description: "This project was about created a random password generator.Implementing the random math function to create a random generated password with selectable characters (numbers,special characters,lowercase,uppercase) utilizing javascript for creating the desired password length and to the desired characters.",
    repo: "https://github.com/gmumpower/Password-Generator",
    live: "https://gmumpower.github.io/Password-Generator/",
  },
  {
    id: 1,
    title: "Snodes (Sharing Code)",
    languages: "CSS, HTML, JavaScript,",
    packages: "bcrypt, Express, MySQL, Sequelize",
    image: snodesPic,
    description: "Programming can be tough and sometimes it is hard to find a specific line of code that you need to get your application working. Our App Snode allows users to look at code snippets to quickly find code applicable to whatever application they are working on. They also have the ability to upvote and downvote code that is most helpful for them. This allows for the most used or searched code snippets to populate based off of popularity.",
    repo: "https://github.com/gmumpower/snode",
    live: "https://floating-shore-96827.herokuapp.com/",
  },
  {
    id: 2,
    title: "Sweet Notes",
    languages: "CSS, HTML, JavaScript.",
    packages: "jest, Node, Express, UUID Tools",
    image: NoteTaker1,
    description: "Note Taker helps any user by adding or removing notes and storing them on a server.",
    repo: "https://github.com/gmumpower/Sweet-Notes",
    live: "https://sweet-notes-1.herokuapp.com/",
  },
  {
    id: 3,
    title: "README Generator",
    languages: "Javascript",
    packages: "inquirer",
    image: readmeGenerator,
    description: "Readme Generator is an application used to quickly and effectively generate a professional README file",
    repo: "https://github.com/gmumpower/readme-progenerator",
    live: "runs in terminal",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "Javascript, HTML, CSS,",
    packages: "OpenWeatherAPI",
    image: weatherdashboard1,
    description:"Weather dashboard that runs in the browser and feature dynamically updated HTML and CSS.",
    repo: "https://github.com/gmumpower/special-fiesta-weatherdashboard",
    live: "https://gmumpower.github.io/special-fiesta-weatherdashboard/",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    languages: "Javascript, HTML, CSS, Bootstrap",
    packages: "API'Moment'(now deprecated)",
    image: schedulerPhoto1,
    description: "A basic daily work scheduler around the standard 9-5 timeframe, enter in your reminders and leave the page and they will still be there!",
    repo: "https://github.com/gmumpower/cuddly-memory-scheduler",
    live: "https://gmumpower.github.io/cuddly-memory-scheduler/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;