import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


function NavBar() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >Our Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '125px' }}
            navbarScroll
          >
          </Nav>
    
          <FontAwesomeIcon icon={faShoppingCart} /> :0

         
        </Navbar.Collapse>
        
  
      </Container>
    </Navbar>
  );
}

export default NavBar;