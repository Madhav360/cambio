import React from 'react';
import {Component} from 'react';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';




class IQTestQuestionfive extends Component{
    constructor(props) {
        super(props);
        this.state = {
              test_begin: 'Identify two words  that form a connection (analogy), thereby relating to the word in capitals in the same way',
              question_one : 'lash',
              question_two : 'parade',
              question_three : 'feline',
              question_four : 'whiskers',
            };        
      }
    
    
    render(){
	return(
       <div>
          <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page role-height">
                         <div className="iq-question-test">
                          <Link to="#">Save and Exit</Link>
                           
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="col-md-4 offset-md-8 text-center accout-recover-input iq-test-question">
                             <p>Question 5 of 6</p>
                             <p>{this.state.test_begin}</p>
                             <p>CAT</p>
                               <Link to="/iq-test-question-6"><button className="btn">{this.state.question_one}</button></Link>
                               <Link to="/iq-test-question-6"><button className="btn">{this.state.question_two}</button></Link>
                               <Link to="/iq-test-question-6"><button className="btn">{this.state.question_three}</button></Link>
                               <Link to="/iq-test-question-6"><button className="btn">{this.state.question_four}</button></Link>
                         </div>
                         </form>
                     </div>    
               </div>
           </div>
       <Footer />
       </div>
    )
    }
}

export default IQTestQuestionfive;
