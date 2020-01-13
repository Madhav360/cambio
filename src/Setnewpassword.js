import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class Setnewpassword extends Component{
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
                           <h2>Set a New Password</h2>
                           
                          
                          <img src="image/icons/setpass.png" alt="forgot password" />
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="col-md-4 offset-md-8 accout-recover-input form-group">
                        
                             <input 
                                className="form-control" 
                                type="email"
                                placeholder="Enter New password" 
                                value={this.state.value} 
                                onChange={this.handleChange} />
                            <input 
                                className="form-control" 
                                type="email"
                                placeholder="Repeat Password" 
                                value={this.state.value} 
                                onChange={this.handleChange} />
                             
                         </div>
                         <div className="col-md-12 company-skip-btn text-center lc">
                             <Link to="/login">  <buttom className="btn company-skip">Next</buttom><br /></Link>

                             
                              
                         </div>
                         </form>
                     </div>    
               </div>
           </div>
       </div>
    )
    }
}

export default Setnewpassword;
