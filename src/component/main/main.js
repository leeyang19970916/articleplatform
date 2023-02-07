import React, { Fragment } from "react"
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import List from "./list/list";
import Write from "./write/write";
// const className = {

// }
const Main = () => {

    return (
        <Fragment>
            <Switch>
                <Route path="/home" exact>
                    <Home></Home>
                    {/* 首頁 */}
                </Route>
                <Route path="/articleList" exact>
                    <List></List>
                    {/* 文章列表 */}
                </Route>
                <Route path="/addArticle" exact>
                    <Write></Write>
                    {/* 新增文章 */}
                </Route>
                <Route path="/editArticle/:id" >
                    {/* 編輯文章 加ID */}
                </Route>
                <Route path="/tagManagement" >
                    {/* 標籤管理 */}
                </Route>
                <Route path="/preview/:id" >
                    {/* 文章預覽前台UI */}
                </Route>
                <Route path="*" >
                    {/* 亂打的話導入 */}
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Fragment>
    )
}
export default Main