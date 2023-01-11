import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import articleSlice from "./articleSlice";
import listSlice from "./listSlice";




const store=configureStore({
    reducer:{
        // key:Value
        // article:articleSlice,
        list:listSlice
    }
})

export default store