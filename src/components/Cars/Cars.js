import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar,setCarForUpdate,uptadeCar}) => {
    const [cars,setCars] = useState([]);
    const [deleteById,setDeleteById] = useState(null);
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, []);
    useEffect(()=>{
        if(newCar){
            setCars(prevState => [...prevState,newCar])
        }
    },[newCar]);
    useEffect(()=>{
        if(deleteById){
            setCars(cars.filter(car => car.id!==deleteById))
        }
    },[newCar,deleteById]);
    useEffect(()=>{
        if (uptadeCar){
           const car=setCars.findIndex(car=>car.id===uptadeCar.id);
           Object.assign(car,uptadeCar);
           setCars([...cars])
        }
    },[uptadeCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeleteById={setDeleteById}/>)}
        </div>
    );
};

export {Cars};