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
    const list = useSelector(state =>  {
        return state.list})
    const editingArticle = list.filter(item => (item.id + "") === (id + ""))[0]
    console.log('editingArticle你典編輯的那個obj，完全體 大套的', editingArticle)
    if (!editingArticle.id) {
        return <div>錯誤錯誤 沒有撈到ID</div>
    }

    const formHandler = (obj) => {

        goPath.push(`/ArticleList`)
    }
    const tagHandler = (tag) => {
    }
    const imageHandler = (img) => {
    }
    return (<div className="px-3 py-3">
        <Header title="editArticleContent"></Header>
        <div className="mainContent mt-3">
            <section className="border">
                <Form edit={true} article={editingArticle} form={formHandler}></Form>
            </section>
            <aside className="border">
                <EditTags edit={true} article={editingArticle} tagsArr={tagHandler}></EditTags>
                <EditImage edit={true} article={editingArticle} image={imageHandler}></EditImage>
            </aside>
        </div>
    </div>)
}
export default EditingArticle