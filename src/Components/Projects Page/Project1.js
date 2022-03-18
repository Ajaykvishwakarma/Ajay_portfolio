import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
       <h2 className="project__header">Projects</h2>
      <div className="project__main">
        
        {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="45%"
              height="auto"
              loading="lazy"
            />
      
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Levi's in</h3>
          <p className="project__description project__body">
            An <span className="project__specialText">E-commerce website </span> built to
            Buying Clothing items. Allows users to{" "}
            <span className="project__specialText">
              Order the products that are required
            </span>
            , with an intuitive add button combined with a simple home page to
            checkoff all Products. An enjoyable{" "}
            <span className="project__specialText">Store locator</span> is
            available for all users so they can view their{" "}
            <span className="project__specialText">Levi's Store  in India. </span>
            From this Website, users can buy all Levi's products that are available on our website.{" "}
            <span className="project__specialText">Products Checkout,</span> Users can pay through any card.
          </p>
          <p className="project__tech project__body">
            &gt; Expressjs · JavaScript · NPM package · Google Auth · HTML . CSS
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Ajaykvishwakarma/levi_backend"
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

export default Project1;
