import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectLight.css";

function Project4() {
  return (
    <article className="project light">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
         <a href="https://zoomx-a15v.vercel.app" target="_blank" rel="noopener noreferrer" className="prod_Anchor"> <h3 className="project__title project__titleDark">
            ZoomX
            
          </h3></a>
          <p className="project__description project__body">
            An <span className="project__specialText">E-commerce</span> project
            for Photo Frames Kit 2022. Using a variety of commands you can Buy
            different <span className="project__specialText">Zoomx Photo Frames Products,</span>{" "}
             Sort Products, Checkout the products. Its based on Reactjs, Redux, Redux thunk and UIs. And I used mongoDb and express for create backend. 
          </p>
          <p className="project__tech project__body">
            &gt; Reactjs · MUI . Chakra UI . Redux
          </p>
            <div className="linksDiv">
          <a
            className="project__sourceCode"
            href="https://zoomx-a15v.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
          <BiLinkExternal className="project__githubLogo" size={25} />
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Ajaykvishwakarma/ZoomX.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            {/* <h3 className="project__sourceCodeText">Source Code</h3> */}
          </a>
          </div>
        </div>
        <img
          className="project__image project__imageDark"
          src="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/zoomx_img/landing_page.png"
          srcset="https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/zoomx_img/landing_page.png 750w, https://raw.githubusercontent.com/Ajaykvishwakarma/Images/main/zoomx_img/landing_page.png 1468w"
          sizes="50vw"
          alt="ZoomX Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <DarkWave />
    </article>
  );
}

export default Project4;
