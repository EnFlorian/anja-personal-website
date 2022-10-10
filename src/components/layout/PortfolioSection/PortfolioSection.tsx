import { ProjectCard, ProjectsGallery, SectionHeader } from "../../elements";
import { projects } from "../../../data/projects";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const tags = [...new Set(projects.map((project) => project.tags).flat())];

  return (
    <section id="portfolio" className="portfolio-section container-lg">
      <SectionHeader title="Portfolio" subtitle="Here are some of my recent projects" />
      <ProjectsGallery projects={projects} tabs={tags} />
    </section>
  );
};

export default PortfolioSection;
