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
      addTagsList(state, action) {
         let item = action.payload
         item = { ...item, active: true }
         state.tags.push(item)
      },
      removeTagList(state, action) {
         let id = action.payload
         let tags=state.tags
         const itemIndex = tags.findIndex(item => item.id === id);
         if (itemIndex === -1) {
            return tags;
         }
         tags[itemIndex]={...tags[itemIndex],active:false}
         return state
      },
      addImage(state, action) {
         let image = action.payload
         state.image = image
      },
      removeImage(state, action) {
         let image = action.payload
         state.image = false

      },
      addContentAndTitle(state, action) {
         let item = action.payload
         state = { ...state, ...item }
      }

   }
})
export const { addContentAndTitle, addTagsList, removeTagList, addImage, removeImage } = articleObjSlice.actions

export default articleObjSlice.reducer