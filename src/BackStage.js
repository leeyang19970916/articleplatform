import React from "react";
import Trash from "./backStage/pages/trash";
import ArticleContent from "./backStage/pages/article-content";
import ArticleList from "./backStage/pages/articleList";
import { Switch, Redirect, Route } from "react-router-dom";
import Navbar from "./backStage/component/navbar";
import "./scss/backStage.scss"
function BackStage() {
  return (
    <div className="blockzone">

      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact>
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
          <Route path="/ArticleContent/:articleId">
            <ArticleContent></ArticleContent>
          </Route>


        </Switch>
      </main>
    </div >
  );
}

export default BackStage;
