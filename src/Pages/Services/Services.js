import React from "react";
import "./Services.css";
import { MDBContainer, MDBRow, MDBCol, Card, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
// import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const Services = props => {
  return (
    <div>
      <NavBar/>

      <div className="Services">

        <MDBContainer>
            
          <MDBRow>
            
            <MDBCol sm="4">
              <Card>
                <MDBCardImage className="img-fluid" src="https://i.imgur.com/Kh22bag.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Wash</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                </MDBCardBody>
              </Card>
            </MDBCol>
          
            <MDBCol sm="4">
              <Card>
                <MDBCardImage className="img-fluid" src="https://i.imgur.com/vftYT4R.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Nail Clip</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                </MDBCardBody>
              </Card>
            </MDBCol>
            
            <MDBCol sm="4">
              <Card>
                <MDBCardImage className="img-fluid" src="https://i.imgur.com/mGYpn8r.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>Full Groom</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </MDBCardText>
                </MDBCardBody>
              </Card>
            </MDBCol>               
                
          </MDBRow>
        </MDBContainer>
      </div>

    <Footer/>       
     
    </div>

  );
};

export default Services;