import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';


class Applicants extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate: new Date(),
            time: '10:00',
            est_duration: '',
        }

        this.EstDurationHandler = this.EstDurationHandler.bind(this);
    }
    
    EstDurationHandler(event){
        this.setState(
            {est_duration:event.target.value}
        )
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    onChange = date => this.setState({ date })
    onTime = time => this.setState({ time })
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
                           <h3 className="text-center">Applicants</h3>
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
        {/* ----------------------------- Applicants people end------------------------------------- */}
                   <div className="viewchat text-center">
                       <button className="btn">Interview</button>
                       <button className="btn">Chat</button>
                   </div>
                   <div className="applicant-rounds text-center">
                       <Link to="#">Round 1</Link>
                       <Link to="#">Round 2</Link>
                   </div>

                   {/* --------------applicant profile---------------------- */}
                   <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="row modal-dialog schedulepop-dialog">
                          <div class="row modal-content">
                               <div class="schedule-close-pop">
                                   <i class="material-icons close" data-dismiss="modal">close</i>
                               </div>
                               <div class="modal-body schedule-modal-body">
                                 <h3>Schedule an interview</h3>
                                </div>
                                <div className="col-sm-6">
                                   <div class="form-group">
                                       <label >Select interview date</label><br />
                                           <div className="">
                                               <DatePicker
                                               className="select-interview-date"
                                               selected={this.state.startDate}
                                               onChange={this.handleChange}
                                               />
                                           </div>
                                        </div>
                                </div>
                                   <div className="col-sm-6">
                                   <div class="form-group">
                                        <label >Select interview Time</label><br />
                                           <div className="">
                                              <TimePicker
                                                 className="select-interview-date"
                                                 onChange={this.onTime}
                                                 value={this.state.time}
                                               />
                                            </div>
                                    </div>
                                  </div>
                                   <div className="col-sm-6">
                                       <div class="form-group">
                                           <select class="form-control select-interview-rounds-input" id="sel1">
                                              <option>Select Interview Round</option>
                                              <option>2</option>
                                              <option>3</option>
                                               <option>4</option>
                                           </select>
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="form=group">
                                           <input 
                                             className="form-control select-interview-rounds-input"
                                             placeholder="Estimated Interview Duration(in mins)"
                                             type="text"
                                             value={this.state.est_duration}
                                             onChange={this.EstDurationHandler}
                                             />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label>Mode of Interview</label>
                                    </div>
                                    <div className="col-md-4 popup-mode-interview text-center">
                                        <button className="btn">
                                            <img src="image/icons/smartinterview.png" /><br />Smart Interview
                                        </button>
                                    </div>
                                    <div className="col-md-4 popup-mode-interview text-center">
                                        <button className="btn">
                                            <img src="image/icons/traditionalinterview.png" /><br />Traditional<br /> Interview
                                        </button>
                                    </div>
                                    <div className="col-md-4 popup-mode-interview text-center">
                                        <button className="btn">
                                            <img src="image/icons/bothinterview.png" /><br />Both
                                        </button>
                                    </div>
                                    <div className="col-md-12 text-center Schedule-btn">
                                        <button className="btn">Schedule</button>
                                    </div>
                                </div>
                               
                             
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}

                                      {/* --------------applicant profile---------------------- */}
                                      <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div class="modal-body">
                                 <p>Schedule an interview</p>
                                </div>
                            </div>
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}

                                      {/* --------------applicant profile---------------------- */}
                      <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div class="modal-body">
                                 <p>Schedule an interview</p>
                                </div>
                            </div>
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}


                                      {/* --------------applicant profile---------------------- */}
                                      <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div class="modal-body">
                                 <p>Schedule an interview</p>
                                </div>
                            </div>
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}

                                      {/* --------------applicant profile---------------------- */}
                                      <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div class="modal-body">
                                 <p>Schedule an interview</p>
                                </div>
                            </div>
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}

                                      {/* --------------applicant profile---------------------- */}
                                      <div className="col-xs-12 col-md-4">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src="image/icons/shikhar.jpg" />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9 hh">
                               <div className="applicants-data">
                                   <p className="applicants-name">Luis Felipe</p>
                                   <p className="applicants-company">Deuglo</p>
                               </div>
                           </div>
                           <div className="col-xs-4 col-md-4 applicant-schidule">
                               <ul>
                                       <li><i class="material-icons">call</i></li>
                                       <li><i class="material-icons">videocam</i></li>
                                       <li><i class="material-icons">chat_bubble</i></li>
                                </ul>
                           </div>
                           <div className="col-xs-8 col-md-8">
                           <p className="scheduled" data-toggle="modal" data-target="#schedulepopup">SCHEDULED</p>
                           </div>
                           <div className="col-xs-12 col-md-12 horizantal"></div>
                           <div className="col-xs-4 col-md-4">
                               <p className="scheduled-time-date">11th Oct , Fri</p>
                           </div>
                           <div className="col-xs-3 col-md-3">
                               <p className="scheduled-time-date">11:30 PM</p>
                           </div>
                           <div className="col-xs-5 col-md-5">
                               <p className="scheduled-time-date">Smart Interview</p>
                           </div>
                       </div>
                   </div>

                  {/* -----------------schedule popup start here-------------------------- */}

                  <div id="schedulepopup" class="modal fade" role="dialog">
                      <div class="modal-dialog">
                          <div class="modal-content">
                               <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div class="modal-body">
                                 <p>Schedule an interview</p>
                                </div>
                            </div>
                        </div>
                    </div>



                  {/* ------------------schedule popup end here---------------------------------- */}
  


                   {/* --------------------profile applicant end--------------------- */}
                 </div> 
                </div>
            </div>
        )
    }
}
export default Applicants;