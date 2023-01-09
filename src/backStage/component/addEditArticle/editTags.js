
import { useState } from "react";
let tagsArr = []

const EditTags = (props) => {
    // tagsListArr船上去store
    // let {confirmStatus}=props
    const [tagsListArr, setTagsListArr] = useState([]);
    // const [XisShow, setXisShow] = useState(false);
    const [inputState, setInputState] = useState({ value: "", id: "" });
    const inputStateHandler = (e) => {
        setInputState({
            value: e.target.value,
            id: Math.random()
        })
    }
    const tagHandler = () => {
        if (!inputState.value) {
            return
        }
        tagsArr.push(inputState)
        setTagsListArr(tagsArr)
        props.tagsArr(tagsListArr)

        setInputState({ value: "", id: "" })

    }
    const canTag=(id)=>{
        tagsArr=tagsArr.filter((e)=>e.id!==id)
        setTagsListArr(tagsArr)   
    }
    props.tagsArr(tagsListArr) 
    const tagsUI = tagsListArr.map(t => {
        return (<button key={t.id} 
         className="btn btn-success py-0 mx-1 singleTagBtn">
                {t.value} <div onClick={()=>{canTag(t.id)}}>X</div></button>)
    })

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={inputState.value} onChange={inputStateHandler} placeholder="tag" aria-label="Username" aria-describedby="basic-addon1" />
                <button className="input-group-text" id="basic-addon1" onClick={tagHandler}>+</button>
            </div>
            <div className="tagsList">
                {/* 要有tag自己的component hover可以叉叉 */}
                {tagsUI}
            </div>
        </div>)
}
export default EditTags