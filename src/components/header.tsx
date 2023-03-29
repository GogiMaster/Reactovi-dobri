import logo from "../assets/Images/LEGO_logo.svg.webp";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="header__aside">
        <div className="header__aside__nav">
          <div className="header__aside__nav--text">
            <a href="#">SHOP</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="#">DISCOVER</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="#">HELP</a>
          </div>
        </div>
        <button className="header__aside__is">EASTER</button>
      </div>
    </header>
  );
};

export default Header;
