import React, {useState} from 'react';

import {CarForm, Cars} from "./components";


const App = () => {
    const [newCar,setNewCar] = useState(null);
    const [uptadeCar,setUptadeCar] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);
    return (
        <div>
          <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUptadeCar={setUptadeCar}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} uptadeCar={uptadeCar}/>
        </div>
    );
};

export default App;