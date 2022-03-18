import { HashLink } from "react-router-hash-link";
import "./Logo.css"
function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src="/images/logo.png" alt="Brand Logo" width="90" height="71"  id="logoID" />
      </HashLink>
    </div>
  );
}

export default Logo;
