import { useState } from "react";
import { AlbumType, band, SongType } from "../data/bands";



const Album = ({ album }: { album: SongType[] }) => {
   const [modal, setModal] = useState<boolean>(false);
    const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    {modal ? (

      <div className={`band__album__list`}>
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
      <button onClick={toggleModal} className="btn">Show Songs</button>
    </>
  );
};

export default Album;
