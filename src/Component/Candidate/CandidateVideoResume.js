import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CandidateVideoResume extends Component{
    constructor(props){
        super(props);
       this.state ={
             about_us: '',
             special_talent: '',
             sport: '',

       }
       this.SportHandler = this.SportHandler.bind(this);
       this.AboutUsHandler = this.AboutUsHandler.bind(this);
       this.SpecialTalentHandler = this.SpecialTalentHandler.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
   
      AboutUsHandler(event){
          this.setState({
              about_us:event.target.value
          })
      }
      SportHandler(event){
          this.setState({
              sport:event.target.value
          })
      }
      SpecialTalentHandler(event){
        this.setState({
            special_talent:event.target.value
        })
    }
      handleSubmit(event) {
        event.preventDefault();
      }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Bio</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/bio-profile.png" /></li>
                                    <li><img src="image/student-icon/bio-about.png" /></li>
                                    <li><img src="image/student-icon/bio-video-active.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-9 offset-md-3 candidate-about-section">
                                <div className="col-md-6 resume-heading text-center">
                                    <h6>Video Resume</h6>
                                    <p>Upload a 30 Second Recruitment Vedio  For A Better Response Rate From Employer</p>
                                    <div className="video-resume">
                                      <ul>
                                        <li> <i className="btn mdv-company-icon"><i className='fas fa-camera'></i></i>
                                        </li>
                                        <li> <div class="upload-btn-wrapper">
                                             <i class="btn btn mdv-company-icon" 
                                             onChange={this.handleChange}>
                                             <img src="image/icons/file.png" className="bio2-file" /> </i>
                                              <input type="file" onChange={this.handleChange}/>
                                              </div>
                                         </li>
                                      </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 resume-heading text-center">
                                    <h6>Resume/CV</h6>
                                    <p>Upload a Short And Simple Bio-Data</p>
                                    <div className="video-resume video-resumee">
                                    <ul>
                                        <li> <i className="btn mdv-company-icon"><i className='fas fa-camera'></i></i>
                                        </li>
                                        <li> <div class="upload-btn-wrapper">
                                             <i class="btn btn mdv-company-icon" 
                                             onChange={this.handleChange}>
                                             <img src="image/icons/file.png" className="bio2-file" /> </i>
                                              <input type="file" onChange={this.handleChange}/>
                                              </div>
                                         </li>
                                     </ul>
                                    </div>
                                </div>
                               <div className="col-md-6">

                               </div>
                            </div>
                            <div className="col-md-12">
                               <div className="basic-nxr-btn text-center">
                                    <Link to="/candidate-account-recovery"> <button className="btn">Next</button></Link>
                               </div>
                            </div>
                            <div className="col-md-12">
                                <div className="basic-skip text-center">
                                  <Link to="/candidate-account-recovery">Skip</Link>
                                 </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default CandidateVideoResume; 

