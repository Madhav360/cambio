import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';





class Resetotp extends Component{
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
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="account-recovery forgot-password text-center">
                           <h2>Forgot Password</h2>
                           <p>Enter 4 digit OTP sent to your registered phone<br /> number or email id </p>
                          
                          <img src="image/icons/forgotpwd.png" alt="forgot password" />
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="otpinupt form-group text-center">
                        
                            <ul>
                                <li>
                                   <input 
                                     className="form-control" 
                                     type="email"
                                     placeholder="" 
                                     maxLength="1"
                                     value={this.state.value} 
                                     onChange={this.handleChange}
                                      />
                                </li>
                                <li>
                                   <input 
                                     className="form-control" 
                                     type="email"
                                     placeholder="" 
                                     maxLength="1"
                                     value={this.state.value} 
                                onChange={this.handleChange}
                                      />
                                </li>
                                <li>
                                   <input 
                                     className="form-control" 
                                     type="email"
                                     placeholder="" 
                                     maxLength="1"
                                     value={this.state.value} 
                                     onChange={this.handleChange}
                                      />
                                </li>
                                <li>
                                   <input 
                                     className="form-control" 
                                     type="email"
                                     placeholder="" 
                                     maxLength="1"
                                     value={this.state.value} 
                                onChange={this.handleChange}
                                      />
                                </li>
                                
                            </ul>
                             
                         </div>
                         <div className="col-md-12 company-skip-btn text-center">
                               {/* <buttom className="btn company-skip">Next</buttom><br /> */}
                              <Link to="setnewpassword"><input className="btn company-skip acc-save"  value="Next" /></Link> <br />
                              
                         </div>
                         </form>
                     </div>    
               </div>
           </div>
       </div>
    )
    }
}

export default Resetotp;
