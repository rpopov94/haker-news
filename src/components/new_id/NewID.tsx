import { useEffect, useMemo, Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from '../../hooks/useActions';
import { getDate } from "../../utils/utils";
import {CommentsList} from './CommentsList';
import { NewsItemType } from '../../types/types';
import {ErrorBoundary} from 'react-error-boundary'

const NewID = () => {
    const newsItems = useTypedSelector(state => state.news);
    const {getComments} = useActions();
    const comments = useTypedSelector(state => state.comments);
    const {id} = useParams();

    useEffect(() =>{
        getComments(Number(id));
        const instervalId = setInterval(() =>{
           getComments(Number(id)); 
        }, 60000)
        return () => clearInterval(instervalId);
    }, [])

    const newsItem = useMemo(
        () => newsItems.news.find((item: NewsItemType) => item.id === Number(id)),
        [newsItems, id]
    );
    
    return(
        <>
            <Container>
                <div className="col-md-12">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0"><a href={newsItem?.url}>{newsItem?.title}</a></h3>
                        <div className="mb-1 text-muted">Дата публикации: <i>{getDate(Number(newsItem?.time))}</i></div>
                            <div className="card-text mb-auto">
                                <div className="color">
                                    Пользователь: @<i>{newsItem?.user}</i><br/>
                                    Карма: <i>{newsItem?.points}</i><br/>
                                    <i>{newsItem?.comments_count} комментариев</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Коммментарии:</p>
                <ErrorBoundary fallback={<i>Не удалось загрузить комментарии</i>}>
                    <CommentsList comments={comments}/>
                </ErrorBoundary>
            </Container>
        </>
    );
}
export default NewID;