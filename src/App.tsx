import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NewID from './components/new_id/NewID';
import { useTypedSelector } from './hooks/useTypedSelector';
import Loader from "./components/loader/Loader";
import { Container } from "react-bootstrap";

const App = () => {

  const news = useTypedSelector(state => state.news)
    
  return (
    <div>

      <Routes>
        <Route path="/" element={
            <>
                <Header mode="news"/>
                {
                  news.error? <Container>"Oops, you catch error!"</Container>:
                  news.loading && <Loader/>
                }
                <Home/>
            </>
        }/>
        <Route path="/news" element={
            <>
                <Header mode="news"/>
                {
                  news.error? <Container>"Oops, you catch error!"</Container>:
                  news.loading && <Loader/>
                }
                <Home/>
            </>
        }/>
        <Route path="/news/:id" element={
            <>
                <Header mode="comments"/>
                {
                  news.error? <Container>"Oops, you catch error!"</Container>:
                  news.loading && <Loader/>
                }
                <NewID/>
            </>

        } />
      </Routes>
    </div>
  );
}

export default App;
