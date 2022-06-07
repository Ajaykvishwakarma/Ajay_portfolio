import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import DarkWave from "../Waves/DarkWave";
import LightWave from "../Waves/LightWave";
import "./ProjectLight.css";

import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (

    <article id={id} className="project dark" >
      
       <h2 className="project__header">Top Projects </h2>
      <div className="project__main" >

      <img
          className="project__image"
          src="/images/health_fusion_add.png"
          srcset="/images/health_fusion_add.png 750w, /images/health_fusion_add.png 1468w"
          sizes="50vw"
          alt="Lavi's Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        
        {/* {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Levi.in landing Page"
              width="45%"
              height="auto"
              loading="lazy"
            />
      
          </>
        ) : (
          <> </>
        )} */}
        

        <div data-aos="fade-left" className="project__right">
          <a href="https://leviwithbackend.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="prod_Anchor"><h3 className="project__title project__titleDark" id="title">Levi's in</h3></a>
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
            
          </p>
          <p className="project__tech project__body">
            &gt; Expressjs · JavaScript · NPM package · Google Auth · HTML . CSS
          </p>
          <div className="linksDiv">
          <a
            className="project__sourceCode"
            href="https://leviwithbackend.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
          <BiLinkExternal className="project__githubLogo" size={25} />
          </a>
          <a
            className="project__sourceCode"
            href="https://github.com/Ajaykvishwakarma/levi_backend"
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

export default Project1;
