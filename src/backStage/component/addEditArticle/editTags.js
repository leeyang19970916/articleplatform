
// import { useState } from "react";
import { useSelector } from "react-redux";
import TagsTick from "./tagsTick"

const EditTags = (props) => {
    const formalTagsList=useSelector(state=>state.tagList)
    console.log(formalTagsList,"formalTagsList")
    const tagsUI = formalTagsList.map(t => {
        return (<TagsTick key={t.id} item={t}></TagsTick>)
    })

    return (
        <div>
            <div className="text-center text-dark py-2 bg-info">標籤!</div>
            <div className="tagsList">
                {/* 要有tag自己的component hover可以叉叉 */}
                {tagsUI}
            </div>
        </div>)
}
export default EditTags