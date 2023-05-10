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
  const [pokemonColor, setPokemonColor] = useState<PokemonColor>();
  const [searchValue, setSearchvalue] = useState<string>("");

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
  const [flag, setFlag] = useState<string>("");

  const getCapital = () => {
    fetch(`https://restcountries.com/v3.1/capital/zagreb`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0].flags.png);
        setFlag(data[0].flags.png);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    pokemonSearch("charmander");
    getBerries();
    getCapital();
  }, []);

  return (
    <>
      <div className="container">
        <h1>All Berries</h1>
        {/* <div>
          {berries.map((berry) => {
            return (
              <div>
                <div>{berry.name}</div>
                <a href={berry.url}>Link to: {berry.name}</a>
              </div>
            );
          })}
        </div> */}

        <img src={flag} />
      </div>
    </>
  );
};

export default Pokemon;
