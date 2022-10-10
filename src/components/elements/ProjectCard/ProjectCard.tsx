import "./ProjectCard.scss";

export interface IProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, tags, link }: IProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <a href={link} target="_blank" rel="noreferrer noopener">
          <h1 className="project-card__title">{title}</h1>
        </a>
        <p className="project-card__description">{description}</p>
      </div>
      <div className="project-card__image-wrapper">
        <img className="project-card__image" src={image} alt={title} />
      </div>
      <ul className="project-card__tags">
        {tags.map((tag, index) => (
          <li key={index} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
