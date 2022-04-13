import React, {useState} from 'react';
import {CarForm, Cars} from "./components";


const App = () => {
    const [newCar,setNewCar] = useState(null);
    return (
        <div>
          <CarForm setNewCar={setNewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
};

export default App;