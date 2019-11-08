import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class Company extends Component{
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
                               <li><img className="img-responsive" src="image/icons/buldingloc.png" /></li>
                               <li><img className="img-responsive" src="image/icons/group.png" /></li>
                               <li><img className="img-responsive" src="image/icons/bell.png" /></li>
                            </ul>
                         </div>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-row">
                               <div className="form-group col-md-6">
                                   <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                               </div>
                              <div className="form-group col-md-6">
                                  <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
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

export default Company;
