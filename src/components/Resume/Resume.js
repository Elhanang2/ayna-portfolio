import React, { Component } from 'react';
import "./Resume.css"
class Resume extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <br></br>
                <h3 className="resume-top-heading">AYNALEM GETANHE RESUME</h3><br></br>
                <p  className="resume-text">Full Stack Web Developer with a background in Aerospace industry and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Reputation for strong wit and attention to detail no matter the complexity of the project.  </p>
                <h5 className="resume-heading">TECHNICAL SKILLS</h5>
                <p className="resume-text">NodeJS, Express, JavaScript, jQuery, React, GIT, GitHub, MongoDB, MySQL, Handlebars, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, the command line, Heroku and MSSQL DBA.</p>
                <h5 className="resume-heading">APPLICATIONS BUILT</h5>
                <p className="resume-subheading">Cristal Collector Game</p>
                    <ul className="resume-text">
                        <li>Game to sum up selected crystal value to get the given number</li>
                        <li>JavaScript, Html and CSS</li>
                        <li>Frontend in html and JavaScript to calculate crystal values</li>
                        <li><a href="https://elhanang2.github.io/unit-4-game/">https://elhanang2.github.io/unit-4-game/</a></li>
                    </ul>
                <p className="resume-subheading">Train scheduler </p>
                    <ul className="resume-text">
                        <li>Show train schedule and set schedule </li>
                        <li>JavaScript, Html, CSS and firebase</li>
                        <li>Front-end   Html to get real time train schedule through firebase</li>
                        <li><a href="https://elhanang2.github.io/Train-Scheduler/ ">https://elhanang2.github.io/Train-Scheduler/ </a></li>
                    </ul>
                <p className="resume-subheading">Friends-Finder </p>
                    <ul className="resume-text">
                        <li>Find best friends from list of arrays by comparing answers given by the user.  </li>
                        <li>JavaScript, Html, CSS and Nodejs</li>
                        <li>Frontend Html and JavaScript to compare friends array with new user</li>
                        <li><a href="https://fast-crag-98576.herokuapp.com/survey">https://fast-crag-98576.herokuapp.com/survey </a></li>
                    </ul>
                <p className="resume-subheading">Eat-Da-Burger</p>
                    <ul className="resume-text">
                        <li>Order pizza and if you are hungry get your order priority </li>
                        <li>JavaScript, Handlebar, CSS, Nodejs and MySQL</li>
                        <li>Frontend Handlebar & backend MySQL to get order depending on  priority . </li>
                        <li><a href="https://secure-dusk-69272.herokuapp.com/">https://secure-dusk-69272.herokuapp.com/</a></li>
                    </ul>
                <h5 className="resume-heading">RELEVANT EXPERIENCE</h5>
                <p className="resume-text">Freelance full stack Web Developer           March/2018-Now </p>
                    <ul className="resume-text">
                        <li>Developing Los Angeles dog shelters website to encourage adopters.</li>
                        <li>Developed Games and websites to teach and entertain .</li>
                    </ul>
                <p className="resume-text">Part time MSSQL Database Administrator       March/2016-September/2016 </p>
                    <ul className="resume-text">
                        <li>Installing, configuring SQL instances. </li>
                        <li>Database backup, restores, mirroring, Log Shipping, Replication, index creation, rebuilding and performance tuning.  </li>
                    </ul>
                <p className="resume-text">Full time Aircraft inspector      January/2008- April/2017 </p>
                    <ul className="resume-text">
                        <li>Perform inspection on B787, B777, B767, B757, B737, & Q-400  using Ultrasonic, Eddy current, Radiography, Penetrant and Magnetic particle method of inspection. </li>
                        
                    </ul>
                <h5 className="resume-heading">EDUCATION</h5>
                    <p className="resume-text"><span>UCLA,</span>Los Angeles, California </p>
                    <p className="resume-text">Full Stack Web Development Bootcamp </p>
                    <p className="resume-text">An intensive 24-week long boot camp dedicated to designing and 
                    building web applications. Skills learned consisted of HTML5, CSS3, JavaScript, jQuery, 
                    Bootstrap, Firebase, Node js,  MySQL, MongoDB, Express, Handlebars JS, & React js.  </p>
                    <p className="resume-text"><span>Microsoft </span>  </p>
                    <p className="resume-text">Administering Microsoft SQL server 2012/2014 Databases certificate  </p>
                    <p className="resume-text">Data Management, Database Configuration, Database Maintenance, SQL, SQL Server, Secure Data Transmission, Server Security. </p>
                    <p className="resume-text"><span>Addis Ababa university,</span>Addis Ababa, Ethiopia  </p>
                    <p className="resume-text">Electrical & Computer Dept – Computer Engineering Degree  </p>
                    <p className="resume-text">5 years long dedicated to the design, construction and programming of computers and computer- based systems. </p>
            </div>
        );
    }
}
 
export default Resume;