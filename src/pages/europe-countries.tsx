import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryType } from "./europe";

const EuropeCountries = () => {
  let { capitalId } = useParams();
  const [country, setCountry] = useState<CountryType>();

  const getCountry = (capitalId: string) => {
    fetch(`https://restcountries.com/v3.1/capital/${capitalId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCountry(data[0]);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (capitalId) {
      getCountry(capitalId);
    }
  }, []);
  return (
    <div className="container">
      aaa
      {country.name.common}
    </div>
  );
};

export default EuropeCountries;
