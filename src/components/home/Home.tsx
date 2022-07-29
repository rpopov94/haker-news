import './style.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { useEffect } from 'react';
import { NewsItemType } from '../../types/types';
import { useActions } from '../../hooks/useActions';
import { getDate } from '../../utils/utils';

const Home = () => {
    const {fetchNews} = useActions();
    const news = useTypedSelector(state => state.news)
    
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