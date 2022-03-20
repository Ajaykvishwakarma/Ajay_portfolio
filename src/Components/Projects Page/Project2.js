import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import { BiLinkExternal } from "react-icons/bi";
import "./ProjectLight.css";

function Project2() {
  return (
    <article className="project light">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
         <a href="https://competent-bardeen-b9ae59.netlify.app" target="_blank" rel="noopener noreferrer" className="prod_Anchor"> <h3 className="project__title project__titleDark">
            Suger Cosmetic Io
            
          </h3></a>
          <p className="project__description project__body">
            An <span className="project__specialText">E-commerce</span> project
            for Women Makeup Kit 2022. Using a variety of commands you can Buy
            different <span className="project__specialText">Suger Cosmetic Products,</span>{" "}
             Sort Products, Checkout the products.
          </p>
          <p className="project__tech project__body">
            &gt; JavaScript · HTML . CSS
          </p>
            <div className="linksDiv">
          <a
            className="project__sourceCode"
            href="https://competent-bardeen-b9ae59.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
          <BiLinkExternal className="project__githubLogo" size={25} />
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Ajaykvishwakarma/Sugar_Cosmetic"
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
          src="https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/public/images/SugerCosmetic_big.png"
          srcset="https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/public/images/SugerCosmetic_big.png 750w, https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/public/images/SugerCosmetic_big.png 1468w"
          sizes="50vw"
          alt="Suger Cosmetic Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <DarkWave />
    </article>
  );
}

export default Project2;
