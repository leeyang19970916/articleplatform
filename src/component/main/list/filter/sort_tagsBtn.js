import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
const SortTagsBtn = (props) => {
    let {item}=props
    return (<Fragment>
        <button type="button" class="btn btn-primary px-2 py-1 me-3 mb-1 tag-btn">{item.name} <a href="#" className="text-secondary">x</a></button>
    </Fragment>)
}
export default SortTagsBtn