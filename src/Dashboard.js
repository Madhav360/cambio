import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Header from './common/Header'


class Dashboard extends Component{
    constructor(props){
        super(props)
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
                   <div class="row  mdv-singup-page"> 
                     <div className="dashboard-head ">
                     
                         <h3 className="text-center">Dashboard</h3>
                     </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                      Post a job
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                      Active Job
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                      All Job
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                      Expired Job
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                     Applicants
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                  Rescheduled<br /> Interviews
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                      Current <br />
                                      Interviews
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                  Upcomming <br />
                                      Interviews
                                  </button>
                              </Link>
                          </div>
                      </div>   
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                  Complited <br />
                                      Interviews
                                  </button>
                              </Link>
                          </div>
                      </div>
                      <div class="col-md-3 col-xs-4">
                          <div className="dashaboard-menu text-center">
                              <Link to ="#">
                                  <button className="btn">
                                  All <br />
                                      Interviews
                                  </button>
                              </Link>
                          </div>
                      </div>                        
                   </div> 
                </div>
            </div>
        )
    }
}
export default Dashboard;