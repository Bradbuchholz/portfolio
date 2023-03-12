import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, my name is Brad Buchholz</h2>
        <div className='prompt'>
          <p>I have a passion for building user interfaces and creating web applications that are both functional and visually appealing.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        <div className='skills'>
          <h1> Skills </h1>
          <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              JavaScript, ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, C#, .NET, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C#, React, Swift</span>
          </li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;