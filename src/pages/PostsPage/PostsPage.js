import React, { useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postsService} from "../../services";
import {Post} from "../../components";
import css from './PostPage.module.css'


const PostsPage = () => {
    const [posts,setPosts]=useState([])
    const{userId}=useParams()
    useEffect(()=>{
        if (userId) {
            postsService.getByUserId(userId).then(({ data }) => setPosts(data))
        } else {
            postsService.getAll().then(({ data }) => setPosts(data))
        }
    }, [userId])
    return (
        <div className={css.wrap}>
            <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};