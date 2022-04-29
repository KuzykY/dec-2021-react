import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car,car:{id,model,price,year}}) => {
    const dispatch = useDispatch();
    const deleteByID = async () => {
      await dispatch(carActions.deleteById({id}))
    };
    const updatebyID = async () => {
      await dispatch(carActions.setCarForUpdate({car}))
    };
    return (
        <div>
            {id}:{model}-{price}-{year};
            <button onClick={()=>deleteByID()}>Delete</button>
            <button onClick={()=>updatebyID()}>Update</button>
        </div>
    );
};

export default Car;