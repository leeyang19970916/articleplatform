import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment } from "react"
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { resetState, idAndDateBuild } from "../../../store/articleSlice";
import { addList } from "../../../store/listSlice";

const Today = () => {
    // const date = new Date();
    // const id = date.valueOf().toString();
    // console.log(date.toLocaleDateString(),"datedatedate")
    var today = new Date();
    const id = today.valueOf().toString();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    let item = {
        today, id
    }
    return item
}
const WriteSetting = (props) => {
    let dispatch = useDispatch()
    let history = useHistory()
    let article = useSelector(state => state.article)
    // let headerRef=useRef()
    // let [headerHeight,setHeaderHeight]=useState(0)
    //     useEffect(()=>{
    //         let height=headerRef.current.getBoundingClientRect().height
    //         setHeaderHeight(height)
    //         props.height(headerHeight)
    //     }, [headerHeight])
    const saveArticleHandler = () => {
        let item = Today()
        // console.log(item,"item")
        dispatch(idAndDateBuild(item))
        dispatch(addList(article))

        dispatch(resetState())

        history.push("/list");
        // console.log("qqq")
    }
    return (<Fragment>
        <div className="bg-white py-3 px-4 d-flex justify-content-end">
            <button type="button" className="btn btn-primary px-4 mx-3" onClick={saveArticleHandler}>儲存文章</button>
            <button type="button" className="btn btn-outline-primary px-4 mx-3">預覽文章</button>
        </div>
    </Fragment>)
}
export default WriteSetting