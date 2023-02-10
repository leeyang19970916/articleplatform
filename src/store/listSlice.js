import { createSlice } from "@reduxjs/toolkit";
const initList = []
const listSlice = createSlice({
    name: "List",
    initialState: initList,
    reducers: {
        addList(state, action) {
            let item=action.payload
            state.push(item)
            // console.log(action)
        },
        removeList(state, action) {
            console.log(action)
        },
    }
})
export const { addList, removeList } = listSlice.actions

export default listSlice.reducer