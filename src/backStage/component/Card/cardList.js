import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { removeList,recoverList,completeDelete } from "../../../store/listSlice";
const CardList = (props) => {
    let item=props.item
    const goPath = useHistory();
    const dispatch = useDispatch()
    let normalIsShow = true
    let { title, originalTime, id, status } = item
    const editHandler = () => {
        goPath.push(`/EditingArticle/${id}`)
    }
    const trashHandler = (e) => {
        // props.item.status = "trash"
        dispatch(removeList(id))
    }
    const recoverHandler = () => {
        // props.item.status = "normal"
        dispatch(recoverList(id))

    }
    const completeDeleteHandler = () => {
        dispatch(completeDelete(id))
    }

    if (status === "normal") {
        normalIsShow = true
    } else {
        normalIsShow = false
    }
    return (
        <div className="CardTitle ">
            <div className="CardTitle-title">{title}</div>
            <div className="CardTitle-button ">
                {normalIsShow ? <div className="edit btn btn-warning" onClick={editHandler}>編輯</div>
                    : <div className="edit btn btn-warning" onClick={recoverHandler}>復原</div>}
                {normalIsShow ? <div className="trash  btn btn-danger" onClick={trashHandler}>垃圾桶</div>
                    : <div className="trash  btn btn-danger" onClick={completeDeleteHandler}>完全刪除</div>}
                <div className="date btn btn-info" id={originalTime.timeID}>{originalTime.date}</div>
            </div>
        </div>)
}
export default CardList