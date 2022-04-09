import React from 'react';

const UserInfo = ({user,setUserIdPost}) => {
    return (
        <div>
            <div>Name:{user.name}</div>
            <div>UserName:{user.username}</div>
            <div>Email:{user.email}</div>
            <div>Phone:{user.phone}</div>
            <div>Web-site{user.website}</div>
            <input type='button' value="Show posts" onClick={()=>setUserIdPost(user.id)}/>
        </div>
    );
};

export {UserInfo};