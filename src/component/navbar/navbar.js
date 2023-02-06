import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import NavbarItem from "./navbarItem"
// const className = {

// }
const Navbar = () => {

    return (
        <nav className="py-2 px-1">
            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2"
                to="/home">首頁</NavLink>
                            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2"
                to="/articleList">文章</NavLink>
                            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2"
                to="/addArticle">新增</NavLink>


        </nav>
    )
}
export default Navbar