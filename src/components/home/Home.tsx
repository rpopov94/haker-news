import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import './style.css';

function Home() {
  const {error, loading, news} = useTypedSelector(state => state.news)
  const {fetchNews} = useActions()

  useEffect(() => {
      fetchNews()
  }, [])

  if (loading) {
      return(
      <Container>
          <div className="loader"></div>
      </Container>
      )
  }
  if (error) {
      return <Container><h1>{error}</h1></Container>
  }

  return (
      <Container>
            <div className='wrapper'>
                <ol className="bullet">
                    {news.map((news, i) =>
                        <li><Link to={`/news/${news.id}`}>{news.title}</Link> / Rating: {news.points} / User: {news.user} / Date of publication: {news.time_ago}</li>
                    )}
                </ol>
            </div>
      </Container>
  );
}

export default Home;