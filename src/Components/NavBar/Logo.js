import { HashLink } from "react-router-hash-link";

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
        <img src="/images/logo.png" alt="Brand Logo" width="85" height="67" margin-bottom="5px" />
      </HashLink>
    </div>
  );
}

export default Logo;
