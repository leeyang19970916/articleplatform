import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import NavbarItem from "./navbarItem"
// const className = {

// }
const Navbar = () => {

    return (
        <nav className="py-3 px-2">
            <NavLink activeClassName="btn-success text-white" 
            className="btn btn-outline-white text-dark w-100 mb-1" 
            to="/addArticle">新增文章</NavLink>
                        <NavLink activeClassName="btn-success text-white" 
            className="btn btn-outline-white text-dark w-100 mb-1" 
            to="/articleList">文章列表</NavLink>
        </nav>
    )
}
export default Navbar