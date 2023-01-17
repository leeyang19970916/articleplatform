import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { removeList,recoverList,completeDelete } from "../../../store/listSlice";
const CardList = (props) => {
    const goPath = useHistory();
    const dispatch = useDispatch()
    let normalIsShown = true
    let { title, time, id, status } = props.item
    const editHandler = () => {
        goPath.push(`/EditingArticle/${id}`)
    }
    const trashHandler = (e) => {
        props.item.status = "trash"
        dispatch(removeList(props.item.id))
    }
    const recoverHandler = () => {
        props.item.status = "normal"
        dispatch(recoverList(props.item.id))

    }
    const completeDeleteHandler = () => {
        dispatch(completeDelete(props.item.id))
    }

    if (status === "normal") {
        normalIsShown = true
    } else {
        normalIsShown = false
    }
    return (
        <div className="CardTitle ">
            <div className="CardTitle-title">{title}</div>
            <div className="CardTitle-button ">
                {normalIsShown ? <div className="edit btn btn-warning" onClick={editHandler}>編輯</div>
                    : <div className="edit btn btn-warning" onClick={recoverHandler}>復原</div>}
                {normalIsShown ? <div className="trash  btn btn-danger" onClick={trashHandler}>垃圾桶</div>
                    : <div className="trash  btn btn-danger" onClick={completeDeleteHandler}>完全刪除</div>}
                <div className="date btn btn-info" id={time.timeID}>{time.date}</div>
            </div>
        </div>)
}
export default CardList