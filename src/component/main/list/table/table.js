import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import ListItem from "./list_item"
import Pages from "./pages"
import "../../../../scss/list/table-border.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
// import { addTag, majTitleHandler, minTitleHandler, removeTag } from "../../../store/articleSlice"

const array = [
    {
        id: "x1ppottruyrj", image: "123", content: "", majTitle: "qqqqq", minTitle: "aaaaaa",
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
        id: "x1po;po;qw", image: "123", content: "", majTitle: "wwwwww", minTitle: "ssssss",
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
        id: "x1bytuiytugfb", image: "123", content: "", majTitle: "eeeeeee", minTitle: "ddddddd",
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
        id: "x1lyti56gwrt", image: "123", content: "", majTitle: "rrrrrrrrr", minTitle: "ffffffffff",
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
        id: "x1qwerqwer", image: "123", content: "", majTitle: "qqqqq", minTitle: "aaaaaa",
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
        id: "x1qwe3rqwerhytjyu", image: "123", content: "", majTitle: "wwwwww", minTitle: "ssssss",
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
        id: "x1bupio;;gfb", image: "123", content: "", majTitle: "eeeeeee", minTitle: "ddddddd",
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
        id: "x1lyopuipuioptgwrt", image: "123", content: "", majTitle: "rrrrrrrrr", minTitle: "ffffffffff",
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
    // state.list
    const listSlice = useSelector(state => state.list)
    console.log(listSlice,"listSlice")
    let listUI = ""
    if (!listSlice) {
        listUI = "無"
    } else {
        listUI = listSlice.map(item => <ListItem key={item.id} item={item}></ListItem>)

    }
    return (
        <Fragment>
            <table className="table table-striped table-hover">
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