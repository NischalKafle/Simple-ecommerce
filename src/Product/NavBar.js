import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartProduct=useSelector((state)=>state.cart)
  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Navbar.Brand>Clothing Store</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '125px' }}
            navbarScroll
          >
          </Nav>
    <Link to="/cart" style={{textDecoration:'none'}}>
          <FontAwesomeIcon icon={faShoppingCart} className='txt'/>:{cartProduct.length}
          </Link>
         
        </Navbar.Collapse>
        
  
      </Container>
    </Navbar>
  );
}

export default NavBar;