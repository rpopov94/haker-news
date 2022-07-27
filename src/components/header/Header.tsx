import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navstyle.css';
import icon from "../../images/y18.gif";
import { useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";
import { useActions } from '../../hooks/useActions';

export interface HeaderProps {
  mode: 'news' | 'comments';
}

const Header: React.FC<HeaderProps> = ({mode})  => {

  const back = useNavigate();

  const goHome = () =>{
    back('/');
  }
  const {fetchNews} = useActions();
  const updateNews = () => {
    fetchNews();
  }

  const updateComments = () => {

  }

  return (
  <div>
      <Container>
        <Navbar className="navStyle" variant="light"  expand="lg">
          <Nav className="me-auto">
            <Navbar.Brand>
              {
                mode === 'news'?
                    <Button onClick={() => updateNews()}>
                      <img
                          alt=""
                          src={icon}
                          className="d-inline-block align-top ic"
                      />{' '}
                      <span className="b">Update</span>
                    </Button>:
                    <>
                      <Button onClick={() => goHome()}>
                        <img
                            alt=""
                            src={icon}
                            className="d-inline-block align-top ic"
                        />{' '}
                        <span className="b">Go Back</span>
                      </Button>
                      {' '}
                      <Button onClick={() => updateComments()}>
                        <span className="b">Update comments</span>
                      </Button>
                    </>
              }
            </Navbar.Brand>
          </Nav>
        </Navbar>
      </Container>
  </div>
  );
}

export default Header;