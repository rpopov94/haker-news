import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HNavbar from './components/navbar/HNavbar';
import Home from './components/home/Home';
import NewID from './components/detail/NewID';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
    return (
    <div>
      <HNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<Home/>}/>
        <Route path="/news/:id" element={<NewID/>} />
      </Routes>
    </div>
  );
}

export default App;
