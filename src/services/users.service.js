import {axiosService} from "./axios.service";
import {urls} from "../constanta";

const usersService={
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls}/${id}`)
}
export {usersService}