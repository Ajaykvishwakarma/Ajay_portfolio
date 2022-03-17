import { FaGithub, FaLinkedin,  FaTwitter } from "react-icons/fa";
import {  DiJavascript } from "react-icons/di";
import "./SocialMediaIcons.css";

function SocialMediaIcons() {
  return (
    <div className="socialMediaIcons">
      <hr className="socialMediaIcons__leftHr hr" />
      <a
        href="https://github.com/Ajaykvishwakarma"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my GitHub"
      >
        <FaGithub className="socialMediaIcons__github footer__icon" size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/ajay-vishwakarma-57a20a217/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Linkedin"
      >
        <FaLinkedin
          className="socialMediaIcons__linkedin footer__icon"
          size={30}
        />
      </a>
     
      <a
        href="https://twitter.com/ajay_k_vishwa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="my Twitter"
      >
        <FaTwitter
          className="socialMediaIcons__twitter footer__icon"
          size={30}
        />
      </a>
      <hr className="socialMediaIcons__rightHr hr" />
    </div>
  );
}

export default SocialMediaIcons;
