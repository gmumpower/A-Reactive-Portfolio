import React from "react";
import gavinResume from "../img/GavinMumpowerRESUME.pdf";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + gavinResume }
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>Web-API,OpenAPI, JSON,</li>
            <li>NodeJS, OOP, Express</li>
            <li>SQL, ORM, MVC</li>
            <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;