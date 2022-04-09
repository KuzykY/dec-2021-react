import React, {useState} from 'react';

import {Posts, Users,UserInfo} from "./components";


const App = () => {
    const [user,setUser]=useState(null);
    const [userIdPost,setUserIdPost]=useState(null);
    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user} setUserIdPost={setUserIdPost}/>}
            </div>
            {userIdPost && <Posts userId={userIdPost}/>}
        </div>
    );
};

export default App;