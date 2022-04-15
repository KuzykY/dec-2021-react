
import {useLocation, useParams} from "react-router-dom";

import {PostDetail} from "../../components";
import {useEffect, useState} from "react";
import {postsService} from "../../services";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const[post,setPost]=useState(state);
    useEffect(()=>{
        if(!state){
            postsService.getById(id).then(({data})=>setPost(post));
        } else {
            setPost(state)
        }
    },[id,state])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {SinglePostPage};