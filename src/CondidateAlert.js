import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider'




class CandidateAlert extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
            volume: 0
          }
    
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
       


	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="  text-center">
                           <h2>Company</h2>
                         </div>
                         <div className="company text-center">
                            <ul>
                               <li><button className="btn mdv-company-icons"><i className='far fa-building'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='fas  fa-users'></i></button></li>
                               <li><button className="btn mdv-company-icons basic-active" type="text"><i className='far  fa-bell'></i> </button></li>
                            </ul>
                            <p>Basic</p>
                            <p>This will allow you to get notified on any<br />
                                New Candidate matches these crieria you <br />
                                have set
                            </p>
                         </div>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-row company-form">
                               <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="Designation" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                               <input 
                                     className="form-control company-inputs" 
                                     placeholder="Qualiﬁcation" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs mvd-mrg" 
                                      placeholder="Shift" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6 condalert">
                                   <ul>
                                       <li><button className="btn">Enter Location</button></li>
                                       <li><button className="btn">Use GPS Location</button></li>
                                   </ul>
                               <input 
                                     className="form-control company-inputs" 
                                     placeholder="Location" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="Type Of Employment" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                               <input 
                                     className="form-control company-inputs" 
                                     placeholder="Employment Category" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="Industry Category" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
      
                                </div>
                               
                                <div className="col-md-12">
                                  <div className="alert-nxt text-center">
                                     <Link to="/employee-lets-build-profile"><button className="btn" type="submit">Save</button> </Link>
                                  </div>
                                </div>
                               
                            </div>  
                                                  
                       </form>
                   </div>  
               </div>
           </div>
       </div>
    )
    }

}

export default CandidateAlert;
