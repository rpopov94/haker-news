import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HNavbar from './components/navbar/HNavbar';
import Home from './components/home/Home';
import HFooter from './components/footer/HFooter';
import New from './components/New/New';


function App() {
  return (
    <div>
      <HNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newest" element={<Home />}/>
        <Route path="/newest/:id" element={<New/>} />
      </Routes>
      <HFooter/>
    </div>
  );
}

export default App;
