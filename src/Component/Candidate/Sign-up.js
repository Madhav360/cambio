import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';


class CandidateSignup extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2,
          last_name: '',
          first_name: '',
          password: '',
          comfirm_password: '',
          company_email: '',
          company_name: '',
          phone_no: '',
         
        };
       
       console.log(this.state.phone_no);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.LastNameHandler = this.LastNameHandler.bind(this);
        this.FirstNameHandler = this.FirstNameHandler.bind(this);
        this.PasswordHandler = this.PasswordHandler.bind(this);
        this.ConfirmPasswordHandler = this.ConfirmPasswordHandler.bind(this);
        this.CompanyEmailHandler = this.CompanyEmailHandler.bind(this);
        this.PhoneNoHandler = this.PhoneNoHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      LastNameHandler(event) {
        this.setState({last_name: event.target.value});
      }
      
      FirstNameHandler(event) {
        this.setState({first_name: event.target.value});
      }
      
      PasswordHandler(event) {
        this.setState({password: event.target.value});
      }
      
      ConfirmPasswordHandler(event) {
        this.setState({comfirm_password: event.target.value});
      }
      
      CompanyEmailHandler(event) {
        this.setState({company_email: event.target.value});
      }
    
      PhoneNoHandler(event) {
        this.setState({phone_no: event.target.value});
      }

        handleSubmit(event) {
          console.log(this.state.phone_no)
          event.preventDefault();
        }
      
    render(){
	return(
       <div>
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page text-center">
                      <h2>Hey There</h2>
                      <h4>Signup to Continue</h4>
                        <div className="mdv-login-with">
                           <h4>Signup with</h4>
                           <ul>
                               <li><img className="img-responsive fb" src="image/fb.png" /></li>
                               <li><img className="img-responsive" src="image/gogle.png" /></li>
                               <li><img className="img-responsive" src="image/in.png" /></li>
                               <li><img className="img-responsive" src="image/phone.png" /></li>
                            </ul>
                        </div>
                        <div className="col-md-8 offset-md-4 candi-sign-up">
                        <form onSubmit={this.handleSubmit}>
                          <div className="mdv-signup-form">
                           <div className="col-lg-6">
                              <div className="h">
                              <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.FirstNameHandler}
                                     value={this.first_name} 
                                     placeholder="First Name"/>
                              
                             
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.LastNameHandler} 
                                  value={this.state.last_name}
                                  placeholder="Last Name"/>
                              </div>
                            </div>
                           
                            <div className="col-md-6">
                              <div className="from-group">
                                    <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.PhoneNoHandler} 
                                     value={this.phone_no}
                                     placeholder="Phone Number"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                              <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.CompanyEmailHandler} 
                                  value={this.company_email}
                                  placeholder="Email ID"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                    <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.PasswordHandler} 
                                     value={this.password}
                                     placeholder="Password"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                 <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.ConfirmPasswordHandler} 
                                  value={this.comfirm_password}
                                  placeholder="Confirm Password"/>
                              </div>
                            </div>
                           </div>
                         
                            <div class="col-md-12 form-group text-center">
                            
                            <Link to="/candidate-industry"> <input type="submit" className="btn mdv-signup-btn" value="Submit" /></Link>
                        </div>
                        </form>
                      </div>
                        <div class="col-md-12 form-group signup-text">
                           A Already User ? <Link to="/Login">Login</Link>
                           
                        </div>
                   </div>  
                           
               </div>
           </div>
       </div>
    )
    }
}

export default CandidateSignup;
