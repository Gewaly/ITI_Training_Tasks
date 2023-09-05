import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyNav(){
  return (
   <>
     <Navbar expand="lg" className="bg-body-tertiary  d-flex justify-content-around " data-bs-theme="dark">
      <Container className="text-light  ">
        <Navbar.Brand href="#home">MyNav</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-between">
          <Link className='text-light  ' to={'/home'}>Home</Link>
            <Link className='text-light  ' href ="/about">ABOUT</Link>
            <Link className='text-light  ' href="#form">Form</Link>
            <Link className='text-light  ' to={'/todo'}>Todo</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
export default MyNav;