import React from 'react';

import './App.css'
import CatsForm from "./components/CatsForm/CatsForm";
import DogsForm from "./components/DogsForm/DogsForm";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

const App = () => {
    return (
        <div>
            <div className={'flex'}>
                <CatsForm/>
                <DogsForm/>
            </div>
            <hr/>
            <div className={'flex'}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;