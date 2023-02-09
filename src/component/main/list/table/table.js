import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import ListItem from "./list_item"
import Pages from "./pages"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
const array = [
    {
        id: "x1", image: "123", mainTitle: "qqqqq", minTitle: "aaaaaa",
        tags: [{
            id: "qwer",
            name: "體重"
        }, {
            id: "eeerrr",
            name: "飲食"
        }],
        category: [{
            id: "tttttgfgf",
            name: "熱門文章"
        }, {
            id: "iktuiktuytryjyy",
            name: "飲食管理"
        }],

        view: 96,
        like: 23,
        share: 31,
        date: "2023/2/6"
    },
    {
        id: "x1qw", image: "123", mainTitle: "wwwwww", minTitle: "ssssss",
        tags: [{
            id: "qwer",
            name: "體重"
        }, {
            id: "eeerrr",
            name: "飲食"
        }],
        category: [{
            id: "tttttgfgf",
            name: "熱門文章"
        }, {
            id: "iktuiktuytryjyy",
            name: "飲食管理"
        }],
        view: 96,
        like: 23,
        share: 31,
        date: "2023/2/6"
    },
    {
        id: "x1bgfb", image: "123", mainTitle: "eeeeeee", minTitle: "ddddddd",
        tags: [{
            id: "qwer",
            name: "體重"
        }, {
            id: "eeerrr",
            name: "飲食"
        }], category: [{
            id: "tttttgfgf",
            name: "熱門文章"
        }, {
            id: "iktuiktuytryjyy",
            name: "飲食管理"
        }],
        view: 96,
        like: 23,
        share: 31,
        date: "2023/2/6"
    },
    {
        id: "x1lytgwrt", image: "123", mainTitle: "rrrrrrrrr", minTitle: "ffffffffff",
        tags: [{
            id: "qwer",
            name: "體重"
        }, {
            id: "eeerrr",
            name: "飲食"
        }], category: [{
            id: "tttttgfgf",
            name: "熱門文章"
        }, {
            id: "iktuiktuytryjyy",
            name: "飲食管理"
        }],
        view: 96,
        like: 23,
        share: 31,
        date: "2023/2/6"
    },
]
const Table = () => {
    // map打listItem渲染出來
    const listUI = array.map(item => <ListItem key={item.id} item={item}></ListItem>)
    return (
        <Fragment>
            <table className="table table-striped">



                <thead>
                    <tr>
                        <th scope="col" style={{ width: "1%" }}></th>
                        <th scope="col" style={{ width: "5%" }}>預覽圖</th>
                        <th scope="col" style={{ width: "20%" }} className="tableTitle">標題</th>
                        <th scope="col" style={{ width: "10%" }}>標籤</th>
                        <th scope="col" style={{ width: "10%" }}>分類</th>
                        <th scope="col" style={{ width: "1%" }}><FontAwesomeIcon icon="fa-regular fa-eye" /></th>
                        <th scope="col" style={{ width: "1%" }}><FontAwesomeIcon icon="fa-regular fa-bookmark" />            </th>
                        <th scope="col" style={{ width: "1%" }}><FontAwesomeIcon icon="fa-solid fa-share-nodes" />  </th>
                        <th scope="col" style={{ width: "1%" }}></th>
                    </tr>

                </thead>
                <tbody>
                    {listUI}

                </tbody>
            </table>
            <Pages></Pages>
        </Fragment>
    )
}
export default Table