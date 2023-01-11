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
            // console.log(action,"action")
            // for (const key in state) {
            //     if (state.hasOwnProperty.call(state, key)) {
            //         let element = state[key];
            //         if (element.id===action.payload.id) {
            //             let updateItem= Object.assign({}, action.payload)
            //             element={...updateItem}
            //             console.log("應該只會出現一次",updateItem)
                        
            //         }
            //     }
            // }
            state.forEach((e)=>{
                if (e.id===action.payload.id) {
                    console.log(action.payload,"action的東西 temOBJ同樣")
                    let {title,content,edit,status}=action.payload
                    e.content=content
                    e.title=title
                    e.edit=edit
                    e.status=status
                    // e.time={...time}
                    // e.tags
                    // console.log("到底有沒有經過這裡==",e)
                //    let updateItem= Object.assign({}, action.payload)
                //    console.log(updateItem,"updateItem")
                //    return updateItem
                }
            })
            // const newNavigationState = createNextState(initialState.subjects, draftSubjects) => {
            //     const subject = draftSubjects.find(subject => subject.id === payload.id);
            //     if (subject) {
            //       subject.selected = true;
            //       state.currentSubject = subject.id
            //     }
            //   }
            //   state.subjects = newNavigationState;
        },
        completeDelete(state,action){
            
            return state.filter(item => item.id !== action.payload);
        }
    }
})
export const {addList,removeList,recoverList,completeDelete,updateList}=listSlice.actions

export default listSlice.reducer