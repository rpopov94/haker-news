import './style.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { useEffect } from 'react';
import { NewsItemType } from '../../types/types';
import { useActions } from '../../hooks/useActions';

const Home = () => {
    const {fetchNews} = useActions();
    const news = useTypedSelector(state => state.news)
    
    const getDate = (secs : number) =>{
      const t = new Date();
      t.setMilliseconds(secs);
      return `${t.getUTCDate()}/${t.getMonth()}/${t.getFullYear()}`
    }
    useEffect(() => {
        fetchNews();
        setInterval(() =>{
            fetchNews();
        }, 60000)
    }, [])

    

    return (
        <Container>
            <div className='wrapper'>
                <ol className="bullet">
                    {news.news.map((news: NewsItemType) =>
                        <li>
                            <Link to={`/news/${news.id}`}>
                            {news.title}</Link>
                            / Rating: {news.points}
                            / User: {news.user}
                            / Date of publication: {getDate(news.time)}
                        </li>
                    )}
                </ol>
            </div>
      </Container>
  );
}

export default Home;