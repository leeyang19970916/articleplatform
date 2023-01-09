import { createSlice } from "@reduxjs/toolkit";
const initList=[]
// {
//     id:"",
//     title:"",
//     content:"",
//     image:"",
//     tags:[]
// }
const listSlice=createSlice({
    name:"articleList",
    initialState:initList,
    reducers:{
        addList(state,action){
            state.push(action.payload)
        },
        removeList(state,action){
            state.filter((e)=>e.id===action.payload)
            console.log(action,"action",state)
            // state=[...action.payload]
            // console.log(action,"會經過action")
            // state=state.filter((e)=>e.id===action.payload)
            // state=state.filter((item)=>item.id!==action.payload)
            // state=state.filter((item)=>console.log(item,"item"))

        }
    }
})
export const {addList,removeList}=listSlice.actions

export default listSlice.reducer