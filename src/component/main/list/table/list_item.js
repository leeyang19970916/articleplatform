import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import TableTitle from "./tableTitle"
import TableTags from "./tableTags"
const ListItem = (props) => {
    let { item } = props
    console.log(item, "itemeee")
    let {mainTitle,minTitle,date,id,category,like,view,share,tags}=item
    let TITLE={
        mainTitle,minTitle,date
    }
    // title 
    // min title
    // tags []
    // edit
    // date
    return (
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                </div>
            </th>
            <td>image</td>
            <td><TableTitle item={TITLE}/></td>
            <td>{tags&&<TableTags status={"tags"} item={tags}></TableTags>}</td>
            <td>{category&&<TableTags status={"category"} item={category}></TableTags>}</td>
            <td>{view}</td>
            <td>{like}</td>
            <td>{share}</td>
            <td>...</td>
        </tr>
    )
}
export default ListItem