import React, { useState } from "react";
import PlaylistService from "../services/PlaylistService";
import { useNavigate } from "react-router-dom";

const AddPlaylist = () => {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({
    playlistId: "",
    name: "",
    songs: [],
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setPlaylist({ ...playlist, [e.target.name]: value });
  };

  const savePlaylist = (e) => {
    e.preventDefault();
    PlaylistService.create(playlist)
      .then((data) => {
        console.log(data);
        setPlaylist({
          playlistId: "",
          name: "",
          songs: []
        });
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
       
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b mt-6">
      <div className="px-8 py-8">
        <div
          data-testid="div-heading"
          className="font-thin text-2xl tracking-wider"
        >
          <h1 data-testid="heading-main">Create Playlist</h1>
        </div>
        <div data-testid="div-name">
          <label className="block text-gray-600 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={playlist.name}
            placeholder="Add name of playlist"
            onChange={handleChange}
            className="border h-10 w-96 mt-2 px-2 py-2"
          ></input>
        </div>
        <div
          data-testid="div-button"
          className="items-center justify-center h-14 w-full my-4 pt-4"
        >
          <button
            onClick={savePlaylist}
            className="rounded text-white bg-green-400 w-20 hover:bg-green-800 h-9"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddPlaylist;


// import axios from "axios";
// import React, { useState } from "react";
// // import PlaylistService from "../services/PlaylistService";

// const AddPlaylist = () => {
//   const [playlist, setPlaylist] = useState({
//     playlistId: "",
//     name: "",
//     songs: [],
//   });
//   // const [error, setError]=useState(null);
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setPlaylist({ ...playlist, [e.target.name]: value });
//   };

//   const savePlaylist = (e) => {
//     e.preventDefault();
//     // PlaylistService.savePlaylist(playlist)
//     axios.post("http://localhost:8080/playlist", playlist)
//     .then((response) => {
//       console.log(response.data);
//     }, (error) => {
//       console.log(error);
//     });
//   };

//   return (
//     <div className="flex max-w-2xl mx-auto shadow border-b mt-6">
//       <div className="px-8 py-8">
//         <div
//           data-testid="div-heading"
//           className="font-thin text-2xl tracking-wider"
//         >
//           <h1>Add New Playlist</h1>
//         </div>
//         <div data-testid="div-name">
//           <label className="block text-gray-600 text-sm">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={playlist.name}
//             placeholder="Add name of playlist"
//             onChange={handleChange}
//             className="border h-10 w-96 mt-2 px-2 py-2"
//           ></input>
//         </div>
//         <div
//           data-testid="div-button"
//           className="items-center justify-center h-14 w-full my-4 pt-4"
//         >
//           <button
//             onClick={savePlaylist}
//             className="rounded text-white bg-green-400 w-20 hover:bg-green-800 h-9"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddPlaylist;
