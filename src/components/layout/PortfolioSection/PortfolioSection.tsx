import { ProjectCard, ProjectsGallery, SectionHeader } from "../../elements";
import { projects } from "../../../data/projects";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const tags = [...new Set(projects.map((project) => project.tags).flat())];

  return (
    <section id="portfolio" className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader
          title="Services"
          subtitle="What I offer and what I can do for you"
        />
        <ProjectsGallery projects={projects} tabs={tags} />
      </div>
    </section>
  );
};

export default PortfolioSection;
