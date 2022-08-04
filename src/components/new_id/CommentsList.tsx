import { FC } from "react"
import { CommentsItemType } from "../../types/types"
import { getDate } from "../../utils/utils";
import {Card} from "react-bootstrap";

export interface CommentsProps {
    comments: CommentsItemType | Array<CommentsItemType>;
  }

export const CommentsList: FC<CommentsProps> = ({comments}) =>{
    const arrayOfComments = (Array.isArray(comments) && comments) || comments.comments;
    return(
        <>
        {arrayOfComments?.map((item: CommentsItemType, id) =>{
            <Card>
                <Card.Header>{item?.user}</Card.Header>
                <Card.Body>
                    <Card.Title>{item?.content}</Card.Title>
                    <Card.Text>
                        {getDate(Number(item?.time))}
                    </Card.Text>
                </Card.Body>
            </Card>
        })}
    </>
    )
}