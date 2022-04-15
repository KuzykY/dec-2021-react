import React from 'react';
import css from './Button.module.css'
import {Link} from "react-router-dom";

const Button = ({children,to,state}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button}>{children}</button>
        </Link>

    );
};

export {Button};