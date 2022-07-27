import { useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { fetchNews, getComments } from "../../store/action-creators/manageApi";
import { NewsItemType } from "../../types/types";
import './style.css';

const NewID = () => {
    const news = useTypedSelector(state => state.news);
    const {id} = useParams();
    useEffect(() =>{
        getComments(Number(id));
    })
    const comment = useTypedSelector(state => state.comments);

    const getDate = (secs : number) =>{
        const t = new Date();
        t.setMilliseconds(secs);
        return `${t.getUTCDay() + 1}/${t.getMonth()}/${t.getFullYear()}`
      }
    const newsItem = useMemo(
        () => news.news.find((item: NewsItemType) => item.id === Number(id)),
        [news, id]
    );
    return(
        <>
            <Container>
                <div className="col-md-12">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0"><a href={newsItem?.url}>{newsItem?.title}</a></h3>
                    <div className="mb-1 text-muted">Дата публикации: <i>{getDate(Number(newsItem?.time))}</i></div>
                    <p className="card-text mb-auto">
                        <div className="color">
                            Пользователь: @<i>{newsItem?.user}</i><br/>
                            Карма: <i>{newsItem?.points}</i><br/>
                            <i>{newsItem?.comments_count} комментариев</i>
                        </div>
                    </p>
                    </div>
                </div>
                </div>
            </Container>
        </>
    );
}
export default NewID;