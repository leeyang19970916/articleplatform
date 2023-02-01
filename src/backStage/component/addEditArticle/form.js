// import { Fragment } from "react"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContentAndTitle } from "../../../store/articleSlice"
import { addList, updateList } from "../../../store/listSlice";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
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
const Form = (props) => {
    console.log(props,"注意注意")
    let {edit,article}=props


    const titleInputRef = useRef(null)
    const contentInputRef = useRef(null)
    let dispatch = useDispatch()
    // 這邊有標題和內文 都丟給STORE
    // 然後確認或更新 再推上去 然後全部內容都歸零
    // 放棄全部歸零 
    // 取消 不要儲存 剛剛的更新內容

    useEffect(() => {
        if (!edit) {
            contentInputRef.current.value=article.content
            titleInputRef.current.value=article.title
        }
    }, [edit]);
    const goPath = useHistory();
    let time = nowToday()
    let formalArticle = {
        newTime: "",
        originalTime: time,
        id: Math.random() + "",
        title: "",
        content: "",
        status: "normal",
        edit: false,
    }
    function confirmHandler(e) {
        let contentInputValue=contentInputRef.current.value
        let titleInputValue=titleInputRef.current.value
        e.preventDefault()
        if (!titleInputValue && !contentInputValue) {
            return
        }
        formalArticle = {
            newTime: "",
            originalTime: time,
            id: Math.random() + "",
            title: titleInputValue,
            content: contentInputValue,
            status: "normal",
            edit: false,
        }
        titleInputRef.current.value=""
        contentInputRef.current.value=""
        dispatch(addContentAndTitle(formalArticle))
        dispatch(addList(formalArticle))

    }
    function updateHandler(e) {
        let contentInputValue=contentInputRef.current.value
        let titleInputValue=titleInputRef.current.value
        e.preventDefault()
        if (!titleInputValue && !contentInputValue) {
            return
        }
        formalArticle = {
            ...formalArticle,
            newTime: time,
            title: titleInputValue,
            content: contentInputValue,
            edit: true,
        }
        titleInputRef.current.value=""
        contentInputRef.current.value=""
        dispatch(addContentAndTitle(formalArticle))
        dispatch(updateList(formalArticle))

    }

    function cancelHandler() {
       titleInputRef.current.value=""
       contentInputRef.current.value=""
        goPath.push(`/ArticleList`)

    }

    return (
        <form className="px-5">
            <div className="form-floating mb-3">
                <input type="text"
                    className="form-control"
                    ref={titleInputRef}
           
                    id="floatingInput" placeholder="輸入標題..." />
                <label htmlFor="floatingInput" >標題</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control"
                    ref={contentInputRef}
                    style={{ minHeight: "60vh" }}
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