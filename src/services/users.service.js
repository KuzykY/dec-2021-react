import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const usersService={
    getAll:()=>axiosService.get(urls.users)
}