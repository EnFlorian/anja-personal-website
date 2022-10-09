import "./Navbar.scss";
import { GrMenu } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";
import { links } from "../../../data/navigation";
import { MobileMenu } from "../../elements";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const renderedLinks = links.map((link, index) => (
    <li key={index}>
      <ScrollLink
        className="navbar__link"
        offset={link.offset}
        smooth={true}
        spy={true}
        to={link.path}
      >
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
    <section id="navbar" className="navbar">
      <div className="navbar__wrapper container-xl">
        <h1 className="navbar__logo">Logo</h1>
        <ul className="navbar__links">
          {renderedLinks}
          <li className="navbar__link" onClick={() => setIsMenuOpen(true)}>
            <GrMenu className="navbar__mobile-button" />
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={setIsMenuOpen} />}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
