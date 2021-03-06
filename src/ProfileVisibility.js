import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Footer from './common/Footer';




class ProfileVisibility extends Component{
    constructor(props) {
        super(props);
    
      }
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page role-height">
                         <div className="rolemain pv text-center">
                           <h2>Profile Visibility</h2>
                         </div>
                         <div className="col-md-4">
                         <button className="btn profile-privacy"> <div>
                              <h3>Public</h3>
                              <p>Your Profile Visible to allYour Profile Visible to all</p>
                            </div></button>
                         </div>
                         <div className="col-md-4">
                            <button className="btn profile-privacy"> <div>
                              <h3>Private</h3>
                              <p>Your Profile Visible to allYour Profile Visible to all</p>
                            </div></button>
                         </div>
                         <div className="col-md-4">
                         <button className="btn profile-privacy"> <div>
                              <h3>Hide from </h3>
                              <p>Your Profile Visible to allYour Profile Visible to all</p>
                            </div></button>
                        </div> 
                        <div className="roles-nxt-btn text-center">
                           <Link to="/EnableLocation"><button className="btn">Save</button></Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
           <Footer />
       </div>
    )
    }
}

export default ProfileVisibility;
