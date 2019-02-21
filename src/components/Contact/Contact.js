import React, { Component } from 'react';
import axios from "axios";
import "./Contact.css"
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
class Contact extends Component {
  constructor(){
    super();
    this.state = { 
      username:'',
      email: '',
      company: '',
      phone: '',
      message: '',

     }
     this.handleInputChange= this.handleInputChange.bind(this);
     this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleInputChange = e => {
    
    const { name, value } = e.target;
     this.setState({ [name]: value });
     
   }
   

    handleSubmit(e){
      e.preventDefault();
        const { username, email, phone, company, message}=this.state;         
      axios({
          method: "POST", 
          url:"http://localhost:4000/send", 
          data: {
            
              username: username,   
              email: email,
              phone: phone,
              company: company,  
              messsage: message
          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Message Sent."+ username,email, phone, company, message); 
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
    }
    render() { 
        return ( 
            <div className="contact" id="contact">
              <div className="contact-header"></div>
                <section className="contact-section my-5">
                  <MDBCard>
                    <MDBRow>
                      <MDBCol lg="8">
                        <MDBCardBody className="form">
                          <h4 className="mt-4">
                            <MDBIcon icon="envelope" className="pr-2" />
                            Write to us:
                          </h4>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-name"
                                  label="Your name"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-email"
                                  label="Your email"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-phone"
                                  label="Your phone"
                                  name="phone"
                                  value={this.state.phone}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-company"
                                  label="Your company"
                                  name="company"
                                  value={this.state.company}
                                  onChange={this.handleInputChange}
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="12">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="textarea"
                                  id="form-contact-message"
                                  label="Your message"
                                  name="message"
                                  value={this.state.message}
                                  onChange={this.handleInputChange}
                                />
                                <MDBBtn rounded color="indigo" onClick={this.handleSubmit} className="contact-button">
                                  <MDBIcon icon="send-o" />
                                </MDBBtn>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol lg="4">
                        
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </section>
             
            </div>
         );
    }
}
 
export default Contact;