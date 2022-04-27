import React from 'react';

import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch(actionsCat.deleteCat({id: cat.id}))}>Delete</button>
            <button onClick={() => dispatch(actionsCat.setCatForUpdate({cat}))}>Update</button>
        </div>
    );
};

export default Cat;