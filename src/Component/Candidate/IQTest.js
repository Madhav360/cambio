import React from 'react';
import {Component} from 'react';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';




class IQTest extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A Email was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
	return(
       <div>
          <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page role-height">
                         <div className="account-recovery  text-center">
                           <h2>IQ Test</h2>
                           <p>make your proﬁle awesome and impress   the employer</p>
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="col-md-4 offset-md-8 accout-recover-input form-group">
                        
                             {/* <input 
                                className="form-control iq-test-input" 
                                type="email"
                                placeholder="Email Id" 
                                value={this.state.value} 
                                onChange={this.handleChange} /> */}
                         </div>
                         <div className="col-md-12 company-skip-btn text-center">
                              <Link to="/iq-test-begin"> <buttom className="btn company-skip">Start the test</buttom><br /></Link>
                              <Link to="/iq-test-begin">I will attend later</Link>
                              
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

export default IQTest;
