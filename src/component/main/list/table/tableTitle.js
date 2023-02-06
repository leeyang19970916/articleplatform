import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
const TableTitle = (props) => {
    let { date, mainTitle, minTitle } = props.item
    return (
        <Fragment>
            <div className="text-dark mainTitle" >{mainTitle}</div>
            <div className="text-dark minTitle">{minTitle}</div>
            <div className="text-secondary date"> {date} </div>
        </Fragment>
    )
}
export default TableTitle