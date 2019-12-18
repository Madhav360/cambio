import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
import Footer from './common/Footer';




class Bio extends Component{
    constructor(props){
        super(props);
        this.state = {
          file: null,
          write_yourself: '',
        }
        
        this.WriteYourSelfHandler = this.WriteYourSelfHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
      }
      WriteYourSelfHandler(event){
        this.setState({
          write_yourself:event.target.value
        })
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
                         <div className="company text-center">
                            <ul>
                               <li> <button className="btn mdv-company-icons basic-active"><i className='fas fa-camera'></i></button></li>
                               <li> <button className="btn mdv-company-icons"><i className='fas fa-video'></i></button></li>
                               {/* <li> <div class="upload-btn-wrapper">
                                        <button class="btn btn mdv-company-icons" 
                                           onChange={this.handleChange}>
                                           <i className='fas fa-upload'></i></button>
                                           <input type="file" onChange={this.handleChange}/>
                                     </div>
                                </li> */}
                            </ul>
                          
                            <div className="employee-profile-pic" >
                               <p>Profile Pic</p>
                              
                               <img className="img-responsive" placeholder="upload picture" src="image/icons/shikhar.jpg"/>
                              
                            </div>
                            <div className="col-md-8 offset-md-4 col-centered form-group  text-center">
                                <p>About You</p>
                                <textarea 
                                     className="form-control employee-about-input" 
                                     placeholder="Please write yourself in 250 words" 
                                     type="text"
                                     value={this.state.write_yourself}
                                     onChange={this.WriteYourSelfHandler} 
                                     
                                    />
                            </div>
               
                            <div className="col-md-12 company-skip-btn text-center">
                               <Link to="/bio2"> <buttom className="btn company-skip">Next</buttom><br /></Link>
                               <Link to="/bio2">Skip</Link>
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

export default Bio;
