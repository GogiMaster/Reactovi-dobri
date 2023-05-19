import { useEffect, useState } from "react";

type songType = {
  artistName: string;
  trackName: string;
  trackId: number;
  trackViewUrl: string;
  artistViewUrl: string;
  artworkUrl30: string;
  trackViewartworkUrl30Url: string;
  artworkUrl100: string;
  collectionViewUrl: string;
  previewUrl: string;
  collectionName: string;
};

const JavaIspit = () => {
  const [song, setSong] = useState<songType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const findSong = (search: string) => {
    fetch(`https://itunes.apple.com/search?term=${search}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.results[0]);
        setSong(data.results);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="java">
        <div>
          <input
            type="text"
            placeholder="Search song"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => findSong(search)}> Find</button>
        </div>
        {/* <table className="java__table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Song Name</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={2} className="loading">
                  Loading...
                </td>
              </tr>
            ) : song ? (
              song.map((song) => {
                return (
                  <tr key={song.trackId}>
                    <td>{song.artistName}</td>
                    <td>{song.trackName}</td>
                    <td>
                      <img src={song.artworkUrl100} />
                    </td>
                    <td>
                      <audio controls>
                        <source src={song.previewUrl} />
                      </audio>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={2}>
                  <p>Ne postoji</p>
                </td>
              </tr>
            )}
          </tbody>
        </table> */}

        <div className="grida">
          {song.map((song) => {
            return (
              <div className="grida__card">
                <img className="grida__pic" src={song.artworkUrl100} />
                <div className="grida__grey">
                  <div>
                    {song.artistName} - {song.trackName}
                  </div>
                  <div>
                    <p>{song.collectionName}</p>
                  </div>
                </div>
                <audio className="grida__sound" controls>
                  <source src={song.previewUrl} />
                </audio>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JavaIspit;
