import { useState } from "react";
import { SongType } from "../data/bands";



const Album = ({ album }: { album: SongType[] }) => {
   const [modal, setModal] = useState<boolean>(false);
    const toggleModal = () => {
    setModal(!modal);
  };
  
  return (
    <>
    {modal ? (

      <div onClick={toggleModal} className={`band__album__list`}>
        {album
          ? album.map((song) => {
              return (
                <div key={song.id
                }>
                  <a className="band__album__link" href={song.link} target="_blank">
                  {song.name} 
                  </a>
                  <hr />{" "}
                </div>
              );
            })
          : "nema aktivnih pjesama"}
      </div>
    ):('')}
    
      <button onClick={toggleModal} className={`btn btn--${modal ? 'hidden':'none'}`}>Show Songs</button>
   
    </>
  );
};

export default Album;
