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
                <div>
                  {song.name} <hr />{" "}
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
