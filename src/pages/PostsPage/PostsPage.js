import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";
import css from './PostPage.module.css'

const PostsPage = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        postsService.getAll().then(({data})=>setPosts(data))
    },[])
    return (
        <div className={css.wrap}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};