import { createSlice } from "@reduxjs/toolkit";
import cloneDeep from 'lodash.clonedeep'
// tags:[
//     {id:"",name:""}
// ],

const article = {
    majTitle: "",
    minTitle: "",
    tags: [],
    id: "",
    content: "",
    date: "",
    category: [],
    image: "",
    like: 15,
    share: 52,
    view: 86

}
const articleSlice = createSlice({
    name: "List",
    initialState: article,
    reducers: {
        changeImage(state, action) {
            console.log(action)
        },
        addTag(state, action) {
            let item = action.payload
            state.tags.push(item)
            // console.log(action,"fuck")
        },
        removeTag(state, action) {
            let id = action.payload
            let newArray = state.tags.filter(item => item.id !== id)
            state.tags = [...newArray]
            console.log(action)
            return state.tags
        },
        majTitleHandler(state, action) {
            let value = action.payload
            state.majTitle = value
            console.log(action)
            return state
        },
        minTitleHandler(state, action) {
            let value = action.payload
            state.minTitle = value
            console.log(action)
            return state
        },
        contentHandler(state, action) {
            let value = action.payload
            state.content = value
            // 這是連原始碼一起帶過來的
            return state
        },
        idAndDateBuild(state, action) {

            let item = action.payload
            state.date = item.today
            state.id = item.id
            console.log(JSON.parse(JSON.stringify(state)),"JSON");
            return state

        },
        resetState(state, action) {
            state = JSON.parse(JSON.stringify(article))
            return state
        }
    }
})
export const { idAndDateBuild, resetState, changeImage, addTag, removeTag, majTitleHandler, minTitleHandler, contentHandler } = articleSlice.actions

export default articleSlice.reducer