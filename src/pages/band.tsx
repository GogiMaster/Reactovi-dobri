import { useState } from "react";
import Album from "../data/album";
import { AlbumType, band } from "../data/bands";

const Band = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [activeAlbum, setActiveAlbum] = useState<AlbumType | null>(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleActiveAlbum = (id: number) => {
    band.forEach((album) => {
      if (album.id === id) {
        setActiveAlbum(album);
      }
    });
  };

  return (
    <div className="container">
      <div className="band">
        <h1>Aerosmith</h1>
        <img
          className="cover"
          onClick={toggleModal}
          src="https://i1.sndcdn.com/avatars-000015409824-2azglo-t500x500.jpg"
          alt="Aerosmith"
        />
        <button onClick={toggleModal}>See Albums</button>
        <div>
          {modal ? (
            <>
              <div className="modal__overlay" onClick={toggleModal}></div>
              <div className="band__album">
                {band.map((album) => {
                  return (
                    <div
                      onClick={() => handleActiveAlbum(album.id)}
                      className="band__album__card"
                    >
                      <img
                        className="cover"
                        src={album.image}
                        alt="album cover"
                      />
                      <h1>{album.name}</h1>
                      <h2>{album.released}</h2>
                      <Album album={album.songs} />
                      
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Band;
