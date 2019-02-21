import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBMedia } from "mdbreact";
import "./About.css";
class About extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="about" id="about">
        
            <MDBMedia className="about-heading" >
                <h3 className="mt-4 about-heading ">About Me</h3>
            </MDBMedia><br/><br/>
            <MDBRow className="mb-4 about-me">
            
              <MDBCol md="3">
                <img src="images/portfolio.jpg" style={{width:"200px", height:"200px"}} className="rounded float-left" alt="myimage" />
                
              </MDBCol>
              <MDBCol md="9" className="about-text">
                <p>My name is Aynalem and I am a Full stack web developer with experiance in aerospace NDT inspector.
                  Since starting the Full Stack Web Development Bootcamp at UCLA, 
                  I’ve come to appreciate every stage in the process of creating a client-side app,
                   the initial problem solving and wire-framing of a project, building the logic with Javascript,
                    transforming the UI with CSS, and solving the inevitable bugs. Through my experiences,
                     I’ve developed strong skills in communication and cross-team collaboration. 
                     I truly enjoy getting to know my team members and collaborating on projects that make an impact.
                      My experience working at aerospace industry taught me to handle issues quickly,
                       adapt to constant change,ready for challenge and always strive for improvement.
                    
                </p><br></br>
                
              </MDBCol><br></br>
              
            </MDBRow>
            <div className="about-skill" >
                  <h3 className="mt-4 about-heading ">Skills</h3>
                
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>Ajax</li>
                  <li>React</li>
                  <li>MySql</li>
                  <li>Mongodb</li>
                  <li>Nodejs</li>
                  <li>APIs</li>
                  <li>JSON</li>
                </ul>
              </div>
          </div>
          
         );
    }
}
 
export default About;