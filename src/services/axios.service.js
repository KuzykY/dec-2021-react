import axios from "axios";
import baseURL from "../constanta/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
}
