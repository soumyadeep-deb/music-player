import axios from 'axios';
import {urls} from "../config/env-config";


const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response && err.response.status === 500) {
            // noinspection JSCheckFunctionSignatures
            window.location.assign("/error");
            console.log(err)

        } else {
            throw err;
        }
    });
};

export default {
    post: async (path, payload) => {
        return promiseWithErrorHandling(axios.post(`${urls.service}/${path}`, payload));
    },
    get: async (path) => {
        return promiseWithErrorHandling(axios.get(`${urls.service}/${path}`));
    },
    delete: async(path,id) => {
        return promiseWithErrorHandling(axios.delete(`${urls.service}/${path}/${id}`))
    },
    deleteSong: async(path1, path2, pid, sid) => {
        return promiseWithErrorHandling(axios.delete(`${urls.service}/${path1}/${pid}/${path2}/${sid}`,{
            data: {foo: "bar"}
        }))
    }
};
