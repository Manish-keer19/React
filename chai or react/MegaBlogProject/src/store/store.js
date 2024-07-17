import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../store/authslice"

const store = configureStore({
    reducer:{
        auth:authreducer
    }
})

export default store;