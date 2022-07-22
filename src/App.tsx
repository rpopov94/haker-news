import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewID from './components/new_id/NewID';
import React from "react";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Loader} from "semantic-ui-react";

const App = () => {

  const news = useTypedSelector(state => state.news);

  return (
    <div>

      <Routes>
        <Route path="/" element={
            <>
                <Header mode="news"/>
                {news.data  && <Loader/>}
                <Home/>
            </>
        }/>
        <Route path="/news/:id" element={
            <>
                <Header mode="comments"/>
                <NewID/>
            </>

        } />
      </Routes>
    </div>
  );
}

export default App;
