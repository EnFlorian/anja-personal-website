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
    <section id="testimonials" className="testimonials-section   container-lg">
      <SectionHeader title="Testimonials" subtitle="What my clients say" />
      <ul className="testimonials-section__testimonials">
        {renderedTestimonials}
      </ul>
    </section>
  );
};

export default TestimonialsSection;
