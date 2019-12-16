import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CandidateAbout extends Component{
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
                                    <li><img src="image/student-icon/bio-about-active.png" /></li>
                                    <li><img src="image/student-icon/bio-video.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-9 offset-md-3 candidate-about-section">
                               <div className="col-md-6 candidate-about-us text-center">
                                    <label className="resi-sub-head">About You</label>      
                                    <div class="form-group">
                                        <div class="form-group">
                                           <textarea 
                                             class="form-control candidate-about-input" 
                                             placeholder="Please write about yourself in 250 words ..."
                                             rows="5"
                                             onChange={this.AboutUsHandler}
                                             value={this.state.about_us}
                                          />
                                   </div>
                                 </div>
                               </div>
                               <div className="col-md-6 candidate-about-us text-center">
                                   <label className="resi-sub-head">Special Talent</label>
                                       <div class="form-group">
                                           <div class="form-group">
                                              <textarea 
                                               class="form-control candidate-about-input" 
                                               placeholder="Please write about interests, sports, talents in 100 words ..."
                                               rows="5"
                                               onChange={this.SpecialTalentHandler}
                                               value={this.state.special_talent}
                                              />
                                        </div>
                                  </div>
                               </div>
                                   <div className="social-responsibility text-center">
                                       <p>Corporate Social Responsibility</p>
                                   </div>
                                   <div className="col-md-6 social-responsibility">
                                       <button className="btn">Environment and carbon footprint</button>
                                   </div>
                                   <div className="col-md-6 social-responsibility">
                                       <button className="btn">Education and nourishment of underprivileged <br /> children and women</button>
                                   </div>
                                   <div className="col-md-6 social-responsibility">
                                       <button className="btn">Access to clean and potable water for all</button>
                                   </div>
                                   <div className="col-md-6 social-responsibility">
                                       <button className="btn">Animal rights protection</button>
                                   </div>
                                   <div className="col-md-6 social-responsibility">
                                       <button className="btn">HIV/Cancer</button>
                                   </div>
                                   <div className="col-md-12 candidate-about-us text-center">
                                      <label className="resi-sub-head">Sports</label>
                                       <div class="form-group">
                                           <div class="form-group">
                                              <textarea 
                                               class="form-control candidate-about-input" 
                                               placeholder="Please write about interests, sports, talents in 100 words ..."
                                               rows="5"
                                               onChange={this.SportHandler}
                                               value={this.state.sport}
                                              />
                                        </div>
                                  </div>
                                   </div>
                            </div>
                            <div className="col-md-12">
                               <div className="basic-nxr-btn text-center">
                                    <Link to="/video-resume"> <button className="btn">Next</button></Link>
                               </div>
                            </div>
                            <div className="col-md-12">
                                <div className="basic-skip text-center">
                                  <Link to="/video-resume">Skip</Link>
                                 </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default CandidateAbout; 

