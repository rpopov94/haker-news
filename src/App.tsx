import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewID from './components/new_id/NewID';
import React from "react";
import {useDispatch} from "react-redux";
import {getComments} from "./store/action-creators/manageApi";
import { useActions } from './hooks/useActions';

const App = () => {

  const {getComments} = useActions();

  const updateData = (id: number) => {
      getComments(id);
  };

  return (
    <div>

      <Routes>
        <Route path="/" element={
            <>
                <Header mode="news"/>
                <Home/>
            </>
        }/>
        <Route path="/news/:id" element={
            <>
                <Header mode="comments"/>
                <NewID updateData={updateData}/>
            </>

        } />
      </Routes>
    </div>
  );
}

export default App;
