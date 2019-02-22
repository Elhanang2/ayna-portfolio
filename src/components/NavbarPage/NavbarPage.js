import React from 'react';
import "./NavbarPage.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Footer from "../Footer";
class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar className="navbar-default"  color="blue-grey darken-4" fixed="top" dark expand="md" scrolling >
              <MDBNavbarBrand to="/">
                <strong > <a style={{color:"white",fontSize:"24px"}}  href="#home">Aynalem Getanhe</a></strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavbarBrand  to="/about" >
                    <a style={{color:"white", fontSize:"18px"}}  href="#about">About</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/portfolio">
                  <a style={{color:"white", fontSize:"18px"}} href="#portfolio">Portfolio</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/contact">
                    <a style={{color:"white", fontSize:"18px"}} href="#contact">Contact</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand to="/resume">
                    <a style={{color:"white", fontSize:"18px"}} href="/resume">Resume</a>
                  </MDBNavbarBrand>
    
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router> 
        </header>
        <Home />
        <About />
        <Portfolio />        
        <Footer /> 
      </div>
    );
  }
}

export default NavbarPage;