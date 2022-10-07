import "./ProjectCard.scss";

interface IProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: IProjectCardProps) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
