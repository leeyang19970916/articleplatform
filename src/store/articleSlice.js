import { createSlice } from "@reduxjs/toolkit";
import { removeTag } from "./tagsSlice";
const initArticleState = {
    status: "normal",
    id: "",
    title: "",
    content: "",
    image: null,
    tags: [],

}

const articleObjSlice = createSlice({
    name: "articleObj",
    initialState: initArticleState,
    reducers: {
     addTagsList(state,action){
        let item=action.payload
        state.tags.push(item)
        // console.log(item,"item",state.tags)
return
        

     },
     removeTagList(state,action){
        let id=action.payload
        console.log(id,"idddd")
        return state.tags.filter(item => item.id !== id); 

        return
     },
     addImage(state,action){
        let image=action.payload
        state.image=image
     },
     removeImage(state,action){
        let image=action.payload
        state.image=false

     },
     addContentAndTitle(state,action){
        let item=action.payload
        state={...state, ...item}
     }

    }
})
export const { addContentAndTitle,addTagsList,removeTagList,addImage,removeImage } = articleObjSlice.actions

export default articleObjSlice.reducer