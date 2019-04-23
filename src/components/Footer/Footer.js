import React from "react";
import "./Footer.css";
import {MDBCardBody, MDBIcon } from "mdbreact";

const Footer = () => (
  <div className="footer-container" id="contact">
    <MDBCardBody color="bg-primary" className="contact  black-text">      
    </MDBCardBody>
    <MDBCardBody className="footer2">
      <ul className="list-inline text-center list-unstyled footer2" lg="6" sm="12">
        <li className="list-inline-item">
          <a href="tel:+1323-593-0195" className="p-2 fa-lg w-ic">
            <MDBIcon icon="phone" />  
          </a>
        </li>
        <li className="list-inline-item">
          <a href="mailto:aynazewdg37@gmail.com" className="p-2 fa-lg w-ic">
            <MDBIcon icon="envelope" /> 
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.facebook.com/aynalem.zewdie" className="p-2 fa-lg w-ic">
            <MDBIcon  fab icon="facebook-f" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://twitter.com/Aynalem38709427" className="p-2 fa-lg w-ic">
            <MDBIcon fab icon="twitter" />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/aynalem-getanhe" className="p-2 fa-lg w-ic">
            <MDBIcon fab icon="linkedin-in" />
          </a>
        </li>
        
      </ul>
    </MDBCardBody>
    
  <footer color="blue-grey darken-3" className="container-fluid footer text-center">
    <span>aynalem@2018</span>  
  </footer>
  </div>
);

export default Footer;
