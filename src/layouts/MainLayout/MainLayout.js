import React from 'react';
import {Outlet, NavLink, useNavigate} from "react-router-dom";

import css from './MainLayots.module.css'
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                {user && <h2>{user}
                    <button onClick={() => logOut(() => navigate('/'))}>Logout</button>
                </h2>}
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};