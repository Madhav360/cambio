import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';





class StudentQuestionsix extends Component{
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
                           <p>Question 6</p>
                           <h4>What are the two most important<br />
                             factors you consider<br />
                             when recruiting people ?
                           </h4>
                         </div>
                         <div className="col-md-6 text-center">
                           <Link to="/recruiterquestiontwo">
                             <button className="btn qbtn">
                                Personality and communication skills
                            </button>
                           </Link>
                         </div>
                         <div className="col-md-6 text-center">
                           <Link to="/recruiterquestiontwo">
                             <button className="btn qbtn">
                                Presentation and appearance
                            </button>
                           </Link>
                         </div>
                         <div className="col-md-6 text-center">
                           <Link to="/recruiterquestiontwo">
                             <button className="btn qbtn">
                               Relevant experience and qualification
                            </button>
                           </Link>
                             
                         </div>
                         <div className="col-md-6 text-center">
                           <Link to="/lets-build-profile">
                             <button className="btn qbtn">
                               Loyalty and trustworthiness
                             </button>
                           </Link>
                             
                         </div>
                         
                         
                         <div className="col-md-12 qskip text-center lc">
                           <Link to="/lets-build-profile">SKIP</Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
           <Footer />
       </div>
    )
    }
}

export default StudentQuestionsix;
