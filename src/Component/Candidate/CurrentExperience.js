import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CurrentExperience extends Component{
    constructor(props){
        super(props);
       this.state ={
        startDate: new Date(),
        endDate: new Date(),
        total_experience: '',
        company_name: '',
        designation: '',

       }
       this.TotalExpHandler = this.TotalExpHandler.bind(this);
       this.CompanyNameHandler = this.CompanyNameHandler.bind(this);
       this.DesignationHandler = this.DesignationHandler.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
   
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
      EndDateHandler = date => {
        this.setState({
          endDate: date
        });
      };
      
      TotalExpHandler(event) {
        this.setState({total_experience: event.target.value});
      }

      CompanyNameHandler(event) {
        this.setState({company_name: event.target.value});
      }

      DesignationHandler(event) {
        this.setState({designation: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
      }
        
      onChange = date => this.setState({ date })
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Education & Works</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/edu.png" /></li>
                                    <li><img src="image/student-icon/workblue.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-6 offset-md-6 text-center candidate-basic-root basic-details">
                                   <button className="btn im-fresher-btn">i am a Fresher</button>
                                  <p className="resi-sub-head">Recent/Current Experience</p>
                                  <div className="col-md-12">
                                      <form onSubmit={this.handleSubmit}>
                                      <div className="form-group">
                                          <input 
                                          className="form-control current-exp-input"
                                          placeholder="Total Year of Experience"
                                          type="text"
                                          value={this.state.total_experience}
                                          onChange={this.TotalExpHandler}
                                          />
                                      </div>
                                      <div className="form-group">
                                          <input 
                                          className="form-control current-exp-input"
                                          placeholder="Name of the Company"
                                          type="text"
                                          value={this.state.company_name}
                                          onChange={this.CompanyNameHandler}
                                          />
                                      </div>
                                      <div className="form-group">
                                          <input 
                                          className="form-control current-exp-input"
                                          placeholder="Designation"
                                          type="text"
                                          value={this.state.designation}
                                          onChange={this.DesignationHandler}
                                          />
                                      </div>
                                      </form>
                                      
                                  </div>
                                  <div className="col-md-6">
                                       <div className="form-group">
                                           <label>From Date</label>
                                         <DatePicker
                                            className="currentdate"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                         />
                                       </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <label>To Date</label>
                                         <DatePicker
                                            className="currentdate"
                                            selected={this.state.endDate}
                                            onChange={this.EndDateHandler}
                                         />
                                       </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/candidate-bio"> <button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/candidate-bio">Skip</Link>
                                      </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CurrentExperience; 