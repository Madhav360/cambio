import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class JobDetails extends Component{
    constructor(props){
        super(props)
       
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
                     <div className="col-md-12 postajob-head ">
                        <h5>hgvhg</h5>
                         <h3 className="text-center">Job Details</h3>
                     </div>
                     <div className="col-md-12 details-page-width">
                         <h4>Required Java Developer urgenty</h4>
                           <div className="col-md-3">
                              <div className="jobdetails">
                                <h4>Posted on</h4>
                                <p>16th june 2019</p>
                              </div>
                           </div> 
                           <div className="col-md-3">
                               <div className="jobdetails">
                                 <h4>Expires on</h4>
                                 <p>16th june 2019</p>
                              </div>
                           </div> 
                           <div className="col-md-6">
                              <div className="jobdetails">
                                 <h4>23</h4>
                                 <p>Applicant</p>
                             </div>
                           </div> 
                       </div>
                       <div className="col-md-12 details-page-width">
                           <div className="job-details-job-description">
                               <h4>Job Descriptions</h4>
                               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Job Type</h5>
                                   <p>2 months</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Qualification</h5>
                                   <p>Post Graduate</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Experience</h5>
                                   <p>2 months</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Shift</h5>
                                   <p>Day shift</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Salary</h5>
                                   <p>2.2 PLA</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Company Loaction</h5>
                                   <p>HSR Layout</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Job Type</h5>
                                   <p>2 months</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Cab</h5>
                                   <p>Yes</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Notice Period</h5>
                                   <p>2 Days</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Job Role/Designation</h5>
                                   <p>Full Time</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Number of Postions</h5>
                                   <p>2</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Gender</h5>
                                   <p>Male</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-12 details-page-width">
                       <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Type of Employment</h5>
                                   <p>Full Time</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Mode of Interview</h5>
                                   <p>Smart Interview</p>
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Interviewer</h5>
                                   <p>S.Lorem</p>
                                
                               </div>
                           </div>
                           <div className="col-md-3">
                               <div className="details-job-type">
                                   <h5>Interview Rounds</h5>
                                   <p>Round 3</p>
                              
                               </div>
                           </div>
                       </div>
                                                 
                   </div> 
                </div>
            </div>
        )
    }
}
export default JobDetails;