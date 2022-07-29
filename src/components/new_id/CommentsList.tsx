import { FC } from "react"
import { CommentsItemType } from "../../types/types"
import { getDate } from "../../utils/utils";

export interface CommentsProps {
    comments: CommentsItemType | Array<CommentsItemType> | undefined;
  }

export const CommentsList: FC<CommentsProps> = ({comments}) =>{
    const arrayOfComments = (Array.isArray(comments) && comments) || comments?.comments;
    return(
        <>
        {arrayOfComments?.map((item: CommentsItemType) =>{
            {item?.user}<br/>
            {getDate(Number(item?.time))}<br/>
            {item?.content}<br/>
            {item?.comments}
        })}
    </>
    )
}