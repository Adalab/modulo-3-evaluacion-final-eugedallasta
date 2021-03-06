import "../stylesheets/components/Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__text">Barcelona-2020 @eugedallasta</small>
      <nav>
        <a
          href="https://github.com/eugedallasta"
          className="footer__github"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github footer__github--icon"></i>
        </a>
        <a
          href="https://twitter.com/eugedallasta"
          className="footer__twitter"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter footer__twitter--icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/eugenia-dallasta-32753318a/"
          className="footer__linkedin"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin footer__linkedin--icon"></i>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
