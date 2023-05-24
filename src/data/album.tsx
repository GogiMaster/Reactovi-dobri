import { useState } from "react";
import { AlbumType, band, SongType } from "../data/bands";

const Album = ({ album }: { album: SongType[] }) => {
  return (
    <>
      <div className={`band__album__list`}>
        {album
          ? album.map((song) => {
              return (
                <div>
                  {song.name} <hr />{" "}
                </div>
              );
            })
          : "nema aktivnog albuma"}
      </div>
    </>
  );
};

export default Album;
