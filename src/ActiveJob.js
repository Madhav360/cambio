import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class ActiveJob extends Component{
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
                           <h3 className="text-center">Active Jobs</h3>
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
                   {/* -----------------------Job Requirement section start here------------------------------ */}
                   <section className="job-requirement">
                       <div className="col-md-6">
                           <div className="row jobrequirements">
                                    <div class="dropdown active-job-dropdown">
                                       <i class="fas fa-ellipsis-v dropdown-toggle dottedicon" data-toggle="dropdown"></i>
                                       <ul class="dropdown-menu active-job-dropdown-menu">
                                          <li><a href="#">On hold</a></li>
                                          <li><a href="#">Rescheduled</a></li>
                                          <li><a href="#">Select</a></li>
                                        </ul>
                                    </div>
                                  <p className="requirement-heading">Required Java Developer urgently</p>
                                  <div className="col-md-4">
                                     <p className="postedon">Posted on</p>
                                     <p className="postedondate">16th July 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="postedon">Expire on</p>
                                     <p className="postedondate">16th Aug 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="totalapplicent">25</p>
                                     <p className="postedondatea">Applicent</p>
                                  </div>
                                  <div className="">
                                  </div>
                           </div>
                       </div>
                   </section>

                   {/* ------------------------Second requirement------------------------------- */}
                   <section className="job-requirement">
                       <div className="col-md-6">
                           <div className="row jobrequirements">
                                    <div class="dropdown active-job-dropdown">
                                       <i class="fas fa-ellipsis-v dropdown-toggle dottedicon" data-toggle="dropdown"></i>
                                       <ul class="dropdown-menu active-job-dropdown-menu">
                                          <li><a href="#">On hold</a></li>
                                          <li><a href="#">Rescheduled</a></li>
                                          <li><a href="#">Select</a></li>
                                        </ul>
                                    </div>
                                  <p className="requirement-heading">Required Java Developer urgently</p>
                                  <div className="col-md-4">
                                     <p className="postedon">Posted on</p>
                                     <p className="postedondate">16th July 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="postedon">Expire on</p>
                                     <p className="postedondate">16th Aug 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="totalapplicent">25</p>
                                     <p className="postedondatea">Applicent</p>
                                  </div>
                                  <div className="">
                                  </div>
                           </div>
                       </div>
                   </section>
                    {/* ------------------------Second requirement------------------------------- */}
                    <section className="job-requirement">
                       <div className="col-md-6">
                           <div className="row jobrequirements">
                                    <div class="dropdown active-job-dropdown">
                                       <i class="fas fa-ellipsis-v dropdown-toggle dottedicon" data-toggle="dropdown"></i>
                                       <ul class="dropdown-menu active-job-dropdown-menu">
                                          <li><a href="#">On hold</a></li>
                                          <li><a href="#">Rescheduled</a></li>
                                          <li><a href="#">Select</a></li>
                                        </ul>
                                    </div>
                                  <p className="requirement-heading">Required Java Developer urgently</p>
                                  <div className="col-md-4">
                                     <p className="postedon">Posted on</p>
                                     <p className="postedondate">16th July 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="postedon">Expire on</p>
                                     <p className="postedondate">16th Aug 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="totalapplicent">25</p>
                                     <p className="postedondatea">Applicent</p>
                                  </div>
                                  <div className="">
                                  </div>
                           </div>
                       </div>
                   </section>
                    {/* ------------------------Second requirement------------------------------- */}
                    <section className="job-requirement">
                       <div className="col-md-6">
                           <div className="row jobrequirements">
                                    <div class="dropdown active-job-dropdown">
                                       <i class="fas fa-ellipsis-v dropdown-toggle dottedicon" data-toggle="dropdown"></i>
                                       <ul class="dropdown-menu active-job-dropdown-menu">
                                          <li><a href="#">On hold</a></li>
                                          <li><a href="#">Rescheduled</a></li>
                                          <li><a href="#">Select</a></li>
                                        </ul>
                                    </div>
                                  <p className="requirement-heading">Required Java Developer urgently</p>
                                  <div className="col-md-4">
                                     <p className="postedon">Posted on</p>
                                     <p className="postedondate">16th July 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="postedon">Expire on</p>
                                     <p className="postedondate">16th Aug 2019</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="totalapplicent">25</p>
                                     <p className="postedondatea">Applicent</p>
                                  </div>
                                  <div className="">
                                  </div>
                           </div>
                       </div>
                   </section>
                 </div> 
                </div>
            </div>
        )
    }
}
export default ActiveJob;