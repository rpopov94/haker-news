import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import './style.css';


const Home = () => {
  const news = useTypedSelector(state => state.news)
  const {fetchNews} = useActions();

  const getDate = (secs : number) =>{
      const t = new Date();
      t.setMilliseconds(secs);
      return `${t.getUTCDay()}/${t.getMonth()}/${t.getFullYear()}`
  }

  useEffect(() => {
      fetchNews();
      setInterval(() => fetchNews(), 60000)
  }, [])

  return (
      <Container>
            <div className='wrapper'>
                <ol className="bullet">
                    {news.news.map((news) =>
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