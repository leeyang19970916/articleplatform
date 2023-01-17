
import { useState } from "react";
import { useSelector } from "react-redux";
import tagsTick from "./tagsTick"
let tagsArr = []

const EditTags = (props) => {
    // const existingList=useSelector(state=>state.list)
    const formalTagsList=useSelector(state=>state.tagList)
    console.log(formalTagsList,"formalTagsList")
    // tagsListArr船上去store
    // let {confirmStatus}=props

    // const tickTag=(id)=>{
    //     setTickTagState(!tickTagState)
    //     tagsArr=tagsArr.filter((e)=>e.id!==id)
    //     // setTagsListArr(tagsArr)   
    // }

    const tagsUI = formalTagsList.map(t => {
        return (<tagsTick key={t.id} item={t}></tagsTick>)
    })

    return (
        <div>
            <div className="text-center text-dark py-2 bg-info">標籤!</div>
            <div className="tagsList">
                {/* 要有tag自己的component hover可以叉叉 */}
                <tagsTick></tagsTick>
                {tagsUI}
            </div>
        </div>)
}
export default EditTags