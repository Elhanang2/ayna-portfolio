import React, { Component } from 'react';
import "./Portfolio.css";



import {MDBCol,MDBView, MDBMask, MDBContainer,MDBRow} from "mdbreact";

class Portfolio extends Component {
    constructor(){
        super();
        this.state={

        }
        this.handleClick=this.handleClick.bind(this); 
    }
    handleClick(e){
        e.preventDefault();
        console.log("cliked")
    }
    
    render() { 
        return ( 
            <div id="portfolio" >
                    <h2 className="mt-4 portfolio-header" >Some Of My Works </h2>

                
            <MDBContainer className="mt-5">
                 
                <MDBRow className="mt-4">
                
                <MDBCol className="box" sm="12" md="6" lg="4">
                    <MDBView  hover zoom >
                        {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                        
                            <img
                                src="images/dog.jpeg"
                                className="img-fluid image  circle"
                                style={{width:"100%", height:"200px"}}
                                alt="burgerImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Dog Log</p>
                            </MDBMask>
                        
                            
                    </MDBView>
                    <div className="text-description">
                        <p>This app is intended to log shelters dogs information when first join the shelter and walking.when volunteer come to walk dogs they will log the behavior they showed.</p>
                        <button><a href="https://intense-sands-87617.herokuapp.com/">Live</a></button>
                    </div>
                </MDBCol>
                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            
                            <img
                                src="images/burger1.jpg"
                                className="img-fluid image  circle"
                                style={{width:"100%", height:"200px"}}
                                alt="burgerImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Eat-Da-Burger</p>
                            </MDBMask>
                        
                        </MDBView>
                        <div className="text-description">
                            <p  >This app is a restaurant app that lets users input the name of burgers they’d
                             like to eat.  When the user submits burger name, the app will display the 
                             burger with “devoured it” button to move it.</p>
                            <button><a href="https://secure-dusk-69272.herokuapp.com/">Live</a></button>  
                        </div>  
                    </MDBCol>
                    
                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            
                            <img
                                src="images/friends.jpeg"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="friendsImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Friends Finder</p>
                            </MDBMask>
   
                        </MDBView>
                        <div className="text-description">
                            <p>Friend finder app is designed to finds friends.
                             This full stack site will take in results from users surveys,
                              then compare there answer with other users and display the name and picture of the user with best overall match. </p>
                            <button><a href="https://friends-finder-ayna.herokuapp.com/">Live</a></button>
                        </div>
                    </MDBCol>

                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            <img
                                src="images/trivia.jpg"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="triviaGameImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Trivia Game (quiz)</p>
                            </MDBMask>
                            
                        </MDBView>
                        <div className="text-description">
                            <p>This is Trivia game app. There are multiple questions with limited amount of time.If users answer is wrong the answer will be displayed. </p>
                            <button><a href="https://elhanang2.github.io/TriviaGame/">Live</a></button>
                        </div>
                    </MDBCol>

                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            <img
                                src="images/train.jpeg"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="trainImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Train Scheduler</p>
                            </MDBMask>
                            
                        </MDBView>
                        <div className="text-description">
                            <p >This app uses Moment.js to display upcoming trains based on user root selection . Firebase is used here to save and auto-populate input on the page</p>
                            <button><a href="https://elhanang2.github.io/Train-Scheduler/">Live</a></button>
                        </div>
                    </MDBCol>

                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            <img
                                src="images/crystal.jpg"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="cristalImage" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Cristal collector game</p>
                            </MDBMask>
                            
                        </MDBView>
                        <div className="text-description">
                            <p >Simple click game made with jQuery where the user clicks on the crystals until they reach the target number exactly.</p>
                            <button><a href="https://elhanang2.github.io/unit-4-game/">Live</a></button>
                        </div>
                    </MDBCol>

                    {/*<MDBCol sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            
                            <a href="https://elhanang2.github.io/unit-4-game-RPG-/" role="button">
                                <img
                                    src="images/RPG.png"
                                    className="img-fluid image  "
                                    style={{width:"100%", height:"200px"}}
                                    alt="" 
                                />
                                <MDBMask className="flex-center">
                                <p className="orange-text p ">Star Wars RPG</p>
                                </MDBMask>
                            </a>
                        </MDBView>
            </MDBCol>*/}

                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            <img
                                src="images/wordguess.png"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="Word guess" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Word Guess Game</p>
                            </MDBMask>
                            
                        </MDBView>
                        <div className="text-description">
                            <p>This app randomly picks a word, and the user has to guess letters the app chose.The app display wrong words used and remaining chances to guess.</p>
                        <button><a href="https://elhanang2.github.io/Word-Guess-Game/">Live</a></button>
                        </div>
                    </MDBCol>

                    <MDBCol className="box" sm="12" md="6" lg="4">
                        <MDBView  hover zoom >
                            {/*<p className="text-center"><strong>Shadow effect</strong></p>*/}
                            
                            <img
                                src="images/giphy.jpg"
                                className="img-fluid image  "
                                style={{width:"100%", height:"200px"}}
                                alt="" 
                            />
                            <MDBMask className="flex-center">
                            <p className="img-title " >Giphy api search</p>
                            </MDBMask>
                           
                        </MDBView>
                        <div className="text-description">
                            <p >This app uses the Giphy API and jQuery to retrieve and show gifs dynamically.and also to add gifs button.</p>
                            <button><a href="https://elhanang2.github.io/GIPHYrepo/">Live</a></button>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
             </div>   
         );
    }
}
 
export default Portfolio;