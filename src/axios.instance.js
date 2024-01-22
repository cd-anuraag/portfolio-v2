import axios from "axios";

let signItBackendAxios = axios.create({
    baseURL: `https://signit-backend.mohdnuman.com/`,
});

export {
    signItBackendAxios,
}

