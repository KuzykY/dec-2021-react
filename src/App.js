import React from 'react';
import './App.css'

import Cars from "./components/Cars/Cars";
import CarForm from "./components/CarForm/CarForm";

const App = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;