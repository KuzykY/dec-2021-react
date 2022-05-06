import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux/slices";


const CarForm:FC = () => {
    const {register, handleSubmit, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();
     const submit:SubmitHandler<ICar> = (car) => {
       dispatch(carActions.create({car}))
         reset()
     }
    return (
        <form onSubmit={handleSubmit(submit)}>
           <input type='text' placeholder={'Model'} {...register('model')}/>
           <input type='text' placeholder={'Price'} {...register('price')}/>
           <input type='text' placeholder={'Year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};