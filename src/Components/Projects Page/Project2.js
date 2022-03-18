import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Suger Cosmetic Io
          </h3>
          <p className="project__description project__body">
            An <span className="project__specialText">E-commerce</span> project
            for Women Makeup Kit 2022. Using a variety of commands you can Buy
            different <span className="project__specialText">Suger Cosmetic Products,</span>{" "}
             Sort Products, Checkout the products.
          </p>
          <p className="project__tech project__body">
            &gt; JavaScript · HTML . CSS
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Ajaykvishwakarma/Sugar_Cosmetic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
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
      <LightWave />
    </article>
  );
}

export default Project2;
