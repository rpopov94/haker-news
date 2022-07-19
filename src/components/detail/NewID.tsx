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
    return <Container><h1>Идет загрузка...</h1></Container>
  }
  if (error) {
    return <Container><h1>{error}</h1></Container>
  }

  return (
      <Container>
        <a href={new_id.url}>{new_id.title}</a><br/>
        Дата публикации: {new_id.time}<br/>
        Автор: {new_id.by}<br/>
        {/*Cчётчик количества комментариев: {new_id.kids.leng}*/}
      </Container>
  )
};
export default NewID;