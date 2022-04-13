import React, {useState} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carVaridator} from "../../validators";

const CarForm = ({setNewCar}) => {
    const {register,reset,handleSubmit,formState:{errors}}=useForm({resolver:joiResolver(carVaridator)});
    // const [formError,setFormError] = useState({});
    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data);
            reset()
        } catch (e) {
            // setFormError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text"{...register('model')}/></label></div>
            {errors.model && <span>{errors.model[0]}</span>}
            <div><label>Price:<input type="text"{...register('price',{valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price[0]}</span>}
            <div><label>Year:<input type="text"{...register('year',{valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export {CarForm} ;