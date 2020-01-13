import React, {Component } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import Sidebar from './Sidebar';
import CurrentInterviews from './CurrentInterviews';



class EmployerCurrentInterviews extends Component{
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
                           <h3 className="text-center">Current Interviews</h3>
                        </div>                            
                 
                   
                 {/* ----------------- Active people------------------ */}
                 <section className="Aactiveples">
                     <div className="col-md-12">
                          <div className=" row active-people">
                             <div class="flex-container">
                                <div className="active-peple-load-more" data-toggle="modal" data-target="#loadmorepeople">
                                    <img src="image/icons/shikhar.jpg" />
                                    <span>+23</span>
                                    <p>Chen</p>
                                    
                                </div>
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div>
                                   <img src="image/icons/shikhar.jpg" />
                                   <p>Jacob</p>
                                </div>  
                                <div>
                                   <img src="image/icons/shikhar.jpg" />
                                   <p>Jacob</p>
                                </div>
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>  
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div className="inactive-people">
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div className="inactive-people">
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                              </div> 
                          </div>
                     </div>

                     {/* ----------------------------active people more pop up---------------------- */}
                     <div id="loadmorepeople" class="modal fade" role="dialog">
                        <div className="modal-dialog">
                           <div className="modal-content">
                               <div className=" ">
                               <i class="material-icons active-more-job-pop-close" data-dismiss="modal">close</i>
                               </div>
                               <div class="modal-body active-people">
                               <div class="flex-container">
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div>
                                   <img src="image/icons/shikhar.jpg" />
                                   <p>Jacob</p>
                                </div>  
                                <div>
                                   <img src="image/icons/shikhar.jpg" />
                                   <p>Jacob</p>
                                </div>
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>  
                                <div>
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div className="inactive-people">
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                                <div className="inactive-people">
                                    <img src="image/icons/shikhar.jpg" />
                                    <p>Jacob</p>
                                </div>
                              </div> 
                               </div>
                            </div>
                       </div>
                    </div>

       {/* ------------------------------active people more end here--------------------------- */}
                   </section>
                  {/* ------------------- Applicants people start------------------------ */}
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
export default EmployerCurrentInterviews;