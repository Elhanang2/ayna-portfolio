import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Resume from "./components/Resume/Resume"
import './App.css';
// import {Container} from "mdbreact"
import NavbarPage from "./components/NavbarPage";

class App extends Component {
  render() {
    return (
      <div className="app">
     
        <Router >
          <div>
      
            <Route exact path="/" component={NavbarPage} />
            <Route exact path="/resume" component={Resume} />
            
            
            
          </div>
          
        </Router>
        
      </div>
    );
  }
}

export default App;
