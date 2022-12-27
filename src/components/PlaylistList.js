import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistService from "../services/PlaylistService";
import SongService from "../services/SongService";
import "./PlaylistList.css";

const playlistsEnum = [
  {
    playlistId: 1,
    name: "workout",
    songs: [
      {
        id: 1,
        title: "Tarikh"
      },
      {
        id: 2,
        title: "Tarikh 2"
      },
      {
        id: 3,
        title: "Butter"
      }
    ]
  },
  {
    playlistId: 2,
    name: "workin",
    songs: [
      {
        id: 1,
        title: "AcidWave"
      }
    ]
  },
  {
    playlistId: 3,
    name: "Sun",
    songs: [
      {
        id: 1,
        title: "SunWaves"
      },
      {
        id: 2,
        title: "SunWaves 2"
      },
      {
        id: 3,
        title: "SunWaves 3"
      }
    ]
  },
  {
    playlistId: 4,
    name: "Psy",
    songs: [
      {
        id: 1,
        title: "Gangam-Style"
      }
    ]
  }
];

const songsEnum = [

]

function PlaylistList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState(playlistsEnum);
  const [songs,setSongs] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const responseOne = await PlaylistService.getPlaylists();
  //       // const responseTwo = await SongService.getSongs();
  //       setPlaylists(responseOne.data);
  //       // setSongs(responseTwo.data);
  //       // console.log("playlists",playlists);
  //       // console.log("songs",songs);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const deletePlaylist = (e, id) => {
    e.preventDefault();
    PlaylistService.deletePlaylist(id).then((res) => {
      console.log(res);
      if (playlists) {
        setPlaylists((prevElement) => {
          return prevElement.filter((playlist) => playlist.playlistId !== id);
        });
      }
    });
  };

  const deleteSong = (e, playlistId, songId) => {
    e.preventDefault();
    PlaylistService.deleteSong(playlistId, songId).then((res) => {
      console.log(res);
      if (songs) {
        console.log("songs in delete",songs)
        setSongs((prevElement) => {
          return prevElement.filter((song) => song.songId !== songId);
        });
      }
      window.location.reload();
    });
  };
  return (
    <>
      <div className="heading">
        <button className="general-buttons" onClick={() => navigate("/addPlaylist")}>
          Create playlist
        </button>
      </div>

      <div className="show-playlist">
      <div>
        <h1 className="heading" data-testid="main-heading">List of playlists</h1>
      </div>
      <div className="table">
        <table className="playlist-table" role="table">
          <thead className="playlist-table-head">
            <tr>
              <th className="playlist-table-colheader1" data-testid="name-heading">Name</th>
              <th className="playlist-table-colheader2" data-testid="songs-heading">Songs</th>
              <th className="playlist-table-colheader3" data-testid="actions-heading">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {playlists.map((playlist) => (
                <tr key={playlist.playlistId}>
                  <td className="table-body-playlist-name">{playlist.name}</td>
                  <td>
                    {playlist.songs.map((song) => (
                      <div className="table-body-songs">
                        <div className="table-body-songs-title">{song.title}</div>
                        <a className="general-buttons" onClick={(e, id1, id2) =>{
                        setSongs(playlist.songs)
                        console.log("songsI",playlist.songs)
                        return deleteSong(e, playlist.playlistId, song.songId)
                        
                        }}>D</a>
                      {/* {console.log("songs",songs)} */}
                      {/* <a href="#">Delete song</a> */}
                      </div>
                    ))}
                  </td>
                  {/* {console.log(
                    "print playlist",
                    playlist.playlistId,
                    playlist.songs
                  )} */}
                  <td className="table-body-actions">
                    {/* <a href="#">View songs</a> */}
                    <a className="general-buttons" href="#">Add song</a>
                    {/* <a href="#">Delete song</a> */}
                    <a className="general-buttons"
                      onClick={(e, id) =>
                        deletePlaylist(e, playlist.playlistId)
                      }
                    >
                      Delete playlist
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      </div>
    </>
  );
}
export default PlaylistList;
