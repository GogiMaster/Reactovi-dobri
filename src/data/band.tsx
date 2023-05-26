import { useState } from "react";
import { BandType, SongType } from "./bands";
import Albums from "./albums";

type BandProps = {
  data: BandType;
  onFavorite: (song: SongType) => void;
};

const Band = ({ data, onFavorite }: BandProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="band">
        <h1>{data.name}</h1>
        <img
          className="cover"
          onClick={toggleModal}
          src={data.cover}
          alt="Aerosmith"
        />
        <button className="btn" onClick={toggleModal}>
          See Albums
        </button>
        <div>
          {modal ? (
            <>
              <Albums
                band={data.albums}
                onFavorite={(song: SongType) => onFavorite(song)}
              />
            </>
          ) : (
            "False"
          )}
        </div>
      </div>
    </>
  );
};

export default Band;
