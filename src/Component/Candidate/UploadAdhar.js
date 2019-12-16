import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CandidateAdharUpload extends Component{
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
                                  <p className="resi-sub-head">Upload Aadhar Card/ PAN/ Voter ID</p>   
                                  <h6>This will enable us to authenticate your profile faste</h6>               
                            </div>
                            <div className="col-md-4 offset-md-8 upload-adhar-section text-center">
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
                            <div className="col-md-12">
                               <div className="basic-nxr-btn text-center">
                                    <Link to="/about-you"> <button className="btn">Next</button></Link>
                               </div>
                            </div>
                            <div className="col-md-12">
                                <div className="basic-skip text-center">
                                  <Link to="/about-you">Skip</Link>
                                 </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
    
}

export default CandidateAdharUpload; 

