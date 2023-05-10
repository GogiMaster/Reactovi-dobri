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
  //
  const [searchData, setSearchData] = useState<BreweryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries?&per_page=15")
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

  //search
  const handleSearch = (searchValue: string) => {
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${searchValue}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBrewaryByCity("", 0, 0);
    searchBrewary("");
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

      <h1>Search</h1>
     
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSearch(searchValue)}>Search</button>
      </div>
      <div>
        {searchData.length > 0 ? (
          searchData.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>Nisam pronašao niti jednu pivovaru</div>
        )}
      </div>
    </div>
  );
};
export default Brewary;
