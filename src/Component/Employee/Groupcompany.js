import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import  MultiSelectReact  from 'multi-select-react';




class Groupcompany extends Component{
  
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
                               <li><Link to="/company"><button className="btn mdv-company-icons"><i className='far fa-building'></i></button></Link> </li>
                               <li> <button className="btn mdv-company-icons"><i className='fas  fa-users'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='far  fa-bell'></i> </button></li>
                            </ul>
                            <p>Add a Member</p>
                         </div>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-row company-form">
                               <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="member Email Id/Cambio Id" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs" 
                                     placeholder="Member Phone Number" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                               </div>
                                <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input" 
                                     placeholder="How old isss the company" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs" 
                                     placeholder="Company Website" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input mvd-mrg" 
                                     placeholder="Company Industry Location / Address" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group company-use-gps col-md-6">
                                   <ul>
                                       <li><button>Enter Location</button></li>
                                       <li><button>Use GPS Location</button></li>
                                   </ul>
                                   <input 
                                      className="form-control company-inputs" 
                                      placeholder="Enter Office Location" 
                                      type="text" 
                                      value={this.state.value} 
                                      onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-10 offset-md-4">
                                   <input 
                                     className="form-control company-braches-inputs  mdv-first-input" 
                                     placeholder="Company Branches" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />



      
                               </div>
                               <div className="form-group col-md-6">
                                   <p className="abt-cmpny">About the Company</p>
                                   <textarea 
                                     className="form-control company-textarea mdv-first-input" 
                                     placeholder="Please write yourself in 250 words" 
                                     type="text" 
                                     value={this.state.value} 
                                     onChange={this.handleChange} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <p className="compamy-logo">Company Logo</p>
                                   <div className="company-textarea text-center">
                                       <ul>
                                           <li><i className='fas fa-camera mdv-company-camera'></i><br />camera</li>
                                           <li><i className='fas fa-camera mdv-company-camera'></i><br />Gallery</li>
                                       </ul>
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

export default Groupcompany;
