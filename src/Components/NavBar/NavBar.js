import  {Nav, Navbar}  from 'react-bootstrap';
import React from "react";
//import Login from "./../Login/Login";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => (
    <div>
      <Navbar bg="dark" variant="dark" >
    <Navbar.Brand><Link className='logo' to="/">PuppyClips</Link></Navbar.Brand>
    <Nav className="mr-auto">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/menu">Home</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/add">Services</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/order">Our Groomers</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link className='link' to="/profile">Contact Us</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/profile">About Us</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    {/* <NavBar /> */}
      {/* <Login user={props.user} handlelogout={props.handlelogout} /> */}
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar