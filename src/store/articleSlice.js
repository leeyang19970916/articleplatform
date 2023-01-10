import { createSlice } from "@reduxjs/toolkit";
const initArticleState = {
    status: "normal",
    id: "",
    title: "",
    content: "",
    image: "",
    tags: [],

}

const articleObjSlice = createSlice({
    name: "articleObj",
    initialState: initArticleState,
    reducers: {
        singleArticle(state, action) {
            console.log(state,"singleArticle")
            state = {
                ...initArticleState
                , ...action.payload
            }
            // console.log(action)
        }
    }
})
export const { singleArticle } = articleObjSlice.actions

export default articleObjSlice.reducer