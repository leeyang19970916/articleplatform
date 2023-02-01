import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTagsList, removeTagList } from "../../../store/articleSlice"

// 文章列表裡面的標籤列表
const TagsTick = (props) => {
    let dispatch = useDispatch()

    const [tickIsShow, setTickIsShow] = useState(false);

    let { id, value} = props.item
    console.log(props.item, "propsssssitem")
    // const formalTagsList=useSelector(state=>state.tagList)
    const activeTagHandler = () => {
        if (tickIsShow === true) {
            return
        }
        // console.log("吳乃ˋ")
        // props.item.active=!props.item.active
        dispatch(addTagsList(props.item))
        setTickIsShow(true)
        return


    }
    const removeTagHandler = () => {
        if (tickIsShow === false) {
            return
        }
        dispatch(removeTagList(id))
        setTickIsShow(false)
        return
    }
    return (
        <Fragment>
            {!tickIsShow ?
                <button id={id} onClick={activeTagHandler}
                    className="btn btn-outline-success py-0 mx-1 singleTagBtn"> {value}
                </button>
                : <button id={id} onClick={removeTagHandler}
                    className="btn btn-success py-0 mx-1 singleTagBtn"> {value}
                </button>}
        </Fragment>
    )
}
export default TagsTick