import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import ListItem from "./list_item"
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

        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">預覽圖</th>
                    <th scope="col">標題</th>
                    <th scope="col">標籤</th>
                    <th scope="col">分類</th>
                    <th scope="col">眼睛</th>
                    <th scope="col">收藏</th>
                    <th scope="col">分享</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {listUI}

            </tbody>
        </table>
    )
}
export default Table