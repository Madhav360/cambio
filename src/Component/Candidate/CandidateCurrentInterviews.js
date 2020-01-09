import React, {Component } from 'react';
import Sidebar from './Sidebar';

import "react-datepicker/dist/react-datepicker.css";
import CurrentInterviews from './CurrentInterviews';



class CandidateCurrentInterviews extends Component{
   
 
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
                           <h3 className="text-center">Current Interview</h3>
                        </div>                            
        {/* ----------------------------- Applicants people end------------------------------------- */}
                   

                   {/* --------------applicant profile---------------------- */}
                 <CurrentInterviews />
                 <CurrentInterviews />
                 <CurrentInterviews />
                 <CurrentInterviews />

                    
                  
                   {/* --------------------profile applicant end--------------------- */}

                                     

                  
                 </div> 
                </div>
            </div>
        )
    }
}
export default CandidateCurrentInterviews;
