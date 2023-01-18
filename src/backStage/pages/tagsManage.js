// import { Fragment } from "react"
import { useState } from "react";
import Header from "../Common/header"
import { useDispatch, useSelector, } from "react-redux";
import { addTag } from "../../store/tagsSlice";
import { removeTag } from "../../store/tagsSlice";
const initInput = {
    id: "",
    value: "",
    active:false
}
const Tag = () => {
    let dispatch = useDispatch()
    let storeTagsList = useSelector(state => state.tagList)
    const [tagInput, setTagInput] = useState(initInput);
    const inputStateHandler = (e) => {
        let value = e.target.value.trim()
        setTagInput({
            id: Math.random() + "",
            value: value,
            active:false
        })
    }
    const tagHandler = () => {
        if (!tagInput.value) {
            return
        }
        const index = storeTagsList.findIndex(item => item.value === tagInput.value)
        if (index >= 0) {
            return
        }
        dispatch(addTag(tagInput))
        setTagInput(initInput)
    }
    const remove = (id) => {
        dispatch(removeTag(id))
    }
    let tagsUI = ""
    if (storeTagsList.length > 0) {
        tagsUI = storeTagsList.map(t => {

            return (<button key={t.id}
                className="btn btn-info py-0 mx-1 singleTagBtn">
                {t.value}
                <div className="px-2 text-bg-primary" onClick={() => { remove(t.id) }}>X</div></button>)
        })
    } else {
        tagsUI = "沒東西<3"
    }



    return (<div className="px-3 py-3">
        <Header title="tagPage"></Header>
        <div className="input-group mb-3">
            <input type="text" className="form-control"
                value={tagInput.value} onChange={inputStateHandler}
                placeholder="tag" aria-label="Username" aria-describedby="basic-addon1" />
            <button className="input-group-text" id="basic-addon1" onClick={tagHandler}>+</button>
        </div>
        <div className="tagsList">
            {tagsUI}
        </div>
    </div>)
}
export default Tag