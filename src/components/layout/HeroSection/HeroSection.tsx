import "./HeroSection.scss";
import heroImage from "../../../assets/images/person1.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__wrapper container-lg">
        <div className="hero-section__main-content">
          <div className="hero-section__left-content">
            <div className="hero-section__image-wrapper">
              <img src={heroImage} alt="hero" />
            </div>
          </div>
          <div className="hero-section__right-content">
            <h1 className="hero-section__title">Hi, I'm John Doe</h1>
            <p className="hero-section__subtitle">
              I'm a designer and mobile developer specializing in Android and
              iOS development and UI/UX design.
            </p>
            <button className="hero-section__cta-button">Hire Me</button>
          </div>
        </div>
        <div className="hero-section__footer">
          <div className="hero-section__footer-left-content">
            <div>
              <span>9</span>
              <div>
                <span>years</span>
                <span>experience</span>
              </div>
            </div>
            <div>
              <span>9</span>
              <div>
                <span>projects </span>
                <span>completed</span>
              </div>
            </div>
          </div>
          <div className="hero-section__footer-right-content">
            <div>
              <div>
                <span>Get in touch</span>
                <span>john.doe@gmail.com</span>
              </div>
              <span>Icon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
