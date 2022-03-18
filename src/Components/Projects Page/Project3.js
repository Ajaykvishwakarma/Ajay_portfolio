import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
     
      <div className="project__main">
        <img
          className="project__image"
          src="https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/src/landing_page2.png"
          srcset="https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/src/landing_page2.png 750w, https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio/main/src/landing_page2.png 1468w"
          sizes="50vw"
          alt="Lavi's Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
         <a href = "https://levi-s-in.vercel.app/" className="prod_Anchor"> <h3 className="project__title">Levi's Clone </h3></a>
          <p className="project__description project__body">
            A <span className="project__specialText">Levi.in a clone. </span>The project
            for E-Commerce website 2022. Allows users to{" "}
            <span className="project__specialText">Buy Clothing items.</span> Store locator{" "}
            <span className="project__specialText">that locates Levi's store in India.</span>
            {" "}
            {/* <span className="project__specialText">Spoonacular API</span>. */}
          </p>
          <p className="project__tech project__body">
            &gt; HTML · CSS · JavaScript · Localhost · Google Map API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Ajaykvishwakarma/levi-s.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
