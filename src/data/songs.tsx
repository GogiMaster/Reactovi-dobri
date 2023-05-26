import { useState } from "react";
import { SongType } from "./bands";
import star from "../assets/star.svg";
import { FavoriteSongs } from "../pages/band-list";

type SongProps = {
  album: SongType[];
  onFavorite: (song: SongType) => void;
};

const Songs = ({ album, onFavorite }: SongProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //Favorite button
  const [favorite, setFavorite] = useState<boolean>(false);
  const toggleFavorite = (id: number) => {
    setFavorite(true);
    if (favorite === true) {
      return FavoriteSongs.push();
    }
  };

  return (
    <>
      {modal ? (
        <div className={`band__album__list`}>
          {album
            ? album.map((song) => {
                return (
                  <div key={song.id}>
                    <div className="parent">
                      <a
                        className="band__album__link"
                        href={song.link}
                        target="_blank"
                      >
                        {song.name}
                      </a>
                      <div className="absolute">
                        <img src={star} onClick={() => onFavorite(song)} />
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })
            : "nema aktivnih pjesama"}
          <button onClick={toggleModal}>close</button>
        </div>
      ) : (
        ""
      )}

      <button
        onClick={toggleModal}
        className={`btn btn--${modal ? "hidden" : "none"}`}
      >
        Show Songs
      </button>
    </>
  );
};

export default Songs;
