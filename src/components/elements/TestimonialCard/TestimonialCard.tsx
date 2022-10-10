import "./TestimonialCard.scss";

interface ITestimonialCardProps {
  name: string;
  image: string;
  title: string;
  description: string;
}

const TestimonialCard = ({ name, image, title, description }: ITestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__left-content">
        <div className="testimonial-card__image-wrapper">
          <img src={image} alt={name} />
        </div>
        <h1 className="testimonial-card__name">{name}</h1>
        <h2 className="testimonial-card__title">{title}</h2>
      </div>
      <div className="testimonial-card__right-content">
        <p className="testimonial-card__description">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
