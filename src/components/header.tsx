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
          </div>
          <div className="header__aside__nav--text">
            <a href="/mlinar">MLINAR</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/teorem">TEOREM</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/fave">FAVE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/varijable">VARIJABLE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/petlje">PETLJE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/funkcije">FUNKCIJE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/2804">VJEZBA 2804</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/0305">VJEZBA 0305</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/brewary">BREWARY</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/pokemon">POKEMON</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/europe">EUROPE</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/chat">CHAT</a>
          </div>
          <div className="header__aside__nav--text">
            <a href="/debug">DEBUG</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
