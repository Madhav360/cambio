import React from 'react';
import {Component} from 'react';
import Header from '../../common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';





class CandidateSetAJobAlert extends Component{
    constructor(props) {
        super(props);
        this.state = {
          designation : '',
          qualiﬁcation : '',
          shift : '',
          type_of_employment : '',
          employment_category : '',
          industry_category : '',
        };
        
    
        this.DesignationHandler = this.DesignationHandler.bind(this);
        this.ShiftHandler = this.ShiftHandler.bind(this);
        this.QualiﬁcationHandler = this.QualiﬁcationHandler.bind(this);
        this.TypeOfEmpHandler = this.TypeOfEmpHandler.bind(this);
        this.EmploymentCategoryHandler = this.EmploymentCategoryHandler.bind(this);
        this.IndustryCategoryHandler = this.IndustryCategoryHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      DesignationHandler(event) {
        this.setState({designation: event.target.value});
      }
      QualiﬁcationHandler(event) {
        this.setState({qualiﬁcation: event.target.value});
      }
      ShiftHandler(event) {
        this.setState({shift: event.target.value});
      }
      TypeOfEmpHandler(event) {
        this.setState({type_of_employment: event.target.value});
      }
      EmploymentCategoryHandler(event) {
        this.setState({employment_category: event.target.value});
      }
      IndustryCategoryHandler(event) {
        this.setState({industry_category: event.target.value});
      }
    
      handleSubmit(event) {
       
        event.preventDefault();
      }
    render(){
	return(
       <div>
          <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="account-recovery  text-center">
                           <h2>Set A Job Alert</h2>
                           <p>We will Notify you with your Customize job   alert detail</p>
                         </div>
                         <form onSubmit={this.handleSubmit}>
                         <div className="col-md-4 offset-md-8 accout-recover-input form-group">
                             <input 
                                className="form-control" 
                                type="text"
                                placeholder="Designation" 
                                value={this.state.designation} 
                                onChange={this.DesignationHandler} 
                            />
                            <input 
                                className="form-control" 
                                type="text"
                                placeholder="Qualiﬁcation" 
                                value={this.state.qualiﬁcation} 
                                onChange={this.QualiﬁcationHandler} 
                            />
                               <input 
                                className="form-control" 
                                type="text"
                                placeholder="Shift" 
                                value={this.state.shift} 
                                onChange={this.ShiftHandler} 
                            />
                             <div className="setjobalertuseloaction text-center">
                               <label>Location</label>
                                 <ul>
                                   <li><button className="btn">Use My Location</button> </li>
                                   <li><button className="btn">Enter Location</button></li>
                                 </ul>
                             </div>
                             <input 
                                className="form-control" 
                                type="text"
                                placeholder="Type Of Employment" 
                                value={this.state.type_of_employment} 
                                onChange={this.TypeOfEmpHandler} 
                            />
                            <input 
                                className="form-control" 
                                type="text"
                                placeholder="Employment Category" 
                                value={this.state.employment_category} 
                                onChange={this.EmploymentCategoryHandler} 
                            />
                               <input 
                                className="form-control" 
                                type="text"
                                placeholder="Industry category" 
                                value={this.state.industry_category} 
                                onChange={this.IndustryCategoryHandler} 
                            />
                              <input 
                                className="form-control" 
                                type="range"
                            />
                         </div>
                         <div className="col-md-12 company-skip-btn text-center">
                              <Link to="/iq-test"> <buttom className="btn company-skip">Next</buttom><br /></Link>
                             
                              
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

export default CandidateSetAJobAlert;
