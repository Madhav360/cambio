import React, {Component } from 'react';
import Sidebar from './Sidebar';
import ComplitedInterviews from './ComplitedInterviews';
import "react-datepicker/dist/react-datepicker.css";



class CandidateComplitedInterviews extends Component{
   
 
    render(){

        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth role-height"> 
                        <div className="col-md-12 postajob-head ">
                           <h3 className="text-center">Complited Interviews</h3>
                        </div>                            
        {/* ----------------------------- Applicants people end------------------------------------- */}
                   

                   {/* --------------applicant profile---------------------- */}
                 
                    <ComplitedInterviews />
                    <ComplitedInterviews />
                    <ComplitedInterviews />
                    <ComplitedInterviews />
                  
                   {/* --------------------profile applicant end--------------------- */}

                                     

                  
                 </div> 
                </div>
            </div>
        )
    }
}
export default CandidateComplitedInterviews;
