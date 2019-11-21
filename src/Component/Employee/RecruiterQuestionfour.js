import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class RecruiterQuestionfour extends Component{
    constructor(props) {
        super(props);
    
      }
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="questionmain  text-center">
                           <p>Question 4 of 6</p>
                           <h4>What are the two most important<br />
                             factors you consider<br />
                             when recruiting people ?
                           </h4>
                         </div>
                         <div className="col-md-6 text-center">
                            <button className="btn qbtn">
                            Personality and communication skills
                            </button>
                         </div>
                         <div className="col-md-6 text-center">
                            <button className="btn qbtn">
                            Presentation and appearance
                            </button>
                         </div>
                         <div className="col-md-6 text-center">
                             <button className="btn qbtn">
                             Relevant experience and qualification
                            </button>
                         </div>
                         <div className="col-md-6 text-center">
                             <button className="btn qbtn">
                             Loyalty and trustworthiness
                            </button>
                         </div>
                         
                         
                         <div className="col-md-12 qskip text-center">
                           <Link to="/recruiterquestionfive">SKIP</Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
       </div>
    )
    }
}

export default RecruiterQuestionfour;
