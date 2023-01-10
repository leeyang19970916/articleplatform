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
            state.forEach((e)=>{
                if (e.id===action.payload) {
                    e.status="trash"
                }
            })
        },
        recoverList(state,action){
            state.forEach((e)=>{
                if (e.id===action.payload) {
                    e.status="normal"
                }
            })
        },
        updateList(state,action){
            state.forEach((e)=>{
                if (e.id===action.payload.id) {
                    e={...action.payload}
                }
            })
        },
        completeDelete(state,action){
            
            return state.filter(item => item.id !== action.payload);
        }
    }
})
export const {addList,removeList,recoverList,completeDelete,updateList}=listSlice.actions

export default listSlice.reducer