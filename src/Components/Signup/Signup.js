import React from "react";
import "./Signup.css";
import {MDBInput, MDBContainer} from 'mdbreact';


class Signup extends React.Component {


  render() {
    return (

      <div>    
    
<MDBContainer>

      <h2>Sign Up</h2>

      <form>

      Owner name: <MDBInput type="text"/>
      Email: <MDBInput type="text"/>
      Phone Number: <MDBInput type="text"/>
      Dog Breed: <MDBInput type="text"/>
      Service: <MDBInput type="text"/>

      <MDBInput type="submit" value="Submit"/>

      </form>
      </MDBContainer>
      </div>
    );
  }
}

export default Signup;