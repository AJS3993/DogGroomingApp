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
    <Nav.Link><Link className='link' to="/Services">Services</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/Add">Your Dog</Link></Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link><Link className='link' to="/Contact">Contact Us</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/About">About Us</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    {/* <NavBar /> */}
      {/* <Login user={props.user} handlelogout={props.handlelogout} /> */}
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar