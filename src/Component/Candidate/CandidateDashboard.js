import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class CandidateDashboard extends Component{
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
                     <div className="col-md-12">
                       <div className="dashboardmenus text-center">
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-saved">
                                  <button className="btn">Search Job</button>
                              </Link>
                          </div>
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-current-interview">
                                  <button className="btn">Current<br /> Interviews</button>
                              </Link>
                          </div>
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-upcoming-interview">
                                  <button className="btn">Upcoming<br /> Interviews</button>
                              </Link>
                          </div>
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-all-applied-job">
                                  <button className="btn">All applied jobs</button>
                              </Link>
                          </div>
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-matched-job">
                                  <button className="btn">Matched Jobs</button>
                              </Link>
                          </div>
                          <div className="col-md-4 candidate-dashboard-menu">
                              <Link to="/candidate-complited-interviews">
                                  <button className="btn">Completed <br />Interviews</button>
                              </Link>
                          </div>
                       </div> 
                     </div>                       
                   </div> 
                </div>
               
            </div>
        )
    }
}
export default CandidateDashboard;