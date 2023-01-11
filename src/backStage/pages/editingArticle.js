import { useHistory, useParams } from "react-router-dom"
import Header from "../Common/header";
import EditImage from "../component/addEditArticle/editImage";
import EditTags from "../component/addEditArticle/editTags";
import Form from "../component/addEditArticle/form";
import { useDispatch, useSelector } from "react-redux";
import { addList, updateList } from "../../store/listSlice";
const EditingArticle = () => {
    const params = useParams();

    const goPath = useHistory();
    const id = params.articleId;
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)
    const assignArticle = list.filter(item => (item.id + "") === (id + ""))[0]
    console.log('assignArticle你典編輯的那個obj，完全體 大套的', assignArticle)
    if (!assignArticle.id) {
        return <div>錯誤錯誤 沒有撈到ID</div>
    }
    let a = {
        status: 'normal',
        id: 0.27855210160394317,
        title: '10',
        content: '',
        image: '',
        time:"",
        tagsa:[]
    }
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
        // console.log(assignArticle,"formHandler")
        // let { title, content, time, status, edit } = obj
   
        tempArticleObj = {
            ...tempArticleObj,
            ...obj,
        }
        // console.log(edit, "editttt")
        // if (edit) {
        //     dispatch(addList(tempArticleObj))
        // } else {
        //     dispatch(updateList(tempArticleObj))
        // }
        // console.log(tempArticleObj,"tempArticleObj")
        dispatch(updateList(tempArticleObj))

        // dispatch(singleArticle(tempArticleObj))

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
        <Header title="editArticleContent"></Header>
        <div className="mainContent mt-3">
            <section className="border">
                <Form edit={true} article={assignArticle} form={formHandler}></Form>
            </section>
            <aside className="border">
                <EditTags edit={true} article={assignArticle} tagsArr={tagHandler}></EditTags>
                <EditImage edit={true} article={assignArticle} image={imageHandler}></EditImage>
            </aside>
        </div>

    </div>)
}
export default EditingArticle