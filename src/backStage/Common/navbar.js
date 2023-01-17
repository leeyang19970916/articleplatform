import {NavLink } from "react-router-dom"
import "../../scss/navbar.scss"

// const navbarList=["新增文章","文章列表","垃圾桶"]


const Navbar=()=>{
    // const navbarListUI=navbarList.map(nav=>{
    //     return (<NavLink className="btn btn-outline-danger" to="/">{nav}</NavLink>)
    // })
    return(<div className="bg-secondary text-white h-100 px-3 pt-5 navLink">
        <NavLink activeClassName="btn-primary" className="btn btn-outline-white text-white w-100" to="/ArticleContent">新增文章</NavLink>
        <NavLink activeClassName="btn-primary" className="btn btn-outline-white text-white w-100" to="/ArticleList">文章列表</NavLink>
        <NavLink activeClassName="btn-primary" className="btn btn-outline-white text-white w-100" to="/TagMangement">標籤管理</NavLink>
        <NavLink activeClassName="btn-primary" className="btn btn-outline-white text-white w-100" to="/Trash">垃圾桶</NavLink>
    </div>)
}
export default Navbar