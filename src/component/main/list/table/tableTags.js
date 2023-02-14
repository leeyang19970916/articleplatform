import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"

const TableTags = (props) => {
    let { item, status } = props
    if (!item.length) {
        return
    }
    const addToSort = () => {
        console.log("qqq")
    }
    if (status === "tags") {
        return (
            <div className="d-flex">
                {item.map(e => <div key={e.id} className="btn text-primary px-1 d-table" onClick={addToSort}>#{e.name}</div>)}
            </div>
        )
    } else {
        return (
            <div>
                {item.map(e => <div key={e.id} className="btn  text-primary px-1 d-table"  onClick={addToSort}>{e.name}</div>)}
            </div>
        )

    }

}
export default TableTags