
import { useState } from "react";
import { useSelector } from "react-redux";
let tagsArr = []

const EditTags = (props) => {
    // const existingList=useSelector(state=>state.list)
    const formalTagsList=useSelector(state=>state.tagList)
    console.log(formalTagsList,"formalTagsList")
    // tagsListArr船上去store
    // let {confirmStatus}=props
    const [tickTagState, setTickTagState] = useState(false);
    // const [XisShow, setXisShow] = useState(false);
    // const [inputState, setInputState] = useState({ value: "", id: "" });
    // const inputStateHandler = (e) => {
    //     setInputState({
    //         value: e.target.value,
    //         id: Math.random()
    //     })
    // }
    // const tagHandler = () => {
    //     if (!inputState.value) {
    //         return
    //     }
    //     tagsArr.push(inputState)
    //     setTagsListArr(tagsArr)
    //     props.tagsArr(tagsListArr)

    //     setInputState({ value: "", id: "" })

    // }
    const tickTag=(id)=>{
        setTickTagState(!tickTagState)
        tagsArr=tagsArr.filter((e)=>e.id!==id)
        // setTagsListArr(tagsArr)   
    }

    // props.tagsArr(tagsListArr) 
// console.log(existingList,"existingList",tagsListArr,"tagsListArr")

    const tagsUI = formalTagsList.map(t => {
        return (<button key={t.id} 
         className="btn btn-outline-success py-0 mx-1 singleTagBtn"
         style={{ backgroundColor: tickTagState ? 'yellow' : 'white' }}
         > 
        {t.value} <div className="px-2 text-bg-primary"  onClick={()=>{tickTag(t.id)}}>O</div></button>)
    })

    return (
        <div>
            <div className="text-center text-dark py-2 bg-info">標籤!</div>
            {/* <div className="input-group mb-3">
                <input type="text" className="form-control" 
                value={inputState.value} onChange={inputStateHandler}
                placeholder="tag" aria-label="Username" aria-describedby="basic-addon1" />
                <button className="input-group-text" id="basic-addon1" onClick={tagHandler}>+</button>
            </div> */}
            <div className="tagsList">
                {/* 要有tag自己的component hover可以叉叉 */}
                {tagsUI}
            </div>
        </div>)
}
export default EditTags