import "./IntermissionSection.scss";
import intermissionImage from "../../../assets/images/intermission.jpg";

const IntermissionSection = () => {
  return (
    <section className="intermission-section container-xl">
      <div className="intermission-section__left-content">
        <img
          className="intermission-section__image"
          src={intermissionImage}
          alt="intermission"
        />
      </div>
      <div className="intermission-section__right-content">
        <h1 className="intermission-section__title"> 10 Years of Experience</h1>
        <h2 className="intermission-section__subtitle">I'm a subtitle</h2>
        <p className="intermission-section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <div className="intermission-section__bars">
          <div className="intermission-section__bar">
            <div className="intermission-section__bar-details">
              <h3 className="intermission-section__bar-title">HTML</h3>
              <p className="intermission-section__bar-percentage">90%</p>
            </div>
            <div className="intermission-section__progression-bar"></div>
          </div>
          <div className="intermission-section__bar">
            <div className="intermission-section__bar-details">
              <h3 className="intermission-section__bar-title">HTML</h3>
              <p className="intermission-section__bar-percentage">90%</p>
            </div>
            <div className="intermission-section__progression-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntermissionSection;
