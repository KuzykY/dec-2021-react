import React from 'react';
import {Route,Routes} from 'react-router-dom'
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";
import LoginPage from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'home'} element ={<HomePage/>}/>
                <Route path={'users'} element ={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':userId'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                        </Route>
                </Route>
                <Route path={'posts'} element ={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                    </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;