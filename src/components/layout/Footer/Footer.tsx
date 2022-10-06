import "./Footer.scss";
import { socials } from "../../../data/socials";

const Footer = () => {
  const renderedSocials = socials.map((social, index) => (
    <li key={index}>{social.icon}</li>
  ));

  return (
    <footer className="footer">
      <div className="footer__wrapper container-xl">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} all rights reserved
        </p>
        <ul className="footer__socials">{renderedSocials}</ul>
      </div>
    </footer>
  );
};

export default Footer;
