import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class Buildyourprofile extends Component{
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
                         <div className="  text-center">
                           <h2>Let's Build Your Profile</h2>
                          <p>Below are 2 individual tabs</p>
                         </div>
                         <div class="buildrourprofile text-center">
                            <div class="round">
                                <div class="content">
                                    <Link to="#">
                                        <button className="btn">
                                            Company
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div class="round ">
                               <div class="content">
                                   <Link to="#">
                                        <button className="btn">
                                            Bio
                                        </button>
                                    </Link>
                               </div>
                            </div> 
                          </div>
                         <div className="col-md-12 qskip text-center">
                           <Link to="/recruiterquestionfour">SKIP</Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
       </div>
    )
    }
}

export default Buildyourprofile;
