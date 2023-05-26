import { useState } from "react";
import Band from "../data/band";
import { band, SongType } from "../data/bands";

export const FavoriteSongs = ["ZA sad prazno"];
const BandList = () => {
  const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>([]);
  const hanleFavorite = (song: SongType) => {
    const isPresent = favoriteSongs.find((item) => item.id === song.id);
    if (isPresent) {
      const newArr = favoriteSongs.filter((item) => item.id !== song.id);
      setFavoriteSongs(newArr);
    } else {
      setFavoriteSongs([...favoriteSongs, song]);
    }
  };
  return (
    <div className="container--dark">
      <div>
        <h1>Favorite songs</h1>
        {favoriteSongs.map((item) => {
          return <div className="favorite">{item.name}</div>;
        })}
      </div>
      <div className="list">
        {band.map((currentBand) => {
          return (
            <Band
              data={currentBand}
              onFavorite={(song: SongType) => hanleFavorite(song)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BandList;
