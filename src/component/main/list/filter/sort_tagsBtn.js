import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
const SortTagsBtn = (props) => {
    let {item}=props
    return (<Fragment>
        <button type="button" class="btn btn-primary px-2 py-1 me-2 mb-5">{item.name} <span>x</span></button>
    </Fragment>)
}
export default SortTagsBtn