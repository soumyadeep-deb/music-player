import axios from "axios";
import apiService from "../helpers/apiService";

export default {

    create: async (payload) => {
        const response = await apiService.post("playlist", payload);
        return response.data;
    },
    // getPlaylists() {
    //     return axios.get();
    // }
    getPlaylists: async () => {
        const response = await apiService.get("playlists");
        return response;
    },
    deletePlaylist: async(id) => {
        // return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
        const response = await apiService.delete("playlists",id);
        return response;
      },
    deleteSong: async(playlistId, songId)=>{
        const response = await apiService.deleteSong("playlists","songs",playlistId, songId);
        return response;
    },
}
