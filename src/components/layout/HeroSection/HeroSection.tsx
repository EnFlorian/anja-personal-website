import "./HeroSection.scss";
import heroImage from "../../../assets/images/person1.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__wrapper container-xl">
        <div className="hero-section__m-content">
          <div className="hero-section__left-content"></div>
          <div className="hero-section__right-content"></div>
        </div>
        <div className="hero-section__footer">
          <div className="hero-section__footer-left-content"></div>
          <div className="hero-section__footer-right-content"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
