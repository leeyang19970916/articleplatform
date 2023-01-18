import { Fragment } from "react"
import Card from "./Card/card"
import { useSelector } from "react-redux"
// import arr from "./"
const List = (props) => {
let artList=useSelector(state=>{
    return state.list})
    console.log(artList,"artList")
let {status}=props
let UIList=[]
if (status==="normal") {
     UIList=artList.filter(item=>item.status==="normal")
}else{
    UIList=artList.filter(item=>item.status==="trash")
}
    return (<Fragment >
        {!UIList.length ? <div className="text-center  py-3 text-primary">沒有資料</div> 
        :UIList.map((item)=><Card key={item.id}  item={item}></Card>)}
    </Fragment>)

}
export default List