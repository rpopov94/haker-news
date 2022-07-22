import { Container } from "react-bootstrap";
import {useParams} from "react-router-dom";

const NewID = () => {
    const {id} = useParams();
    return(
        <>
            <Container>
                {id}
            </Container>
        </>
    );
}
export default NewID;