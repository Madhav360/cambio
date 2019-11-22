import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Header from './common/Header'


class Post_a_Job extends Component{
    constructor(props){
        super(props)
        this.state={
            job_title : '',
            job_type : '',
            job_description : '',
            qualiﬁcation : '',
            shift : '',
        }
    }

    handleJobType = (event) => {
        this.setState({
            job_type : event.target.value
        })
    }

    handleJobDedcription = (event) =>{
        this.setState({
            job_description : event.target.value
        })
    }
    QualiﬁcationHandler =(event) =>{
        this.setState({
            qualiﬁcation : event.target.value
        })
    }
    ShiftHandler =(event) =>{
        this.setState({
            shift : event.target.value
        })
    }


    render(){
        return(
            <div>
                <Header />
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p>Back</p>
                   <div class="row  dashpagewidth"> 
                     <div className="postajob-head ">
                     
                         <h3 className="text-center">Post a Job</h3>
                     </div>
                     <div className="post-job-form">
                     <form>
                        <div className="col-md-6">
                           <div class="form-group">
                              <input 
                               type="text" 
                               class="form-control postinput" 
                               placeholder="Job Title" 
                               value={this.state.jov_title}
                               onChange={this.JobTitleHandler} />
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div class="form-group">
                              <select 
                                  value={this.state.job_type}
                                  onChange={this.handleJobType}
                                  class="form-control postinput">
                                 <option>Job Type</option>
                                 <option>2</option>
                                 <option>3</option>
                                <option>4</option>
                                </select>
                           </div>
                         </div>
                             <div class="col-md-12 form-group">
                                <label for="comment">Job Description</label>
                                   <textarea 
                                      class="form-control desciptiontextarea" 
                                      placeholder="Please write Job Description"
                                      value={this.state.job_description}
                                      onChange={this.handleJobDedcription}
                                      rows="5" 
                                      id="comment">
                                   </textarea>
                               </div>
                               <div className="col-md-6">
                           <div class="form-group">
                              <input 
                               type="text" 
                               class="form-control postinput" 
                               placeholder="Qualiﬁcation" 
                               value={this.state.qualification}
                               onChange={this.QualiﬁcationHandler} />
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div class="form-group">
                              <input 
                               type="text" 
                               class="form-control postinput" 
                               placeholder="Shift" 
                               value={this.state.shift}
                               onChange={this.ShiftHandler} />
                           </div>
                         </div>
                         <div className="col-md-6">
                          <div className="cabs">
                              <p>Cabs</p>
                              <ul>
                                  <li><button className="btn">Yes</button></li>
                                  <li><button className="btn">No</button></li>
                              </ul>
                          </div>
                         </div>
                         <div className="col-md-6">
                           <div class="form-group">
                               <label>Salary</label>
                              <input 
                               type="text" 
                               class="form-control postinput" 
                               placeholder="Qualiﬁcation" 
                               value={this.state.qualification}
                               onChange={this.QualiﬁcationHandler} />
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
export default Post_a_Job;