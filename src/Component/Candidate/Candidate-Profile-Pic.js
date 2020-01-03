import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from '../../common/Header';
import Footer from '../../common/Footer';


class CandidateProfilePic extends Component{
    constructor(props){
        super(props);
       this.state ={
        

       }
       this.handleSubmit = this.handleSubmit.bind(this);
    }
   

      handleSubmit(event) {
        event.preventDefault();
      }
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Bio</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/bio-profile-active.png" /></li>
                                    <li><img src="image/student-icon/bio-about.png" /></li>
                                    <li><img src="image/student-icon/bio-video.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-6 offset-md-6 text-center candidate-basic-root basic-details">
                                  <p className="resi-sub-head">Profile Pic</p>
                                  <div className="col-md-12">
                                      <div className="bio-profile-picture">
                                          <img src="image/icons/shikhar.jpg" />
                                      </div>
                                  </div>
                                  <div className="bio-other"><p>Other Pics</p></div>
                                  <div className="col-md-6">
                                     <div class="upload-btn-wrapper bio-others-pics">
                                           <img src="image/menuicon/file.png" className="profilesetting-file" />
                                           <input type="file" />
                                     </div>
                                  </div>
                                  <div className="col-md-6">
                                  <div class="upload-btn-wrapper bio-others-pics">
                                           <img src="image/menuicon/file.png" className="profilesetting-file" /><br />
                                           <input type="file" />
                                     </div>
                                  </div>
                            </div>
                            <div className="col-md-12">
                               <div className="basic-nxr-btn text-center">
                                    <Link to="/upload-adhar"> <button className="btn">Next</button></Link>
                               </div>
                            </div>
                            <div className="col-md-12">
                                <div className="basic-skip text-center">
                                  <Link to="/upload-adhar">Skip</Link>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    
}

export default CandidateProfilePic; 