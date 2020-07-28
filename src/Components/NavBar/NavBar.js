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
    </Nav>
    <Nav>
    <Nav.Link><Link className='link' to="/Contact">Contact</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Nav.Link><Link className='link' to="/About">About</Link></Nav.Link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
    {/* <NavBar /> */}
      {/* <Login user={props.user} handlelogout={props.handlelogout} /> */}
    </Nav>
  </Navbar>
    </div>
  )

  export default NavBar