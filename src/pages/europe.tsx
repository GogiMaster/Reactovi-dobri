import { useEffect, useState } from "react";
export type CountryType = {
  name: CountryNameType;
  currencies: CurenciesType;
  capital: string;
  flags: FlagType;
  languages: CountryLanguages;
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
  languages: string;
};

const Europe = () => {
  const [country, setCountry] = useState<CountryType[]>([]);

  const getEurope = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCountry(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getEurope();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Europe</h1>
        <table className="country__table">
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Capital</th>
            <th>Curency</th>
            <th>Languages</th>
          </tr>

          {country.map((country) => {
            return (
              <tr>
                <td>
                  <a href={`/europe/${country.capital[0].toLocaleLowerCase()}`}>
                    {country.name.common}
                  </a>
                </td>
                <td>
                  {" "}
                  <img src={country.flags.png} alt="zastava" />{" "}
                </td>
                <td>{country.capital}</td>
                <td>
                  {Object.keys(country.currencies).map((key) => {
                    return (
                      <div>
                        {country.currencies[key].name}{" "}
                        {country.currencies[key].symbol}
                      </div>
                    );
                  })}
                </td>
                <td>
                  {Object.keys(country.languages).map(
                    (key: string) => country.languages[key]
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Europe;
