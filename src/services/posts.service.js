import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const postsService={
    getPostById:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)
}