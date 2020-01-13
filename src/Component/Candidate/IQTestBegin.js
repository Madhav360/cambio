import React from 'react';
import {Component} from 'react';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';




class IQTestBegin extends Component{
    constructor(props) {
        super(props);
        this.state = {test_begin: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley'};        
      }
    
    
    render(){
	return(
       <div>
          <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page role-height lc">
                         <div className="account-recovery  text-center">
                           <h2>IQ Test</h2>
                           
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="col-md-4 offset-md-8 accout-recover-input form-group">
                            <p className="test-begin">{this.state.test_begin}</p>
                         </div>
                         <div className="col-md-12 company-skip-btn text-center">
                              <Link to="/iq-test-question-1"> <buttom className="btn company-skip">Begin</buttom><br /></Link>
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

export default IQTestBegin;
