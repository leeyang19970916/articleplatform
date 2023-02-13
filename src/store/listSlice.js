import { createSlice } from "@reduxjs/toolkit";
const initList = []
const listSlice = createSlice({
    name: "List",
    initialState: initList,
    reducers: {
        addList(state, action) {
            let item=action.payload
             console.log(item,"itemitemitemitemitemitem")
            state.push(item)
           
        },
        removeList(state, action) {
            console.log(action)
        },
    }
})
export const { addList, removeList } = listSlice.actions

export default listSlice.reducer