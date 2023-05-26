import { useState } from "react";
import { AlbumType, band, BandType, SongType } from "../data/bands";
import close from "../assets/close.svg";
import Songs from "../data/songs";

type AlbumProps = {
  band: AlbumType[];
  onFavorite: (song: SongType) => void;
};

const Albums = ({ band, onFavorite }: AlbumProps) => {
  const [modal, setModal] = useState<boolean>(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <>
          <div className="modal__overlay" onClick={toggleModal}></div>
          <div className="band__album">
            <img
              onClick={toggleModal}
              className="band__album__close"
              src={close}
              alt="X"
            />
            {band.map((album) => {
              return (
                <div key={album.id} className="band__album__card">
                  <img className="cover" src={album.image} alt="album cover" />
                  <h1>{album.name}</h1>
                  <h2>{album.released}</h2>
                  <Songs
                    album={album.songs}
                    onFavorite={(song: SongType) => onFavorite(song)}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Albums;
