import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navstyle.css';
import icon from "../../images/y18.gif";
import {NavLink} from 'react-router-dom';

function HNavbar() {
  return (
  <div>
      <Container>
        <Navbar className="navStyle" variant="light"  expand="lg">
          <Nav className="me-auto">
            <Navbar.Brand>
              <NavLink to='/'>
                <img
                  alt=""
                  src={icon}
                  className="d-inline-block align-top ic"
                />{' '}
                <span className="b">Hacker News</span>
              </NavLink>
            </Navbar.Brand>
            <Nav.Link>
              <NavLink className="link" to="newest">new |</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="link" to="past">past |</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="link" to="newcomments">comments |</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="link" to="ask">ask |</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink className="link" to="show">show |</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="link" to="jobs">jobs</NavLink>  
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavLink className="link" to="login">login</NavLink>  
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
  </div>
  );
}

export default HNavbar;