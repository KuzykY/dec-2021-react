import React, {FC} from 'react';

import {useAppSelector} from "../../hook";


const Cars:FC = () => {
    const {cars}=useAppSelector(state =>state.carReducer)
    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};
