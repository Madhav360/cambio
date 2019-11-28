import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';


class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
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
                        <form>
                          <div className="mdv-signup-form">
                           <div className="col-lg-6">
                              <div className="h">
                              <input type='text' className="form-control signupinputs mrg" onChange={this.myChangeHandler} placeholder="First Name"/>
                              
                             
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.myChangeHandler} 
                                  placeholder="Last Name"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                    <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.myChangeHandler} 
                                     placeholder="Phone Number"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                 <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.myChangeHandler} 
                                  placeholder="Email Id"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                    <input type='text' 
                                     className="form-control signupinputs mrg" 
                                     onChange={this.myChangeHandler} 
                                     placeholder="Password"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                <input type='text' 
                                  className="form-control signupinputs" 
                                  onChange={this.myChangeHandler} 
                                  placeholder="Comfirm Password"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="from-group">
                                
                              </div>
                            </div>
                            <div className="col-lg-6">
                               <div className="h">
                                  
                                </div>
                            </div>
                          </div>
                          
                        </form>
                        <div class="form-group text-center">
                            
                            <Link to="/Role"><input type="submit" className="btn mdv-signup-btn" value="Submit" /></Link>
                        </div>
                        <div class="form-group signup-text">
                           A Already User ? <Link to="/Login">Signup</Link>
                           
                        </div>
                   </div>  
                           
               </div>
           </div>
       </div>
    )
    }
}

export default Signup;
