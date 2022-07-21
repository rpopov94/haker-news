import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import './style.css';


function Home() {
  const news = useTypedSelector(state => state.news)
  const {fetchNews} = useActions();

  useEffect(() => {
      fetchNews();
  }, [])

  return (
      <Container>
            <div className='wrapper'>
                <ol className="bullet">
                    {news.news.map((news) =>
                        <li><Link to={`/news/${news.id}`}>{news.title}</Link> / Rating: {news.points} / User: {news.user} / Date of publication: {news.time}</li>
                    )}
                </ol>
            </div>
      </Container>
  );
}

export default Home;