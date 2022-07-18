import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Home() {
  const {error, loading, news} = useTypedSelector(state => state.news)
  const {fetchNews} = useActions()

  useEffect(() => {
      fetchNews()
  }, [])

  if (loading) {
      return <h1>Идет загрузка...</h1>
  }
  if (error) {
      return <h1>{error}</h1>
  }

  return (
      <Container>
          {news.map(news =>
              <div key={news.id}>{news.id} - {news.title}</div>
          )}
      </Container>
  );
}

export default Home;