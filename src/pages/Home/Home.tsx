import { SectionDivider } from "../../components/elements";
import {
  ContactSection,
  HeroSection,
  IntermissionSection,
  PortfolioSection,
  ServicesSection,
  TestimonialsSection,
} from "../../components/layout";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SectionDivider left />
      <ServicesSection />
      <PortfolioSection />
      <IntermissionSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
