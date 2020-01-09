import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';


class Signup extends Component{
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
          fields: {},
          errors: {}
         
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.LastNameHandler = this.LastNameHandler.bind(this);
        this.FirstNameHandler = this.FirstNameHandler.bind(this);
        this.PasswordHandler = this.PasswordHandler.bind(this);
        this.ConfirmPasswordHandler = this.ConfirmPasswordHandler.bind(this);
        this.CompanyNameHandler = this.CompanyNameHandler.bind(this);
        this.CompanyEmailHandler = this.CompanyEmailHandler.bind(this);
        this.PhoneNoHandler = this.PhoneNoHandler.bind(this);
       
      }
    

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
            fields["emailid"] = "";
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
          errors["username"] = "*Please enter your username.";
        }
  
        if (typeof fields["username"] !== "undefined") {
          if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["username"] = "*Please enter alphabet characters only.";
          }
        }
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
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
      CompanyNameHandler(event) {
        this.setState({company_name: event.target.value});
      }
      PhoneNoHandler(event) {
        this.setState({phone_no: event.target.value});
      }


      
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page text-center">
                      <h2>Hey There</h2>
                        <div className="mdv-login-with">
                           <h4>Signup with</h4>
                           <ul>
                           <li><img className="img-responsive" src="image/face.png" /></li>
                            <li><img className="img-responsive" src="image/search.png" /></li>
                            <li><img className="img-responsive" src="image/linkedin.png" /></li>
                            <li><img className="img-responsive" src="image/telephone.png" /></li>
                            </ul>
                        </div>
                        
                        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                          <div className="mdv-signup-form">
                              <div className="col-md-8">
                                  <div className="col-lg-6">
                                    <div className="h">
                                       <input type='text'
                                        className="form-control signupinputs mrg" 
                                        onChange={this.handleChange}
                                        value={this.state.fields.first_name} 
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
                                           onChange={this.CompanyNameHandler} 
                                           value={this.company_name}
                                           placeholder="Company Name"/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                       <div className="from-group">
                                          <select class="form-control signupinputs" id="sel1">
                                             <option>Industry Type</option>
                                             <option>2</option>
                                             <option>3</option>
                                             <option>4</option>
                                          </select>
                                      </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="from-group">
                                         <input type='text' 
                                           className="form-control signupinputs mrg" 
                                           onChange={this.CompanyEmailHandler} 
                                           value={this.company_email}
                                           placeholder="Your Company email ID"/>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="from-group">
                                        <input type='text' 
                                          className="form-control signupinputs" 
                                          onChange={this.PhoneNoHandler} 
                                          value={this.phone_no}
                                          placeholder="Phone Number"/>
                                     </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="from-group">
                                          <input type='text' 
                                            className="form-control signupinputs" 
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
                                          placeholder="Comfirm Password"/>
                                      </div>
                                   </div>
                                </div> 
                               </div>
                               <div className="col-md-4">
                                   <div className="col-md-6 signup-upload-title">
                                      <label>Upload Company ID Card</label>
                                      <div className="signup-upload-id">
                                         <ul>
                                            <li> <i className="btn mdv-company-icon"><i className='fas fa-camera'></i></i></li>
                                            <li> <div class="upload-btn-wrapper">
                                                    <i class="btn btn mdv-company-icon" 
                                                    onChange={this.handleChange}>
                                                    <img src="image/icons/file.png" className="bio2-file" /> </i>
                                                    <input type="file" onChange={this.handleChange}/>
                                                 </div>
                                            </li>
                                         </ul>
                                    </div>
                                  </div>
                               </div>
                            <div class="col-md-12 form-group text-center">
                            
                            <Link to="/industry"><input type="submit" className="btn mdv-signup-btn" value="Register" /></Link>
                        </div>
                        </form>
                      
                        <div class="col-md-12 form-group signup-text">
                           A Already User ? <Link to="/Login">Login</Link>
                           
                        </div>
                   </div>  
                           
               </div>
           </div>
           <Footer/>
       </div>
    )
    }
}

export default Signup;
