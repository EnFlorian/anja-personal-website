import { ProjectCard, SectionHeader } from "../../elements";
import { projects } from "../../../data/projects";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const renderedProjects = projects.map((project, index) => (
    <li key={index}>
      <ProjectCard {...project} />
    </li>
  ));

  return (
    <section className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader
          title="Services"
          subtitle="What I offer and what I can do for you"
        />
        <ul className="services-section__services">{renderedProjects}</ul>
      </div>
    </section>
  );
};

export default PortfolioSection;
