import {configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feture/todo/todoslice'


export const store = configureStore({
    reducer:{

        todo: todoReducer
     }
})