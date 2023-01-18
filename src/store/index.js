import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import articleSlice from "./articleSlice";
import tagsSlice from "./tagsSlice";
import listSlice from "./listSlice";




const store=configureStore({
    reducer:{
        // key:Value
        article:articleSlice,
        list:listSlice,
        tagList:tagsSlice
    }
})

export default store