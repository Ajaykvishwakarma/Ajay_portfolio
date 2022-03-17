import { FaGithub, FaLinkedin,  FaTwitter } from "react-icons/fa";
import { SiRedux,SiMysql } from "react-icons/si";
import {  DiJavascript,DiHtml5,DiCss3,DiJavascript1,DiJava,DiPython ,DiReact,DiNodejs,DiBootstrap,DiMongodb} from "react-icons/di";
import "./Skills.css";
import LightWave from "../Waves/LightWave";
function Skills() {
  return (
    <div id="skills">
    <div className="about_1">
      <h2 id="head">Skills</h2>
    <div className="Icons">
      
      
      <div className="iconId">
        <DiHtml5 className="socialMediaIcons__github footer__icon" size={70} />
        <DiCss3 className="socialMediaIcons__github footer__icon" size={70} />
        <DiJavascript1 className="socialMediaIcons__github footer__icon" size={70} />
        <DiReact className="socialMediaIcons__github footer__icon" size={70} />
        <DiPython className="socialMediaIcons__github footer__icon" size={70} />
          </div>
          <div className="iconId">
          <DiJava className="socialMediaIcons__github footer__icon" size={70} />
          <SiRedux className="socialMediaIcons__github footer__icon" size={70} />
          <DiBootstrap className="socialMediaIcons__github footer__icon" size={70} />
          <DiNodejs className="socialMediaIcons__github footer__icon" size={70} />
          <DiMongodb className="socialMediaIcons__github footer__icon" size={70} />
          </div>
          <div className="iconId">
         
          <SiMysql className="socialMediaIcons__github footer__icon" size={70} />
      
          </div>
      <LightWave/>
    </div>
    </div>
    </div>
  );
}

export default Skills;
