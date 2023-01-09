import Header from "../component/header"
import "../../scss/main.scss";
import Form from "../component/addEditArticle/form";
import EditImage from "../component/addEditArticle/editImage";
import EditTags from "../component/addEditArticle/editTags";
// import { useSelector } from "@reduxjs/toolkit";
import { addArticleHandler } from "../../store/articleSlice";
import { useSelector } from "react-redux";
// get state
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addList } from "../../store/listSlice";

// function
// import { useDispatch } from "react-redux";
const ArticleContent = () => {
    const goPath = useHistory();
    // const [isConFirm, setIsConFirm] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state.article)

    // console.log(isConFirm,"isConFirm")
    const tempArticleObj = {
        id: "",
        title: "",
        content: "",
        image: "",
        tags: [],
        time: ""
    }
    // 在這裡彙整包一包 送給store 以上
    const formHandler = (obj) => {
        tempArticleObj.id = obj.id
        tempArticleObj.title = obj.title
        tempArticleObj.content = obj.content
        tempArticleObj.time = obj.time
        dispatch(addArticleHandler(tempArticleObj))
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
        tempArticleObj.image = img
        // console.log(img)
    }
    return (<div className="px-3 py-3">
        <Header title="ArticleContent"></Header>
        <div className="mainContent mt-3">
            <section className="border">
                <Form form={formHandler}></Form>
            </section>
            <aside className="border">
                <EditTags tagsArr={tagHandler}></EditTags>
                <EditImage image={imageHandler}></EditImage>
            </aside>
        </div>

    </div>)
}
export default ArticleContent