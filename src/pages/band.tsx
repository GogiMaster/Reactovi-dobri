import { useState } from "react";
import Album from "../data/album";
import { band } from "../data/bands";
import close from '../assets/close.svg'

const Band = () => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

 
  return (
    <div className="container--dark">
      <div className="band">
        <h1>Aerosmith</h1>
        <img
          className="cover"
          onClick={toggleModal}
          src="https://i1.sndcdn.com/avatars-000015409824-2azglo-t500x500.jpg"
          alt="Aerosmith"
        />
        <button className="btn" onClick={toggleModal}>See Albums</button>
        <div>
          {modal ? (
            <>
              
              <div className="modal__overlay" onClick={toggleModal}></div>
              <div className="band__album">
              <img onClick={toggleModal} className="band__album__close" src={close} alt="X" />
                {band.map((album) => {
                  return (
                    <div key={album.id}
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
