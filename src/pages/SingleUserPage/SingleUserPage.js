import React, {useEffect, useState} from 'react';
import {useLocation, useParams,Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import {Loading, UserDetail} from "../../components";

const SingleUserPage = () => {
    const {state}=useLocation();
    const {userId}=useParams();
    const[user,setUser]=useState(state);
    useEffect(()=>{
        if(!state){
            usersService.getById(userId).then(({data})=>setUser(data))
        } else {
            setUser(state)
        }
    },[userId,state])
    return (
        <div>
            <div>{
                user ? <UserDetail user={user}/> : <Loading/>
            }
            </div>
            <Outlet/>
        </div>
    );
};

export  {SingleUserPage}