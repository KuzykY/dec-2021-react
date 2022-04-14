import React from 'react';
import {carService} from "../../services";

const Car = ({car,setCarForUpdate,setDeleteById}) => {
    const {id,model,year,price}=car;
    const deleteCar = async () => {
        await carService.delete(id)
        setDeleteById(id)
    }
    return (
        <div>
            <div>Id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <br/>
            <button onClick={()=>deleteCar()}>Delete car</button>
            <button onClick={()=>setCarForUpdate(car)}>Uptade</button>
        </div>
    );
};

export {Car} ;