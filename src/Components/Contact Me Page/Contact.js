import DarkWave from "../Waves/DarkWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Currently I am looking for a Full Stack Web Development
          Job. and Looking for a learning environment.
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: ajaykv054@gmail.com">
            <span className="contact__text">ajaykv054@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/ajay-vishwakarma-57a20a217/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">Ajay-vishwakarma</span>
          </a>
        </div>
      </div>
      <DarkWave />
    </section>
  );
}

export default Contact;
