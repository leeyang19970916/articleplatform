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
            // let newItem=action.payload
            // const existingItem=state.find(item=>item.id===newItem.id)
            // console.log(existingItem,"eeexxxist")
            state.forEach((e)=>{
                if (e.id===action.payload.id) {
                    console.log("一個")
                    let {title,content,edit,status}=action.payload
                    e.content=content
                    e.title=title
                    e.edit=edit
                    e.status=status
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