import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class EmpLetsBuildProfile extends Component{
    constructor(props) {
        super(props);
    
      }
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page emp-buid-pro-height">
                       <div className="lets-build-profile text-center">
                          <h2>Lets's Build Profile</h2>
                          <h4>Below are 2 individual tabs </h4>
                       </div>
                       <div className="col-md-5 offset-md-7 emp-build-profile-width">
                           <div className="employer-tabs ">
                              <Link to="/company">
                                 <button className="btn">Company</button>
                              </Link>
                              <Link to="/bio">
                                 <button className="btn">Bio</button>
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

export default EmpLetsBuildProfile;
