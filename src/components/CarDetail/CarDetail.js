import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {carActions} from "../../redux";

const CarDetail = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}));
        navigate('/cars');
    };
    const updateById = async () => {
        await dispatch(carActions.setCarForUpdate({car}))
    }
    return (
        <div>
            <p>ID:{id}</p>
            <p>Model:{model}</p>
            <p>Price:{price}</p>
            <p>Year:{year}</p>
            <button onClick={() => { deleteById()}}>Delete</button>
            <button onClick={()=>{updateById()}}>Update</button>
        </div>
    );
};

export {CarDetail};