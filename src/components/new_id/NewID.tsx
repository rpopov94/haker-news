import { Container } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export interface PostPageProps {
    updateData: (id: number) => void;
}

const NewID : React.FC<PostPageProps> = ({ updateData }) => {
    const news = useTypedSelector(state => state.news)
    const {id} = useParams();
    updateData(Number(id));

    return(
        <>
            <Container>
                {id}
            </Container>
        </>
    );
}
export default NewID;