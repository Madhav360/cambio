import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";




class Bio2 extends Component{
    constructor(props){
        super(props);
        this.state = {
          file: null
        }
      
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="  text-center">
                           <h2>Bio</h2>
                         </div>
                         <div className="company2 text-center">
                            <ul>
                               <li> <button className="btn mdv-company-icons"><i className='fas fa-camera'></i></button></li>
                               <li> <button className="btn mdv-company-icons basic-active"><i className='fas fa-video'></i></button></li>
                              
                               {/* <li> <div class="upload-btn-wrapper">
                                        <button class="btn btn mdv-company-icons" 
                                           onChange={this.handleChange}>
                                           <i className='fas fa-upload'></i></button>
                                           <input type="file" onChange={this.handleChange}/>
                                     </div>
                                </li> */}
                            </ul>
                          
                            <div className="bio-2" >
                               <p className="recv">Requirement Video</p>
                               <p>Upload 30 second Recruiter Video</p>
                            </div>
                            <div className="col-md-8 col-md-offset-2 bio2-camera-section form-group  text-center">
                            <ul>
                               <li> <i className="btn mdv-company-icon"><i className='fas fa-camera'></i></i></li>
                             
                              
                                <li> <div class="upload-btn-wrapper">
                                        <i class="btn btn mdv-company-icon" 
                                           onChange={this.handleChange}>
                                           <img src="image/icons/file.png" className="bio2-file" /> </i>
                                           <input type="file" onChange={this.handleChange}/>
                                     </div>
                                </li>
                            </ul>
                                
                            </div>
               
                            <div className="col-md-12 company-skip-btn text-center">
                               <Link to="/accountrecovery"><buttom className="btn company-skip">Next</buttom></Link><br />
                               <Link to="/accountrecovery">Skip</Link>
                           </div>
                        </div>
                     </div>    
               </div>
           </div>
       </div>
    )
    }
}

export default Bio2;
