import React, {useState} from 'react';

import {Posts, Users,UserInfo} from "./components";
import css from './App.module.css'


const App = () => {
    const [user,setUser]=useState(null);
    const [userIdPost,setUserIdPost]=useState(null);
    return (
        <div>
            <div className={css.wrap}>
                <Users setUser={setUser} setUserIdPost={setUserIdPost}/>
                {user && <UserInfo user={user} setUserIdPost={setUserIdPost}/>}
            </div>
            {userIdPost && <Posts userId={userIdPost}/>}
        </div>
    );
};

export default App;