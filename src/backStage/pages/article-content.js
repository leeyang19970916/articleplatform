import Header from "../Common/header"
import "../../scss/main.scss";
import Form from "../component/addEditArticle/form";
import EditImage from "../component/addEditArticle/editImage";
import EditTags from "../component/addEditArticle/editTags";
// import { useSelector } from "@reduxjs/toolkit";
import { singleArticle } from "../../store/articleSlice";
import { useSelector } from "react-redux";
// get state
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addList } from "../../store/listSlice";

const ArticleContent = () => {
    const goPath = useHistory();
    const dispatch = useDispatch();
    let tempArticleObj = {
        status: "",
        id: "",
        title: "",
        content: "",
        image: "",
        tags: [],
        time: ""
    }
    // 在這裡彙整包一包 送給store 以上
    const formHandler = (obj) => {
        let { id, title, content, time, status } = obj
        tempArticleObj = {
            ...tempArticleObj,
            id, title, content, time, status
        }
        // dispatch(singleArticle(tempArticleObj))
        dispatch(addList(tempArticleObj))
        goPath.push(`/ArticleList`)
        // setIsConFirm(true)
        // dispatch.formHandler(obj)

        // console.log(obj,"obj")
    }
    const tagHandler = (tag) => {
        // dispatch.tagsHandler(tag)
        tempArticleObj.tags = [...tag]
        // console.log(tag,"list")
    }
    const imageHandler = (img) => {
        if (!img) {
            return
        }
        // dispatch.imageHandler(img)
        console.log(img,"iamsssss")
        tempArticleObj.image = img
        
    }
    return (<div className="px-3 py-3">
        <Header title="ArticleContent"></Header>
        <div className="mainContent mt-3">
            <section className="border">
                <Form edit={false}  article={""} form={formHandler}></Form>
            </section>
            <aside className="border">
                <EditTags edit={false} tagsArr={tagHandler}></EditTags>
                <EditImage edit={false} image={imageHandler}></EditImage>
            </aside>
        </div>

    </div>)
}
export default ArticleContent