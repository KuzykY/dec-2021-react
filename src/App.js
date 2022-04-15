import React from 'react';
import {Route,Routes} from 'react-router-dom'
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'home'} element ={<HomePage/>}/>
                <Route path={'users'} element ={<UsersPage/>}/>
                <Route path={'posts'} element ={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;