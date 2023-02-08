import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
const TableTitle = (props) => {
    let { date, mainTitle, minTitle } = props.item
    return (
        <Fragment>
            <div className="text-dark mainTitle" >{mainTitle}</div>
            <div className="text-dark minTitle">{minTitle}</div>
            <div className="dropdown table-group  d-flex justify-content-end">
                <div className="text-secondary date  dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> {date} </div>
                <ul className="dropdown-menu date" aria-labelledby="dropdownMenuLink">
                    <li className="text-primary fw-bolder fs-6">文章記錄</li>
                    <li><a className="dropdown-item" href="#">2023/02/05 12:05 -建立文章</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/06 09:30 -提交審核</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/10 14:23 -建立文章</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/12 12:05 -發布文章</a></li>
                </ul>
            </div>
        </Fragment>
    )
}
export default TableTitle