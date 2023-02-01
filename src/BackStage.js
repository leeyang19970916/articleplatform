import React from "react";
import Trash from "./backStage/pages/trash";
import ArticleContent from "./backStage/pages/article-content";
import ArticleList from "./backStage/pages/articleList";
import EditingArticle from "./backStage/pages/editingArticle";
import { Switch, Redirect, Route } from "react-router-dom";
import Navbar from "./backStage/Common/navbar";
import "./scss/backStage.scss"
import TagMangement from "./backStage/pages/tagsManage"
function BackStage() {
  return (
    <div className="blockzone">

      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Switch>
          <Route path="/">
            <Redirect to="/ArticleList"></Redirect>
          </Route>
          <Route path="/ArticleList">
            <ArticleList></ArticleList>
          </Route>
          <Route path="/Trash">
            <Trash></Trash>
          </Route>
          <Route path="/ArticleContent">
            <ArticleContent></ArticleContent>
          </Route>
          <Route path="/EditingArticle/:articleId" exact>
            <EditingArticle></EditingArticle>
          </Route>
          <Route path="/TagMangement" exact>
            <TagMangement></TagMangement>
          </Route>


        </Switch>
      </main>
    </div >
  );
}

export default BackStage;
