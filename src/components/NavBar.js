import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NavBar = ({ query, setQuery}) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold d-flex align-items-center me-1">
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="text-decoration-none">
              <div className="nav-link">Home</div>
            </Link>
            <Link to="/about" className="text-decoration-none">
              <div className="nav-link">About</div>
            </Link>
            <Link to="/browse" className="text-decoration-none">
              <div className="nav-link">Browse</div>
            </Link>
            </Nav>
        </Navbar.Collapse>
        <Col md={3}>
        <Form.Group>            
              <Form.Control
                type="text"
                placeholder="Cerca il tuo libro"
                className="text-center"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            </Col>
      </Container>
    </Navbar>
  );
}

export default NavBar;