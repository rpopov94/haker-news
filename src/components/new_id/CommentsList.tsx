import { FC } from "react";
import { CommentsItemType } from "../../types/types"
import {ContainerRecursiveCommentsShow} from "./ContainerRecursiveCommentsShow";

export interface CommentsProps {
    comments: CommentsItemType| CommentsItemType[];
}

export const CommentsList: FC<CommentsProps> = ({comments}) =>{
    const arrayOfComments = (Array.isArray(comments) && comments) || comments?.comments;
    return(
        <>
            {arrayOfComments &&
                arrayOfComments.map((item: CommentsItemType) => (
                    <div key={item.id}>
                        {item.comments && item.comments.length > 0 ? (
                            <ContainerRecursiveCommentsShow item={item} />
                        ) : (
                            <>{comments?.content}</>
                        )}
                    </div>
                ))}
        </>
    )
}