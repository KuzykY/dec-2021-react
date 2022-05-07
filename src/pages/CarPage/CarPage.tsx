import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import './CarPage.module.css';
import {CarForm, Cars} from "../../components";
const CarPage: FC = () => {
    return (
        <div className={'wrap'}>
            <CarForm/>
            <hr/>
            <div>
                <Cars/>
                <Outlet/>
            </div>

        </div>
    );
};

export {CarPage};