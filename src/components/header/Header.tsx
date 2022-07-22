import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navstyle.css';
import icon from "../../images/y18.gif";
import { useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

export interface HeaderProps {
  mode: 'news' | 'comments';
}

const Header: React.FC<HeaderProps> = ({mode })  => {

  const back = useNavigate();

  const goBack = () =>{
    back('/');
  }

  return (
  <div>
      <Container>
        <Navbar className="navStyle" variant="light"  expand="lg">
          <Nav className="me-auto">
            <Navbar.Brand>
              {
                mode === 'news'?
                    <Button>
                      <img
                          alt=""
                          src={icon}
                          className="d-inline-block align-top ic"
                      />{' '}
                      <span className="b">Hacker News</span>
                    </Button>:
                    <>
                      <Button onClick={() => goBack()}>
                        <img
                            alt=""
                            src={icon}
                            className="d-inline-block align-top ic"
                        />{' '}
                        <span className="b">Go Back</span>
                      </Button>
                      {' '}
                      <Button>
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