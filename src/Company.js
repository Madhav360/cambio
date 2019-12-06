import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class Company extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
            your_designation: '',
            how_old_comapany: '',
            company_website: '',
            company_loaction: '',
            office_location: '',
            company_branches: '',
            about_yourself: '',

        };
        this.YourDesignationHandler = this.YourDesignationHandler.bind(this);
        this.HowOldCompanyHandler = this.HowOldCompanyHandler.bind(this);
        this.ComplanyWebsiteHandler = this.ComplanyWebsiteHandler.bind(this);
        this.CompanyLoactionHandler = this.CompanyLoactionHandler.bind(this);
        this.OfficeLocationHandler = this.OfficeLocationHandler.bind(this);
        this.CompanyBranchesHandler = this.CompanyBranchesHandler.bind(this);
        this.AboutYourSelfHandler = this.AboutYourSelfHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      YourDesignationHandler(event) {
        this.setState({your_designation: event.target.value});
      }
      HowOldCompanyHandler(event) {
        this.setState({how_old_comapany: event.target.value});
      }
      ComplanyWebsiteHandler(event) {
        this.setState({company_website: event.target.value});
      }
     CompanyLoactionHandler(event) {
        this.setState({company_loaction: event.target.value});
      }
      OfficeLocationHandler(event) {
        this.setState({office_location: event.target.value});
      }
      CompanyBranchesHandler(event) {
        this.setState({company_branches: event.target.value});
      }
      AboutYourSelfHandler(event) {
        this.setState({about_yourself: event.target.value});
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
                               <li> <button className="btn mdv-company-icons basic-active"><i className='far fa-building'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='fas  fa-users'></i></button></li>
                               <li><button className="btn mdv-company-icons"><i className='far  fa-bell'></i> </button></li>
                            </ul>
                            <p>Basic</p>
                         </div>
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-row company-form">
                               <div className="form-group col-md-6">
                                   <input 
                                      className="form-control mdv-first-input company-inputs" 
                                      placeholder="Your Designation" 
                                      type="text" 
                                      value={this.state.your_designation} 
                                      onChange={this.YourDesignationHandler} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <select class="form-control company-inputs" id="sel1">
                                       <option>Type of Company</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input" 
                                     placeholder="How old is the company" 
                                     type="text" 
                                     value={this.state.how_old_comapany} 
                                     onChange={this.HowOldCompanyHandler} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs" 
                                     placeholder="Company Website" 
                                     type="text" 
                                     value={this.state.company_website} 
                                     onChange={this.ComplanyWebsiteHandler} 
                                    />
                               </div>
                               <div className="form-group col-md-6">
                                   <input 
                                     className="form-control company-inputs mdv-first-input mvd-mrg" 
                                     placeholder="Company Industry Location / Address" 
                                     type="text" 
                                     value={this.state.company_loaction} 
                                     onChange={this.CompanyLoactionHandler} 
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
                                      value={this.state.office_location} 
                                      onChange={this.OfficeLocationHandler} 
                                    />
                               </div>
                               <div className="form-group col-md-10 offset-md-4">
                                   <input 
                                     className="form-control company-braches-inputs  mdv-first-input" 
                                     placeholder="Company Branches" 
                                     type="text" 
                                     value={this.state.company_branches} 
                                     onChange={this.CompanyBranchesHandler} 
                                    />

{/* <MultiSelectReact 
      options={this.state.multiSelect}
      optionClicked={this.optionClicked.bind(this)}
      selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
      selectedOptionsStyles={selectedOptionsStyles}
      optionsListStyles={optionsListStyles}
      isTextWrap={true} /> */}


      
                               </div>
                               <div className="form-group col-md-6">
                                   <p className="abt-cmpny">About the Company</p>
                                   <textarea 
                                     className="form-control company-textarea mdv-first-input" 
                                     placeholder="Please write yourself in 250 words" 
                                     type="text" 
                                     value={this.state.about_yourself} 
                                     onChange={this.AboutYourSelfHandler} 
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
                           <div className="col-md-12">
                               <div className="company-nxt-skip text-center">
                                   <Link to="/group"><button className="btn">next</button> </Link>
                                   <Link to="/group">SKIP</Link>
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
