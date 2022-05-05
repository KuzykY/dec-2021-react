import axios, {AxiosResponse} from "axios";
import {baseURl} from "../constans";




const axiosService = axios.create({baseURL:baseURl});

export type Res<T>=Promise<AxiosResponse<T>>;

export {
   axiosService
}