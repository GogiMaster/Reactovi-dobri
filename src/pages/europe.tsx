import { useEffect, useState } from "react";
import icon from "../assets/Images/person-icon.svg";
import rightSide from "../assets/Images/right-side.svg";
import leftSide from "../assets/Images/left-side.svg";
import arm from "../assets/Images/arm.svg";
export type CountryType = {
  name: CountryNameType;
  currencies: CurenciesType;
  capital: string;
  flags: FlagType;
  languages: CountryLanguages;
  area: number;
  maps: CountryMaps;
  population: number;
  borders: string;
  car: CountryCars;
};

type CurenciesType = {
  [currencies: string]: {
    name: string;
    symbol: string;
  };
};
type FlagType = {
  png: string;
};

type CountryNameType = {
  common: string;
};
type CountryLanguages = {
  [languages: string]: string;
};
type CountryMaps = {
  googleMaps: string;
};
type CountryCars = {
  side: string;
  [signs: string]: string;
};

const Europe = () => {
  const [country, setCountry] = useState<CountryType[] | null>(null);
  const [searchValue, setSearchValue] = useState<string>("...");

  const getEurope = (searchValue: string) => {
    fetch(`https://restcountries.com/v3.1/region/${searchValue}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCountry(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="container">
        <h1>Search Continent of: {searchValue}</h1>
        <input
          placeholder="Search Continent"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => getEurope(searchValue)}>Search</button>
        <table className="country__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Flag</th>
              <th>Map</th>
              <th>Capital</th>
              <th>Curency</th>
              <th>Languages</th>
              <th>Population</th>
              <th>Cars</th>
              <th>Borders</th>
            </tr>
          </thead>
          <tbody>
            {country ? (
              country.map((country) => {
                return (
                  <tr key={country.area}>
                    <td>
                      <a
                        href={`/europe/${country.name.common.toLocaleLowerCase()}`}
                      >
                        {country.name.common}
                      </a>
                    </td>
                    <td>
                      <img src={country.flags.png} alt="zastava" />
                    </td>
                    <td>
                      
                      <a href={country.maps.googleMaps}>Google Maps</a>
                    </td>
                    <td>{country.capital}</td>
                    <td>
                      {Object.keys(country.currencies).map((key) => {
                        return (
                          <div key={key}>
                            {country.currencies[key].name}{" "}
                            {country.currencies[key].symbol}
                          </div>
                        );
                      })}
                    </td>
                    <td>
                      {Object.keys(country.languages).map((key: string) => {
                        return <div key={key}>{country.languages[key]}</div>;
                      })}
                    </td>
                    <td>
                      <div>
                        <img src={icon} alt="Ikona" />
                        {country.population}
                      </div>
                    </td>
                    <td>
                      <div>
                        {country.car.side === "right" ? (
                          <img src={rightSide} />
                        ) : (
                          <img src={leftSide} />
                        )}
                        {country.car.side}
                        {"/"}
                        {country.car.signs}
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>{country.borders + ", "}</div>;
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={9}>
                  <p>Ne postoji</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="vinl">
          <div className="vinl__arm">
            <img src={arm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Europe;
