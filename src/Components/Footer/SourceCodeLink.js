import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./SourceCodeLink.css";

function SourceCodeLink() {
  return (
    <a
      className="sourceCodeLink"
      href="https://github.com/Ajaykvishwakarma"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="=Website GitHub Repository"
    >
      <FaGithub className="sourceCodeLink__github" size={20} />
      <h3 className="">Check Out The Source Code</h3>
      <FaExternalLinkAlt className="sourceCodeLink__externalLink" />
    </a>
  );
}

export default SourceCodeLink;
