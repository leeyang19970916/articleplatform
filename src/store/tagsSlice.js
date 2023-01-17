import { createSlice } from "@reduxjs/toolkit";
const initTagArray = []

const tagsArraySlice = createSlice({
    name: "initTagArray",
    initialState: initTagArray,
    reducers: {
        addTag(state, action) {
            let item = action.payload
            state.push(item)
        },
        removeTag(state, action) {
            let id = action.payload
            return state.filter(item => item.id !== id);
        }
    }
})
export const { addTag, removeTag } = tagsArraySlice.actions

export default tagsArraySlice.reducer