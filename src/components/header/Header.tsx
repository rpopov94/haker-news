import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navstyle.css';
import icon from "../../images/y18.gif";
import {NavLink, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";
import {fetchNews} from "../../store/action-creators/news";

export interface HeaderProps {
  updateData: (mode: string, id?: number | undefined) => void;
  mode: 'news' | 'comments';
}

const Header: React.FC<HeaderProps> = ({ updateData, mode })  => {

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
                    <Button onClick={() => updateData(mode)}>
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
                      <Button onClick={() => updateData("comments")}>
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