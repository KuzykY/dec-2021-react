import {combineReducers, configureStore} from "@reduxjs/toolkit";

import catsReducer from "./slice/cat.slice";
import dogsReducer from "./slice/dog.slice";

const rootReducer=combineReducers({
    cats:catsReducer,
    dogs:dogsReducer,
});

export const store=configureStore({
    reducer:rootReducer
})