import Header from "../component/header"
import List from "../component/list"
import SearchFilter from "../component/searchFilter"
import "../../scss/main.scss"
const ArticleList = () => {
    return (<div className="px-3 py-3">
        <Header title="ArticleList"></Header>
        <div className="mainContent mt-3">
            
            <section className="border "><List></List></section>
            <aside className="border"><SearchFilter></SearchFilter></aside>
        </div>
    </div>)
}
export default ArticleList