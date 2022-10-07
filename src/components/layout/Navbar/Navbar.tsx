import "./Navbar.scss";
import { links } from "../../../data/navigation";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const renderedLinks = links.map((link, index) => (
    <li key={index}>
      <ScrollLink to={link.path} smooth={true} offset={link.offset}>
        {link.name}
      </ScrollLink>
    </li>
  ));

  window.onscroll = () => {
    const scrollIndicator = document.querySelector(".navbar");
    if (document.documentElement.scrollTop > 20) {
      scrollIndicator?.classList.add("navbar--scrolled");
    } else {
      scrollIndicator?.classList.remove("navbar--scrolled");
    }
  };

  return (
    <section className="navbar">
      <div className="navbar__wrapper container-xl">
        <h1 className="navbar__logo">Logo</h1>
        <ul className="navbar__links">{renderedLinks}</ul>
      </div>
    </section>
  );
};

export default Navbar;
