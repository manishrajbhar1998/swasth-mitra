import axios from "axios";
import { API_PATH } from "../constant/config"


const api = axios.create({
    baseURL: API_PATH,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default api;

