// import { Fragment } from "react"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addContentAndTitle} from "../../../store/articleSlice"
import { addList,updateList } from "../../../store/listSlice";
import { useHistory } from "react-router-dom";
const nowToday = () => {
    let Today = new Date();
    let month = ""
    let day = ""
    if (Today.getMonth() + 1 < 10) {
        month = "0" + (Today.getMonth() + 1)
    } else {
        month = Today.getMonth() + 1
    }
    if (Today.getDate() < 10) {
        day = "0" + Today.getDate()
    } else {
        day = Today.getDate()
    }
    let date = `${Today.getFullYear()}/${month}/${day}`
    let timeID = (+Today)
    let todayDate = {
        date,
        timeID
    }
    return todayDate
}
const Form = () => {
// console.log(props,"props")
let dispatch=useDispatch()
    const [titleState, setTitleState] = useState("");
    const [contentState, setContentState] = useState("");
    // 這邊有標題和內文 都丟給STORE
    // 然後確認或更新 再推上去 然後全部內容都歸零
    // 放棄全部歸零 
    // 取消 不要儲存 剛剛的更新內容
    const goPath = useHistory();
    let time = nowToday()

    // console.log(props, "article")
    // useEffect(() => {
    //     if (editStatus) {
    //         setTitleState(props.article.title)
    //         setContentState(props.article.content)
    //     }

    // }, [props.article.content,props.article.title])
    let formalArticle={
        newTime:"",
        originalTime:time,
        id: Math.random()+"",
        title:titleState,
        content: contentState,
        status: "normal",
        edit: false,
    }
    function confirmHandler(e) {
        e.preventDefault()
        if (!titleState && !contentState) {
            return
        }
        formalArticle={
            newTime:"",
            originalTime:time,
            id: Math.random()+"",
            title:titleState,
            content: contentState,
            status: "normal",
            edit: false,
        }
        dispatch(addContentAndTitle(formalArticle))
        dispatch(addList(formalArticle))
        
        // props.form({
        //     edit: editStatus,
        //     time,
        //     id: Math.random(),
        //     title: titleState,
        //     content: contentState,
        //     status: "normal"
        // })
        setTitleState("")
        setContentState("")
    }
    function updateHandler(e) {
        e.preventDefault()
        // let {id}=props.article
        if (!titleState && !contentState) {
            return
        }
        formalArticle={
            ...formalArticle,
            newTime:time,
            title:titleState,
            content: contentState,
            edit: true,
        }
        dispatch(addContentAndTitle(formalArticle))
        dispatch(updateList(formalArticle))
        
        // props.form({
        //     edit: editStatus,
        //     title: titleState,
        //     content: contentState,
        //     status: "normal",
        //     time,
        //     id
        // })
        setTitleState("")
        setContentState("")
    }

    function cancelHandler() {
        setTitleState("")
        setContentState("")
        goPath.push(`/ArticleList`)
    }

    return (
        <form className="px-5">
            <div className="form-floating mb-3">
                <input type="text"
                    onChange={(e) => setTitleState(e.target.value)}
                    value={titleState} className="form-control"
                    id="floatingInput" placeholder="輸入標題..." />
                <label htmlFor="floatingInput" >輸入標題</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control"
                    onChange={(e) => setContentState(e.target.value)}
                    value={contentState} style={{ minHeight: "60vh" }}
                    placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">輸入內容</label>
            </div>
            <div className="border w-100 pt-3 d-flex  justify-content-end " >
                <div className="w-50 d-flex">
                    {formalArticle.edit ? <button className="btn btn-warning w-100 mx-1"
                        onClick={updateHandler}>更新</button>
                        : <button className="btn btn-success w-100 mx-1"
                            onClick={confirmHandler}>確認</button>}
                    <button className="btn btn-outline-danger w-100 mx-1"
                        onClick={cancelHandler}>放棄</button>
                </div>
            </div>
        </form>)
}
export default Form