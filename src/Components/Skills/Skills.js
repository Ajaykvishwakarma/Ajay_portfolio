// import { FaGithub, FaLinkedin,  FaTwitter } from "react-icons/fa";
// import { SiRedux,SiMysql } from "react-icons/si";
// import {  DiJavascript,DiHtml5,DiCss3,DiJavascript1,DiJava,DiPython ,DiReact,DiNodejs,DiBootstrap,DiMongodb} from "react-icons/di";
// import "./Skills.css";
// import LightWave from "../Waves/LightWave";
// import DarkWave from "../Waves/DarkWave";
// function Skills() {
//   return (
    // <div id="skills">
    //    <article className="project dark">
    // <div className="about_1">
    //   <div id="headDiv"> <h2 id="head">Skills</h2></div>
    // <div className="Icons">
    
      
    //   <div className="iconId">
    //     <DiHtml5 className="socialMediaIcons__github footer__icon" size={70} />
    //     <DiCss3 className="socialMediaIcons__github footer__icon" size={70} />
    //     <DiJavascript1 className="socialMediaIcons__github footer__icon" size={70} />
    //     <DiReact className="socialMediaIcons__github footer__icon" size={70} />
    //     <DiPython className="socialMediaIcons__github footer__icon" size={70} />
    //       </div>
    //       <div className="iconId">
    //       <DiJava className="socialMediaIcons__github footer__icon" size={70} />
    //       <SiRedux className="socialMediaIcons__github footer__icon" size={70} />
    //       <DiBootstrap className="socialMediaIcons__github footer__icon" size={70} />
    //       <DiNodejs className="socialMediaIcons__github footer__icon" size={70} />
    //       <DiMongodb className="socialMediaIcons__github footer__icon" size={70} />
    //       </div>
    //       <div className="iconId">
         
    //       <SiMysql className="socialMediaIcons__github footer__icon" size={70} />
      
    //       </div>
    //   {/* <DarkWave/> */}
    // </div>
    // </div>
    // </article>
    // </div>
//   );
// }

// export default Skills;





import { FaGithub, FaLinkedin,  FaTwitter } from "react-icons/fa";
import { SiRedux,SiMysql } from "react-icons/si";
import {  DiJavascript,DiHtml5,DiCss3,DiJavascript1,DiJava,DiPython ,DiReact,DiNodejs,DiBootstrap,DiMongodb} from "react-icons/di";
import "./Skills.css";
// import LightWave from "../Waves/LightWave";
import DarkWave from "./DarkWave";
import "./ProjectLight.css";

function Skills() {
  return (
    <article className="project1 light" id="skills">
     
      <div className="project__main1">
      
      
    <div className="about_1">
      <div id="headDiv"> <h2 id="head">Skills</h2></div>
    <div className="Icons">
    
      
      <div className="iconId">
        <DiHtml5 className="socialMediaIcons__github footer__icon " size={70} />
        <DiCss3 className="socialMediaIcons__github footer__icon" size={70} />
        <DiJavascript1 className="socialMediaIcons__github footer__icon" size={70} />
        <DiReact className="socialMediaIcons__github footer__icon" size={70} />
        <DiPython className="socialMediaIcons__github footer__icon" size={70} />
     
          <DiJava className="socialMediaIcons__github footer__icon" size={70} />
          <SiRedux className="socialMediaIcons__github footer__icon" size={70} />
          <DiBootstrap className="socialMediaIcons__github footer__icon" size={70} />
          <DiNodejs className="socialMediaIcons__github footer__icon" size={70} />
          <DiMongodb className="socialMediaIcons__github footer__icon" size={70} />
          
         
          <SiMysql className="socialMediaIcons__github footer__icon" size={70} />
      
          </div>
      {/* <DarkWave/> */}
    </div>
    </div>

    
      </div>
      <DarkWave />
    </article>
  );
}

export default Skills;
