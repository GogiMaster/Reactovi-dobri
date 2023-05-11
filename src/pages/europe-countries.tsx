import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryType } from "./europe";

const EuropeCountries = () => {
  let { countryId } = useParams();
  const [country, setCountry] = useState<CountryType>();
  const [loading, setLoading] = useState(true);

  const getCountry = (countryId: string) => {
    fetch(`https://restcountries.com/v3.1/name/${countryId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCountry(data[0]);
        setLoading(false)
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (countryId) {
      getCountry(countryId);
    }
  }, []);
  return (
    <div className="container">
    {loading ? (
      "Loading..."
    ) : country ? (
      <div>
        <h1>{country.name.common}</h1>
        <img
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
        />
        <h2>Capital city</h2>
        <div>Capital city of {country.name.common}is {country.capital}</div>
      </div>
    ) : (
      <div>Ne postoji država s glavnim gradom {countryId}</div>
    )}
  </div>
  );
};

export default EuropeCountries;
