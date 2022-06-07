import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectDark.css";

function Project5() {
  return (
    <article className="project dark">
     
      <div className="project__main">
        <img
          className="project__image"
          src="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/Galaxy_home.png"
          srcset="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/Galaxy_home.png 750w, https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/Galaxy_home.png 1468w"
          sizes="50vw"
          alt="Galaxy Enterprises Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
         <a href = "https://galaxyenterprises.vercel.app" target="_blank" rel="noopener noreferrer" className="prod_Anchor"> <h3 className="project__title" id="title">Galaxy Enterprises </h3></a>
          <p className="project__description project__body">
            A <span className="project__specialText">Galaxy Enterprises. </span>I made this website for my client, it is my first website that i have made for my client. I made this for customer connections to the shopkeeper.{" "}
            <span className="project__specialText">I Made This Project using React, </span> Material Ui{" "}
            <span className="project__specialText">and also used mongoDb, Expressjs as database and backend also deployed on heroku and vercel.</span>
            {" "}
            {/* <span className="project__specialText">Spoonacular API</span>. */}
          </p>
          <p className="project__tech project__body">
            &gt; Reactjs · CSS · Redux · Redux-thunk · Meterial Ui . Chakra Ui 
          </p>
          <div className="linksDiv">
          <a
            className="project__sourceCode"
            href="https://galaxyenterprises.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
          <BiLinkExternal className="project__githubLogo" size={25} />
          </a>
          <a
            className="project__sourceCode"
            href="https://github.com/Ajaykvishwakarma/galaxy_enterprises"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            {/* <h3 className="project__sourceCodeText">Source Code</h3> */}
          </a>
          </div>
        </div>
      </div>
      <LightWave />
    </article>
  );
}

export default Project5;
