import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import TableTitle from "./tableTitle"
import TableTags from "./tableTags"

const ListItem = (props) => {
    let { item } = props
    console.log(item, "itemeee")
    let { mainTitle, minTitle, date, id, category, like, view, share, tags } = item
    let TITLE = {
        mainTitle, minTitle, date
    }
    // title 
    // min title
    // tags []
    // edit
    // date
    return (
        <tr>
            <th scope="row">
                <div className="form-check d-flex justify-content-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
            </th>
            <td>image</td>
            <td className="tableTitle"><TableTitle item={TITLE} /></td>
            <td>{tags && <TableTags status={"tags"} item={tags}></TableTags>}</td>
            <td>{category && <TableTags status={"category"} item={category}></TableTags>}</td>
            <td>{view}</td>
            <td>{like}</td>
            <td>{share}</td>
            <td>
                <div className="btn-group table-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">預覽頁面</a></li>
                        <li><a className="dropdown-item" href="#">編輯內文</a></li>
                        <li><a className="dropdown-item" href="#">編輯紀錄</a></li>
                        <li><a className="dropdown-item" href="#">刪除文章</a></li>
                        <li><a className="dropdown-item" href="#">下載文章</a></li>

                    </ul>
                </div>
            </td>
        </tr>
    )
}
export default ListItem