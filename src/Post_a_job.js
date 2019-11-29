import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class Post_a_Job extends Component{
    constructor(props){
        super(props)
        this.state={
            job_title : '',
            job_type : '',
            job_description : '',
            qualiﬁcation : '',
            exp : '',
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
    ExpHandler =(event) =>{
        this.setState({
            exp : event.target.value
        })
    }


    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
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
                                       placeholder="Experience" 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
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
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Enter From annual CTC(in LPA)" 
                                       value={this.state.shift}
                                       onChange={this.ShiftHandler} />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                   <div className="useloactionfrom">
                                       <label>Company industry Location / Address</label>
                                       <ul>
                                           <li><button className="btn">Use My Location</button></li>
                                           <li><button className="btn">Enter Location</button></li>
                                       </ul>
                                   </div>
                               </div>
                               
                               <div className="col-md-6">
                                   <div className="cabs">
                                       <label>Cab</label><br />
                                       <ul>
                                           <li><button className="btn">Yes</button></li>
                                           <li><button className="btn">No</button></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="col-md-12">
                                   <div className="form-group">
                                      <label for="comment">Process</label>
                                         <textarea 
                                           class="form-control desciptiontextarea" 
                                           placeholder="Enter Process"
                                           value={this.state.job_description}
                                           onChange={this.handleJobDedcription}
                                           rows="5" 
                                           id="comment">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Enter From Age (in years)" 
                                       value={this.state.qualification}
                                       onChange={this.QualiﬁcationHandler} />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Enter To Age (in years)" 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
                                 </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Notice Period" 
                                       value={this.state.qualification}
                                       onChange={this.QualiﬁcationHandler} />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Job Role/Designation" 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
                                 </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Number of Positions" 
                                       value={this.state.qualification}
                                       onChange={this.QualiﬁcationHandler} />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                   <div className="cabs">
                                       <label>Gender</label><br />
                                       <ul>
                                           <li><button className="btn">Male</button></li>
                                           <li><button className="btn">Female</button></li>
                                           <li><button className="btn">Others</button></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="col-md-6 offset-md-6">
                                  <label class="md-container">Willing to hire any candidate with<br />Special disability ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                               </div>
                               <div className="col-md-12">
                                   <label>create interview Panel for this job requirement</label>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Select Interview" 
                                       value={this.state.qualification}
                                       onChange={this.QualiﬁcationHandler} />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <input 
                                       type="text" 
                                       class="form-control postinput" 
                                       placeholder="Interview Round Name" 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
                                 </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <label>Last day to apply</label>
                                 </div>
                               </div>
                               <div className="col-md-6">
                                  <div class="form-group">
                                     <label>Last day of post</label>
                                 </div>
                               </div>
                               <div className="col-md-12">
                                   <div className="form-group">
                                      <label for="comment">Special Comment Box</label>
                                         <textarea 
                                           class="form-control desciptiontextarea" 
                                           placeholder="Enter Comment"
                                           value={this.state.job_description}
                                           onChange={this.handleJobDedcription}
                                           rows="5" 
                                           id="comment">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                   <div className="cabs">
                                       <label>Willing to hire any candidate with <br /> Special disability ? </label><br />
                                       <ul>
                                           <li><button className="btn">Yes</button></li>
                                           <li><button className="btn">No</button></li>
                                          
                                       </ul>
                                   </div>
                                   <div className="">
                                      <label class="md-container hire">Intersted in part time
                                       <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  <label class="md-container hire">Ready to work on weekends ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  <label class="md-container hire">Flexible shift ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  <label class="md-container hire">Ready to sign contract ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  <label class="md-container hire">Ok to travel ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  <label class="md-container hire">Intersted in sales ?
                                     <input type="checkbox"  />
                                     <span class="checkmark"></span>
                                  </label>
                                  

                                   </div>
                                   <div className="col-md-12">
                                   <label for="comment">My Questions</label>
                                   </div>

                                   <div className="col-md-12">
                                   <div className="form-group">
                                     
                                      <input 
                                       type="text" 
                                       class="form-control postinput postq" 
                                       placeholder="What is..." 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
                                       <i class="material-icons myq-closeicon">close</i>
                                    </div>
                                   </div>
                                   <div className="col-md-12">
                                   <div className="form-group">
                                      <input 
                                       type="text" 
                                       class="form-control postinput postq" 
                                       placeholder="What is..." 
                                       value={this.state.exp}
                                       onChange={this.ExpHandler} />
                                         <i class="material-icons myq-closeicon">close</i>
                                    </div>
                                   </div>
                                   <div className="col-md-12">
                                       <p className="text-center post-add-more">Add More</p>
                                   </div>
                                   <div className="col-md-12 mode-inter-head">
                                       <label>Mode of Interview</label>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="mode-of-interview text-center">
                                            <button className="btn">
                                                <img src="image/icons/smartinterview.png"
                                                 alt="smart interview" /><br />
                                                 Smart Interview
                                            </button>
                                       </div>
                                       <i class='fas fa-info interview-mode-info'></i>
                                    </div> 
                                    <div className="col-md-4">
                                       <div className="mode-of-interview text-center">
                                       <button className="btn">
                                                <img src="image/icons/traditionalinterview.png"
                                                 alt="smart interview" /><br /><br />
                                                 Traditional<br /> Interview
                                            </button>
                                       </div>
                                       <i class='fas fa-info interview-mode-info'></i>
                                    </div> 
                                    <div className="col-md-4">
                                       <div className="mode-of-interview text-center">
                                       <button className="btn">
                                                <img src="image/icons/bothinterview.png"
                                                 alt="smart interview" /><br />
                                                 Both
                                            </button>
                                       </div>
                                       <i class='fas fa-info interview-mode-info'></i>
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