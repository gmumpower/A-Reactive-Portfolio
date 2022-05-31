import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Full Stack Developer Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/gmumpower" target="_blank" rel="noreferrer">
         Gavin Mumpower
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/gavin-mumpower-58aaa1230/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://github.com/gmumpower" target="_blank" rel="noreferrer">
            Github
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;