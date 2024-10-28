import axios from "axios";

const REST_API_BASE_URL = '';

export const listMusic = () => {
    return axios.get(REST_API_BASE_URL);
}