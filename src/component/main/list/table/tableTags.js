import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"

const TableTags = (props) => {
    let { item, status } = props
    let showTag = true
    if (!item) {
        return
    }

    const red = () => {
        console.log("qqqqq")
    }




    if (status === "tags") {
        return (
            <div className="d-flex">
                {item.map(e => <div className="btn text-primary px-1" onClick={red}>#{e}</div>)}
            </div>
        )
    } else {
        return (
            <div className="d-block">
                {item.map(e => <div className=" text-primary px-1" onClick={red}>{e}</div>)}
            </div>
        )

    }

}
export default TableTags