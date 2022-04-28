import axios from "axios";
import baseURL from "../constans/ulrs";

const axiosService = axios.create({baseURL});

export {
    axiosService
}