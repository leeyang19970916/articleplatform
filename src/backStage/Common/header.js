import "../../scss/header.scss"
const Header=(props)=>{
    const title=props.title
let titleUI=""
if (title==="ArticleList") {
    titleUI="文章列表"
}else if(title==="ArticleContent"){
    titleUI="新增文章"
}else if(title==="editArticleContent"){
    titleUI="編輯文章"
}else if (title==="tagPage") {
    titleUI="標籤管理"
}
else{
    titleUI="垃圾桶"
}



    return (<header className="text-dark">{titleUI}</header>)
}
export default Header