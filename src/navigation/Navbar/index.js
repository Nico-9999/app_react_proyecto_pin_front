import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFFF99' }} className="justify-content-between">
    <Container>
      <Navbar.Brand href="#home">Gourmet Gatuno</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav     className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          <Nav.Link href="#info">Quienes somos</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <Nav.Link href="#form">Contáctanos</Nav.Link>


        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export {NavBar}