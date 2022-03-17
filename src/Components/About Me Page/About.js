import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello! My name is Ajay Vishwakarma and I am a Full Stack Web Developer
          Student attending the{" "}
          <span className="about__specialText">Masai School.</span>{" "}
          Currently, I am interested in{" "}
          <span className="about__specialText">Front_End, Backend</span>,
          creating APIs, and working with databases, working with react. As well, I am extremely
          interested in Data Science, more specifically <span className="about__specialText">Artificial
          Intelligence</span> and <span className="about__specialText">Machine Learning.</span>
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page  
        </p>
      </div>
      <img 
        className="about__headshot"
        src="https://raw.githubusercontent.com/Ajaykvishwakarma/Portfolio_1/main/src/ajay_photo.png"
        alt="Brand Logo"
        width="280"
        height="350"
      />
      <LightWave />
    </section>
  );
}

export default About;
