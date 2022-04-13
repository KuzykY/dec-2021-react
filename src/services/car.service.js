import {axiosService} from "./axios.service";
import {ulrs} from "../constans";

const carService={
    getAll:()=>axiosService.get(ulrs.cars),
    getById:(id)=>axiosService.get(`${ulrs.cars}/${id}`),
    create:(car)=>axiosService.post(ulrs.cars,car),
    updateById:(id,newCar)=>axiosService.put(`${ulrs.cars}/${id}`),
    delete:(id)=>axiosService.delete(`${ulrs.cars}/${id}`)
}
export {carService}