import React from 'react';
import {Component} from 'react';

import { Link } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';




class CandidateEnableLocation extends Component{
    constructor(props) {
        super(props);
    
      }
    render(){
	return(
       <div>
           <Header />
           <div className="container">
               <div className="row">
                   <div className="col-lg-12 mdv-singup-page">
                         <div className="enable-loaction-head text-center">
                           <h2>Enable Location</h2>
                           <p>Enabling GPS will help us find you<br />the most appropriate for your job match</p>
                         </div>
                         <div className="col-md-12 gps-img">
                          <img className="img-responsive" src="image/location.png" />
                        </div>
                        <div className="roles-nxt-btn text-center">
                           <Link to="/sign-up"><button className="btn">Allow Location</button></Link>
                           </div>
                        </div> 
                      
                 
               </div>
           </div>
           <Footer />
       </div>
    )
    }
}

export default CandidateEnableLocation;
