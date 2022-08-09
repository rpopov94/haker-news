import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from 'react';
import { NewsItemType } from '../../types/types';
import { useActions } from '../../hooks/useActions';
import {ErrorBoundary} from 'react-error-boundary'
import {Loader} from "../loader/Loader";

const Home = () => {
    const {fetchNews} = useActions();
    const news = useTypedSelector(state => state.news)

    useEffect(() => {
        fetchNews();
        const intervalId = setInterval(() =>{
            fetchNews();
        }, 60000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <Container>
            <ErrorBoundary fallback={<Loader/>}>
                <div className='wrapper'>
                    <ol className="bullet">
                        {news.news.map((news: NewsItemType, id) =>
                            <li key={id}>
                                <Link to={`/news/${news.id}`}>
                                    {news.title}</Link>
                                / Rating: {news.points}
                                / User: {news.user}
                                / Date of publication: {news.time_ago}
                            </li>
                        )}
                    </ol>
                </div>
            </ErrorBoundary>
      </Container>
  );
}

export default Home;