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
            let item=action.payload
            state.push(item)
        },
        removeList(state,action){
            let id=action.payload
            state.forEach((e)=>{
                if (e.id===id) {
                    e.status="trash"
                }
            })
        },
        recoverList(state,action){
            let id=action.payload
            state.forEach((e)=>{
                if (e.id===id) {
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
            let id=action.payload
            return state.filter(item => item.id !== id);
        }
    }
})
export const {addList,removeList,recoverList,completeDelete,updateList}=listSlice.actions

export default listSlice.reducer