// import { Fragment } from "react"
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
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
const Form = (props) => {

    const [titleState, setTitleState] = useState("");
    const [contentState, setContentState] = useState("");
    const goPath = useHistory();
    let time = nowToday()
    let editStatus = props.edit

console.log(props,"ppapppPROPS")
useEffect(()=>{
    setTitleState(props.article.title)
    setContentState(props.article.content)
},[props.article.content])
        // if (editStatus) {
        //     article = props.article
        //     setTitleState(article.title)
        //     setContentState(article.content)
        // } 
    // }, [article.title,article.content]);
    function confirmHandler(e) {
        e.preventDefault()
        if (!titleState && !contentState) {
            return
        }
        props.form({
            edit:false,
            time,
            id: Math.random(),
            title: titleState,
            content: contentState,
            status: "normal"
        })


        setTitleState("")
        setContentState("")
        // 連同tag和圖片 和id整組包一個丟出去給store
        // useDispatch
    }
    function updateHandler(e) {
        e.preventDefault()
        if (!titleState && !contentState) {
            return
        }
        props.form({
            edit:true,
            time,
            id: Math.random(),
            title: titleState,
            content: contentState,
            status: "normal"
        })
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
                <input type="text" onChange={(e) => setTitleState(e.target.value)}
                    value={titleState} className="form-control"
                    id="floatingInput" placeholder="輸入標題..." />
                <label htmlFor="floatingInput" >輸入標題</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" onChange={(e) => setContentState(e.target.value)}
                    value={contentState} style={{ minHeight: "60vh" }}
                    placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">輸入內容</label>
            </div>
            <div className="border w-100 pt-3 d-flex  justify-content-end " >
                <div className="w-50 d-flex">
                    {editStatus ? <button className="btn btn-warning w-100 mx-1" onClick={updateHandler}>更新</button> 
                    : <button className="btn btn-success w-100 mx-1" onClick={confirmHandler}>確認</button>}
                    <button className="btn btn-outline-danger w-100 mx-1" onClick={cancelHandler}>放棄</button>
                </div>
            </div>
        </form>)
}
export default Form