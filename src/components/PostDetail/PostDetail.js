import React from 'react';

const PostDetail = ({post}) => {
    const {id,userId,title,body}=post;
    return (
        <div>
            <div>id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export {PostDetail};