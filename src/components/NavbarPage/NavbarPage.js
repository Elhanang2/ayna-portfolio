import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
//import {MDBNavbarBrand} from "react-bootstrap";
import "./NavbarPage.css";
import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume"
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
                  <MDBNavbarBrand  color="white" to="/about" >
                    <a style={{color:"white", fontSize:"18px"}}  href="#about">About</a>
                  </MDBNavbarBrand>
                  <MDBNavbarBrand  to="/portfolio">
                  <a style={{color:"white", fontSize:"18px"}} href="#portfolio"><span className="fa fa-folder-open"></span>Portfolio</a>
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

          {/*<MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </MDBMask>
    </MDBView>*/}
        </header>

        <main>
        <Home />
        <About />
        <Portfolio />        
        <Footer />
        </main>
      </div>
    );
  }
}

export default NavbarPage;