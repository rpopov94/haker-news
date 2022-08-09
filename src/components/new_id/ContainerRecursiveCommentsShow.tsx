import {CommentsItemType} from "../../types/types";
import {CommentsList} from "./CommentsList";

interface ConteinerProps{
    item: CommentsItemType
}

export const ContainerRecursiveCommentsShow: React.FC<ConteinerProps> = ({ item }) => {
    return(
        <>
            <CommentsList comments={item.comments} />
        </>
    );
}