import "./HeroSection.scss";
import heroImage from "../../../assets/images/person1.jpg";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-section__wrapper container-lg">
        <div className="hero-section__main-content">
          <div className="hero-section__left-content">
            <div className="hero-section__image-wrapper">
              <img src={heroImage} alt="hero" />
            </div>
          </div>
          <div className="hero-section__right-content">
            <h1 className="hero-section__title">Hi, I'm Anja Doe</h1>
            <p className="hero-section__subtitle">
              I'm a designer and mobile developer specializing in Android and iOS development and
              UI/UX design.
            </p>
            <ScrollLink smooth={true} spy={true} to="contact" className="button">
              Get in Touch
            </ScrollLink>
          </div>
        </div>
        <div className="hero-section__footer">
          <div className="hero-section__info">
            <span className="hero-section__number">10</span>
            <p>Years of Experience</p>
          </div>
          <div className="hero-section__info">
            <span className="hero-section__number">129</span>projects completed
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
