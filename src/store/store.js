import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import listSlice from "./listSlice";
import articleSlice from "./articleSlice";
const store=configureStore({
    reducer:{
        // key:Value
        list:listSlice,
        article:articleSlice
    }
})

export default store