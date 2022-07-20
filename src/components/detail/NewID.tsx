import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchNewsById} from "../../store/action-creators/news";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

function NewID (){
  const {error, loading, new_id} = useTypedSelector(state => state.new_id)
  const params = useParams();
  const {fetchNewsById} = useActions()
  useEffect(() => {
    fetchNewsById(params.id);
  }, [])

  if (loading) {
    return(
      <Container>
          <div className='background'>
              <div className="loader"></div>
          </div>
      </Container>
    )
  }
  if (error) {
    return (
    <Container>
        <div className='background'>
            <h1>{error}</h1>
        </div>
    </Container>
    )
  }

  return (
      <Container>
          <div className='background'>
            <a href={new_id.url}>{new_id.title}</a><br/>
            Дата публикации: {new_id.time}<br/>
            Автор: {new_id.by}<br/>
            Счётчик комментариев: {new_id.descendants}
          </div>
      </Container>
  )
}
export default NewID;