// Recent Photo or Avatar
// Short Biography
import React from "react";
import gavinProfile from "../img/gavinProfile.jpg"
function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr/>
      <img className="my-pic" src={process.env.PUBLIC_URL + gavinProfile } alt="GavinPro"/>
      <p className="content is-italic mt-4">
      Hi, I'm Gavin
      </p>
      <p className="content">
      I'm passionate for technology and the accessibility it helps us obtain. I've always had an interest in coding and the endless possibilities it can achieve, especially in finances and credit. My hobbies are Coding, Hiking, Camping and Exercise.
      </p>
    </div>
  );
}

export default About;