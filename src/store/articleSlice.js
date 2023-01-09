import { createSlice } from "@reduxjs/toolkit";
const initArticleState={
status:"normal"
}
// {
//     id:"",
//     title:"",
//     content:"",
//     image:"",
//     tags:[]
// }
const articleObjSlice=createSlice({
    name:"articleObj",
    initialState:initArticleState,
    reducers:{
        addArticleHandler(state,action){
            state={...initArticleState
                ,...action.payload}
            // console.log(action)
        }
    }
})
export const {addArticleHandler}=articleObjSlice.actions

export default articleObjSlice.reducer