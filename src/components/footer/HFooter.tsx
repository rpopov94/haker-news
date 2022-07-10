import Container from 'react-bootstrap/Container';
import './footer.css';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

function HFooter() {
    return (
        <>
            <Container>
                <div className="footer">
                    <div className="hr-line"></div>
                    <Navbar className="links">
                        <Nav>
                            <Nav.Link>
                                <NavLink className="link" to="newest">Guidelines |</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="past">FAQ |</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="newcomments">Lists |</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="ask">API |</NavLink>
                            </Nav.Link>
                            <Nav.Link >
                                <NavLink className="link" to="show">Security |</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="jobs">Legal |</NavLink>  
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="YC">Apply to YC |</NavLink>  
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="link" to="jobs">Contact </NavLink>  
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>           
                <div className="row g-3 align-items-center search">
                    <div className="col-auto">
                        <label className="col-form-label">Search:</label>
                    </div>
                    <div className="col-auto">
                        <input id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"></input>
                    </div>
                    <div className="col-auto"></div>
                </div>
            </Container>
        </>
    );
}

export default HFooter;