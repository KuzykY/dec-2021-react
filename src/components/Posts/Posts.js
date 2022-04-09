import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts,setPosts]=useState(null);
    useEffect(()=>{
        postsService.getPostById(userId).then(({data})=>setPosts(data))
    },[])
    return (
        <div>
            {posts && posts.map((post)=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};