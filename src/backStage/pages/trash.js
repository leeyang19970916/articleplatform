import Header from "../Common/header"
import List from "../component/list"
import SearchFilter from "../component/searchFilter"
import "../../scss/main.scss"
const Trash=()=>{
    return(<div className="px-3 py-3">
    <Header title="Trash"></Header>
    <div className="mainContent mt-3">
            
            <section className="border "><List status="trash"></List></section>
            <aside className="border"><SearchFilter></SearchFilter></aside>
        </div>
</div>)
}
export default Trash