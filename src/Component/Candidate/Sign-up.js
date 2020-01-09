import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';



class CandidateSignup extends Component{
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["lastname"] = "";
        fields["email_id"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
     
        this.setState({fields:fields});
        alert("Form submitted");
    }
    

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter First Name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter Last Name.";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emai_lid"]) {
      formIsValid = false;
      errors["email_id"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email_id"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email_id"])) {
        formIsValid = false;
        errors["email_id"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
      
    render(){
      
	return(
       <div>
         <Header />
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
                        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                          <div className="mdv-signup-form">
                           <div className="col-lg-6">
                              <div className="h">
                              {/* <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.FirstNameHandler}
                                     value={this.first_name} 
                                     placeholder="First Name"/> */}
                                 <input type="text" 
                                     name="username" 
                                     className="form-control signupinputs mrg"
                                     value={this.state.fields.username} 
                                     onChange={this.handleChange}
                                     placeholder="First Name" />
                                 <div className="errorMsg">{this.state.errors.username}</div>
                              
                             
                              </div>
                            
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  {/* <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.LastNameHandler} 
                                  value={this.state.last_name}
                                  placeholder="Last Name"/> */}
                                   <input type="text" 
                                     name="lastname" 
                                     className="form-control signupinputs mrg"
                                     value={this.state.fields.lastname} 
                                     onChange={this.handleChange}
                                     placeholder="Last Name" />
                                 <div className="errorMsg">{this.state.errors.lastname}</div>
                              </div>
                            </div>
                           
                            <div className="col-md-6">
                              <div className="from-group">
                                    {/* <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.PhoneNoHandler} 
                                     value={this.phone_no}
                                     placeholder="Phone Number"/> */}
                                     <input type="text" name="mobileno" 
                                     placeholder="Phone Number"  
                                     className="form-control signupinputs mrg"  
                                     value={this.state.fields.mobileno} 
                                     onChange={this.handleChange}   />
                                     <div className="errorMsg">{this.state.errors.mobileno}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                              {/* <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.CompanyEmailHandler} 
                                  value={this.company_email}
                                  placeholder="Email ID"/> */}
                                  <input type="text" 
                                  name="email_id" 
                                  className="form-control signupinputs" 
                                  value={this.state.fields.email_id} 
                                  onChange={this.handleChange}
                                  placeholder="Email ID"  />
                                  <div className="errorMsg">{this.state.errors.email_id}</div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                    {/* <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.PasswordHandler} 
                                     value={this.password}
                                     placeholder="Password"/> */}
                                     <input type="password" 
                                       name="password" 
                                       className="form-control signupinputs mrg"
                                       value={this.state.fields.password} 
                                       onChange={this.handleChange}
                                       placeholder="Password" />
                                     <div className="errorMsg">{this.state.errors.password}</div>
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
                            
                            
                           <Link to="/candidate-industry"><input type="submit" className="btn mdv-signup-btn" value="Submit" /></Link>
                        </div>
                        </form>
                      </div>
                        <div class="col-md-12 form-group signup-text">
                           A Already User ? <Link to="/Login">Login</Link>
                           
                        </div>
                   </div>  
                           
               </div>
           </div>
           <Footer />
       </div>
    )
    }
}

export default CandidateSignup;
