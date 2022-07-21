import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewID from './components/new_id/NewID';
import React from "react";
import {CommentsItemType, NewsItemType} from "./types/news_types";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Loader} from "semantic-ui-react";
import {fetchNews} from "./store/action-creators/news";
import {getComments} from "./store/action-creators/commentsList";
import {useDispatch} from "react-redux";

export interface AppContext {
    news?: Array<NewsItemType>;
    comments?: Array<CommentsItemType> | object;
}

const App: React.FC<AppContext> = () => {
  const dispatch = useTypedSelector(state => state.news);
  const news = useTypedSelector(state => state.news);

  const updateData = (mode: string, id?: number | undefined) => {
      if (mode == 'news') {
          fetchNews();
      }

      if (mode == 'comments' && id) {
          getComments(id);
      }
  };

  return (
    <div>

      <Routes>
        <Route path="/" element={
            <>
                <Header mode="news" updateData={updateData}/>
                {news.loading && <Loader/>}
                {news.error && "Ooops, you catch errror!"}
                <Home/>
            </>
        }/>
        <Route path="/news/:id" element={
            <>
                <Header mode="comments" updateData={updateData}/>
                {news.loading && <Loader/>}
                <NewID/>
            </>

        } />
      </Routes>
    </div>
  );
}

export default App;
