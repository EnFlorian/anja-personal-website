import { SectionHeader, TestimonialCard } from "../../elements";
import "./TestimonialsSection.scss";
import { testimonials } from "../../../data/testimonials";

const TestimonialsSection = () => {
  const renderedTestimonials = testimonials.map((testimonial, index) => (
    <li key={index}>
      <TestimonialCard {...testimonial} />
    </li>
  ));

  return (
    <section id="testimonials" className="services-section">
      <div className="services-section__wrapper container-xl">
        <SectionHeader title="Testimonials" subtitle="What my clients say" />
        <ul className="services-section__slider">{renderedTestimonials}</ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
