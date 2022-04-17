import React from 'react';
import {Button} from "../Button/Button";

const UserDetail = ({user}) => {
    const {id,username,email,address,phone,website,company}=user
    return (
        <div>
            <div>Id:{id}</div>
            <div>Username:{username}</div>
            <div>Email:{email}</div>
            <div>Adress:{address.city}</div>
            <div>Phone:{phone}</div>
            <div>WebSite:{website}</div>
            <div>Company:{company.name}</div>
            <Button to={'posts'}>Show posts</Button>
        </div>
    );
};

export  {UserDetail};