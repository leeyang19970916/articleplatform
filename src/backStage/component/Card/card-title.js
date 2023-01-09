import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { removeList } from "../../../store/listSlice";
const CardTitle = (props) => {
console.log(props,"paaa")
    const goPath = useHistory();
    const dispatch = useDispatch()
    let { title, time, id } = props
    const editHandler = () => {
        goPath.push(`/ArticleContent/${id}`)
    }
    const trashHandler = () => {
        // list=list.filter((item)=>item.id!==id)
        // console.log(list,"list")
        dispatch(removeList(id))
        console.log("刪除")
        // dispatch(removeList(id))
    }
    return (
        <div className="CardTitle ">
            <div className="CardTitle-title">{title}</div>
            <div className="CardTitle-button ">
                <div className="edit btn btn-warning" onClick={editHandler}>編輯</div>
                <div className="trash  btn btn-danger" onClick={trashHandler}>垃圾桶</div>
                <div className="date btn btn-info" id={time.timeID}>{time.date}</div>
            </div>
        </div>)
}
export default CardTitle