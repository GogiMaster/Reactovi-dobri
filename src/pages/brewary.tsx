import { useEffect, useState } from "react";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
  page: number
};

const Brewary = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setdataByCity] = useState<BreweryType[]>([]);
  const [dataSearch, setdataSearch] = useState<BreweryType[]>([]);
  
  const getBreweries = () => {
   
    fetch("https://api.openbrewerydb.org/v1/breweries")
    .then((response) => {
      return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };
  //trazi sa parametrima
  let str:number 
  const getBrewaryByCity = (city: string, broj: number, page: number) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=${broj}&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setdataByCity(jsonData);
        console.log(jsonData);
      })
      .catch((error) => console.error(error));
      return (str=page)
  };

  

  //trazi pivovaru
  const searchBrewary = (ime: string) => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${ime}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setdataSearch(jsonData);
        console.log("search stuff:  " + jsonData);
      })
      .catch((error) => console.error(error));
  };


  //Search input button
  
  

  useEffect(() => {
    getBreweries();
    getBrewaryByCity("san_diego", 5, 7);
    searchBrewary("lnik");
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>By City</h1>
      <div>
        {dataByCity.map((brewary: BreweryType) => {
          return <div key={brewary.id}>{brewary.name}</div>;
        })}
      </div>
      <h2>Page</h2>
      {str}
      <h1>Search</h1>
     
      <div>
        {dataSearch.map((brewary: BreweryType) => {
          return <div key={brewary.id}>{brewary.name}</div>;
        })}
      </div>
    </div>
  );
};
export default Brewary;
