import { Fragment } from "react"
import Card from "./Card/card"
import { useSelector } from "react-redux"
// import arr from "./"
const List = () => {
const artList=useSelector(state=>state.list)
console.log(artList,"artList")
    return (<Fragment >
        {!artList.length ? <div className="text-center text-dark">沒有資料</div> 
        :artList.map((item)=><Card key={item.id}  item={item}></Card>)}
    </Fragment>)

}
export default List