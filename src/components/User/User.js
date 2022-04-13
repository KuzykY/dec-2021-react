import React from 'react';

const User = ({user,setUser,setUserIdPost}) => {
    const click = () => {
        setUserIdPost(false);
        setUser(user)
    }
    return (
        <div>
            {user.name}
            < input type='button' value='Show Info' onClick={click}/>
        </div>
    );
};

export {User}