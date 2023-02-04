import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import Header from "../header";
import Sort from "./sort";
import Table from "./table";
// const className = {

// }
const List = () => {

    return (
        <Fragment>
            <Header></Header>
            <Sort></Sort>
            <Table></Table>
        </Fragment>
    )
}
export default List