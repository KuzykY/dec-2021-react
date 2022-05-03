import React from 'react';
import {Outlet} from "react-router-dom";

import CarForm from "../../components/CarForm/CarForm";
const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};