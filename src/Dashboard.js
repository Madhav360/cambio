import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class Dashboard extends Component{
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
                     <div className="dashboard-head ">
                     
                         <h3 className="text-center">Dashboard</h3>
                     </div>
                     <div className="dashboardmenus">
                          <div class="flex-container">
                                  <div className="dashaboard-menuu text-center">
                                          <Link to ="postajob">
                                             <button className="btn">
                                                Post a job
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="active-job">
                                             <button className="btn">
                                                Active Jobs
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-all-jobs">
                                             <button className="btn">
                                             All Jobs
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-expire-jobs">
                                             <button className="btn">
                                             Expired Jobs
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="applicants">
                                             <button className="btn">
                                             Applicants
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-reschedule-interviews">
                                             <button className="btn">
                                             Rescheduled<br /> Interviews
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-current-interviews">
                                             <button className="btn">
                                             Current <br />
                                              Interviews
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-complited-interviews">
                                             <button className="btn">
                                             Complited <br />
                                      Interviews
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="/employer-upcoming-interviews">
                                             <button className="btn">
                                             Upcoming <br />
                                      Interviews
                                             </button>
                                         </Link>
                                    </div>
                                    <div className="dashaboard-menuu text-center">
                                          <Link to ="#">
                                             <button className="btn">
                                             All <br />
                                      Interviews
                                             </button>
                                         </Link>
                                    </div>
                                
                           </div>
                           <div className="mg-20 lc"></div>
                     </div>                        
                   </div> 
                </div>
               
            </div>
        )
    }
}
export default Dashboard;