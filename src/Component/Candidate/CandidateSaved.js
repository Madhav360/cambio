import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import CandidatesSaved from './CandidatesSaved';



class CandidateSaved extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
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
                           <h3 className="text-center">Saved Jobs</h3>
                        </div>                            
        {/* ----------------------------- Applicants people end------------------------------------- */}
                   

                   {/* --------------applicant profile---------------------- */}
                   <div className="col-md-8 offset-md-2 bg-primary">
                   <CandidatesSaved />
                   </div>
                   
                  

                   {/* --------------------profile applicant end--------------------- */}
                 </div> 
                </div>
            </div>
        )
    }
}
export default CandidateSaved;



