import ProjectCard, { IProjectCardProps } from "../ProjectCard/ProjectCard";
import { useState } from "react";
import "./ProjectsGallery.scss";

interface IProjectsGalleryProps {
  projects: IProjectCardProps[];
  tabs: string[];
}

const ProjectsGallery = ({ projects, tabs }: IProjectsGalleryProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const filteredProjects = projects.filter(
    (project) => project.tags.includes(tabs[activeTab]) || activeTab === 0
  );

  return (
    <div className="project-gallery">
      <div className="project-gallery__wrapper container-xl">
        <ul className="project-gallery__tabs">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={
                  activeTab == index
                    ? "project-gallery__tab--active project-gallery__tab"
                    : "project-gallery__tab"
                }
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        <ul className="project-gallery__projects">
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsGallery;
