import axios from "axios";
import apiService from "../helpers/apiService";

export default {
    
    getSongs: async () => {
        const response = await apiService.get("songs");
        return response;
    }
}
