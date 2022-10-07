import { SectionHeader } from "../../elements";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <section className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader title="Contact Me" subtitle="Get in touch with me" />
      </div>
    </section>
  );
};

export default ContactSection;
