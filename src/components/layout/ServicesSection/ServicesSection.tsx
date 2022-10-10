import "./ServicesSection.scss";
import { SectionHeader, ServiceCard } from "../../elements";
import { services } from "../../../data/services";

const ServicesSection = () => {
  const renderedServices = services.map((service, index) => (
    <li key={index}>
      <ServiceCard {...service} />
    </li>
  ));

  return (
    <section id="services" className="services-section container-lg">
      <SectionHeader title="Services" subtitle="What I offer and what I can do for you" />
      <ul className="services-section__services">{renderedServices}</ul>
    </section>
  );
};

export default ServicesSection;
