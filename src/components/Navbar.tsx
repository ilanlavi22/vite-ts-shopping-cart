import { Button, Container, Nav, Navbar as NavbarBS } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <NavbarBS sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' end as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' end as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' end as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant='outline-primary'
          className='rounded-circle'>
          <i className='bi bi-bag-fill'></i>
          <div
            className='
            rounded-circle bg-danger d-flex justify-content-center align-items-center small'
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(25%, 25%)'
            }}>
            3
          </div>
        </Button>
      </Container>
    </NavbarBS>
  );
}
