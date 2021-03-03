import "../stylesheets/components/Header.scss";
import logo from "../images/Rick_and_Morty_-_logo_(English).png";


const Header = () => {
  return (
    <header id="header" className="header">
      <img
        className="header__logo"
        title="Logo Rick y Morty"
        alt="Logo Rick y Morty"
        src={logo}
      />
    </header>
  );
};

export default Header;