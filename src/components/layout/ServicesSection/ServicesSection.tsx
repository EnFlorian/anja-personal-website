import { SectionHeader, ServiceCard } from "../../elements";
import { services } from "../../../data/services";
import "./ServicesSection.scss";

const ServicesSection = () => {
  const renderedServices = services.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ));

  return (
    <section className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader
          title="Services"
          subtitle="What I offer and what I can do for you"
        />
        <ul className="services-section__services">{renderedServices}</ul>
      </div>
    </section>
  );
};

export default ServicesSection;
