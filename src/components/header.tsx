import logo from "../assets/Images/LEGO_logo.svg.webp";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <div className="header__aside">
        <div className="header__aside__nav">
          <div className="header__aside__nav--text">
            <a href="/">HOME</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/exe">EXERCISE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/ispit">ISPIT</a>
            <a href="/mlinar">Mlinar</a>
          </div>
        </div>
        <button className="header__aside__is">EASTER</button>
      </div>
    </header>
  );
};

export default Header;
