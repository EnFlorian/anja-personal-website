import "./MobileMenu.scss";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { links } from "../../../data/navigation";
import { motion } from "framer-motion";

interface IMobileMenuProps {
  onClose: (value: boolean) => void;
}

const MobileMenu = ({ onClose }: IMobileMenuProps) => {
  const renderedLinks = links.map((link, index) => (
    <li key={index} onClick={() => onClose(false)}>
      <ScrollLink
        className="mobile-menu__link"
        offset={link.offset}
        smooth={true}
        spy={true}
        to={link.path}
      >
        {link.name}
      </ScrollLink>
    </li>
  ));

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3 }}
      className="mobile-menu"
    >
      <div className="mobile-menu__close-button" onClick={() => onClose(false)}>
        <IoCloseSharp />
      </div>
      <ul className="mobile-menu__links">{renderedLinks}</ul>
    </motion.div>
  );
};

export default MobileMenu;
