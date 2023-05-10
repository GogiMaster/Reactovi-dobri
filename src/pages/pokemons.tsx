import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  id: string;
  color: string;
};
type PokemonColor = {
  id: string;
  name: string;
};
const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType>();

  ///
  const pokemonSearch = (pokemonName: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.error(error));
  };
  ////
  type BerryType = {
    name: string;
    url: string;
  };
  const [berries, setBerries] = useState<BerryType[]>([]);

  const getBerries = () => {
    fetch(`https://pokeapi.co/api/v2/berry`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBerries(data.results);
      })
      .catch((err) => console.log(err));
  };
  /////

  type FlagType={
    name:string
    
  }

  const [country, setCountry] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>("");


  const getCapital = (searchValue:string) => {
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]);
        setCountry(data[0].maps.googleMaps);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    pokemonSearch("charmander");
    getBerries();
  }, []);

  return (
    <>
      <div className="container">
        <h1>All Berries</h1>
        <div>
          {berries.map((berry) => {
            return (
              <div>
                <div>{berry.name}</div>
              </div>
            );
          })}
        </div><hr />
          <h1>ZASTAVA</h1>
          <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} />
          <button onClick={()=>getCapital(searchValue)}>Search</button>
          <br /> <br />
       
        <div>
          {/* {country.map((name:FlagType)=>
          {
            return <div>{name.name}</div>
          })} */}
          </div>{country}
          <img src={country} />
          <a href={country}>Link</a>
      </div>
    </>
  );
};

export default Pokemon;
