import mlinar1 from "../assets/Images/mlinar1.png";
import mlinar2 from "../assets/Images/mlinar2.png";
import mlinar3 from "../assets/Images/mlinar3.png";
import mlinar4 from "../assets/Images/mlinar4.png";
import mlinar5 from "../assets/Images/mlinar5.png";
import mlinar6 from "../assets/Images/mlinar6.png";
import mlinar8 from "../assets/Images/mlinar8.png";
import mlinar9 from "../assets/Images/mlinar9.png";
import mlinar10 from "../assets/Images/mlinar10.png";
import mlinar11 from "../assets/Images/mlinar11.png";
import mlinar12 from "../assets/Images/mlinar12.png";
import mlinar13 from "../assets/Images/mlinar13.png";
import mlinar14 from "../assets/Images/mlinar14.png";
import googlePlay from "../assets/Images/google-play.png";
import logo from "../assets/Images/mlinar-bar-logo.png";
import arrow2 from "../assets/Images/arrow2.png";

const Mlinar = () => {
  return (
    <>
      <div className="container--dark">
        <div className="container">
          <div className="mlinar">
            <div className="mlinar__title">
              <h1>
                <span>Najukusniji</span> Pekarski proivodi u susjedstvu
              </h1>
            </div>
            <div className="mlinar__tags">
              <span className="mlinar__tags--item">Kruh</span>
              <span className="mlinar__tags--item">Peciva</span>
              <span className="mlinar__tags--item">Slano</span>
              <span className="mlinar__tags--item">Slatko</span>
              <span className="mlinar__tags--item">Burek</span>
              <span className="mlinar__tags--item">Pizza</span>
              <span className="mlinar__tags--item">Sendviči</span>
              <span className="mlinar__tags--item">Salata</span>
              <span className="mlinar__tags--item">HoReCa</span>
              <span className="mlinar__tags--item">Pakirano</span>
              <span className="mlinar__tags--item">Kolači</span>
              <span className="mlinar__tags--item">Torte</span>
              <span className="mlinar__tags--item">Prigode torte</span>
            </div>
            <div className="mlinar__main">
              <div className="mlinar__main__card">
                <img src={mlinar1} className="bckimg" />
                <h2>Kruh</h2>
                <p>Kruh ravno iz peći</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar2} className="bckimg" />
                <h2>Peciva</h2>
                <p>Tradicionalna, ukusna i jednostavna</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar3} className="bckimg" />
                <h2>Slano</h2>
                <p>Neodoljivi slani zalogaji</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar4} className="bckimg" />
                <h2>Slatko</h2>
                <p>Najslađe od finih peciva</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar5} className="bckimg" />
                <div className="arrow">
                  <img src={arrow2} />
                </div>
                <h2>Burek</h2>
                <p>Sočni okusi tradicije</p>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar6} className="bckimg" />
                <h2>Pizza</h2>
                <p>Svježe, bogate i slasne</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>

              <div className="mlinar__main__card">
                <img src={mlinar8} className="bckimg" />
                <h2>Sendviči</h2>
                <p>Bogati i neodoljivi</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar9} className="bckimg" />
                <h2>Salata</h2>
                <p>Zdrav obrok u žurbi</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar10} className="bckimg" />
                <h2>HoReCa</h2>
                <p>Prednost vašeg poslovanja</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar11} className="bckimg" />
                <h2>Pakirano</h2>
                <p>Dugotrajni i puni okusai</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar12} className="bckimg" />
                <h2>Kolači</h2>
                <p>Bogati okusom</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar13} className="bckimg" />
                <h2>Torte</h2>
                <p>Kraljevski ukusne slastice</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
              <div className="mlinar__main__card">
                <img src={mlinar14} className="bckimg" />
                <h2>Prigoden torte</h2>
                <p>Torte za sve prigode</p>
                <div className="arrow">
                  <img src={arrow2} />
                </div>
              </div>
            </div>
            <hr />
            <div className="mlinar__fotter">
              <div className="mlinar__fotter__left">
                <div>
                  <p>MLINAR</p>
                  <h3>MLINAR pekarska industrija d.o.o</h3>
                  <h3>Radnička cesta 228c</h3>
                  <h3>10000 Zagreb, Hrvatska</h3>
                </div>
                <div>
                  <p>Kontakt</p>
                  <h3>T: +385 1 23 82 300</h3>
                  <h3>F: +385 1 23 82 303</h3>
                  <h3>Email: info@mlinar.eu.com</h3>
                </div>
              </div>
              <div className="mlinar__fotter__right">
                <div className="mlinar__fotter__spans">
                  <h5>Proizvodi </h5>
                  <h5>Lokacije </h5>
                  <h5>Karijere </h5>
                  <h5>Naša priča </h5>
                  <h5>Kontakt</h5>
                </div>
                <div>
                  <img src={googlePlay} />
                  <img src={googlePlay} />
                </div>
                <p>© MLINAR pekarska industrija d.o.o. | Made by: Reroot</p>
              </div>
            </div>
            <hr />
            <div className="mlinar__bar">
              <div className="mlinar__bar__left">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
              <div className="mlinar__bar__right">
                <h5>Sitemap</h5>
                <h5>Dokumenti</h5>
                <h5>Pravila privatnosti</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mlinar;
