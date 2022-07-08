import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navstyle.css';
import icon from "../../images/y18.gif";

function HNavbar() {
  return (
  <Container>
    <Navbar className="navStyle" variant="light"  expand="lg">
      <img className="ic" src={icon} alt="icon"/>
      <Nav className="me-auto">
        <Nav.Link className='b' href="#news">Hacker News</Nav.Link>
        <Nav.Link className="links" href="#newest">new |</Nav.Link>
        <Nav.Link className="links" href="#front">past |</Nav.Link>
        <Nav.Link className="links" href="#newcomments">comments |</Nav.Link>
        <Nav.Link className="links" href="#ask">ask |</Nav.Link>
        <Nav.Link className="links" href="#show">show |</Nav.Link>
        <Nav.Link className="links" href="#jobs">jobs |</Nav.Link>
        <Nav.Link className="links" href="#submit"></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#login">login</Nav.Link>
      </Nav>
    </Navbar>
  </Container>
  );
}

export default HNavbar;