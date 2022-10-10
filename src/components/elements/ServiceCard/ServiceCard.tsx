import "./ServiceCard.scss";

interface IServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: IServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <img src={icon} alt={title} />
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
