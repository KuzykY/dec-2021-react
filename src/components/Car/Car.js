import React from 'react';

const Car = ({car}) => {
    const {id,model,year,price}=car;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <br/>
        </div>
    );
};

export {Car} ;