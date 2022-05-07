import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectDark.css";

function Project3() {
  return (
    <article className="project dark">
     
      <div className="project__main">
        <img
          className="project__image"
          src="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/twitter_starting.png"
          srcset="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/twitter_starting.png 750w, https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/twitter_starting.png 1468w"
          sizes="50vw"
          alt="Lavi's Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
         <a href = "https://twitter-clone-ba49b.web.app/" target="_blank" rel="noopener noreferrer" className="prod_Anchor"> <h3 className="project__title" id="title">Twitter's Clone </h3></a>
          <p className="project__description project__body">
            A <span className="project__specialText">Twitter clone. </span>This Project is about the clone of Twitter Website, a Social Media, Where People can share Thoughts, Post Messages.{" "}
            <span className="project__specialText">I Made This Project using React, </span> Material Ui{" "}
            <span className="project__specialText">and also used 🔥Firebase as database and also deployed on Firebase.</span>
            {" "}
            {/* <span className="project__specialText">Spoonacular API</span>. */}
          </p>
          <p className="project__tech project__body">
            &gt; HTML · CSS · JavaScript · React · Meterial Ui . Firebase . Bootstrap
          </p>
          <div className="linksDiv">
          <a
            className="project__sourceCode"
            href="https://twitter-clone-ba49b.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
          <BiLinkExternal className="project__githubLogo" size={25} />
          </a>
          <a
            className="project__sourceCode"
            href="https://github.com/Ajaykvishwakarma/Twitter"
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

export default Project3;
