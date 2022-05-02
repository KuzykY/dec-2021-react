import React from 'react';
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";

import {CarPage, NotFoundPage, SingleCarPage} from "./pages";
import {MainLayout} from "./layouts";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path='cars:/carsId' element={<SingleCarPage/>}/>
                <Route path='cars' element={<CarPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;