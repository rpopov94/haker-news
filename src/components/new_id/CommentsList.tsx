import { FC } from "react";
import { CommentsItemType } from "../../types/types"
import {Card} from "react-bootstrap";

export interface CommentsProps {
    comments: CommentsItemType| CommentsItemType[];
  }

export const CommentsList: FC<CommentsProps> = ({comments}) =>{
    return(
        <>
        {comments?.map((item: CommentsItemType) =>{
            <Card>
                <Card.Header>{item.user}</Card.Header>
                <Card.Body>
                    <Card.Title>{item?.content}</Card.Title>
                    <Card.Text>
                        {item?.time_ago}
                    </Card.Text>
                </Card.Body>
            </Card>
        })}
    </>
    )
}