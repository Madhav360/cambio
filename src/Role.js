import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';



class Role extends Component{
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
                         <div className="rolemain text-center">
                           <h2>Hey There</h2>
                           <p>Signup to continue</p>
                           <p className="selectrole">Select Your 
                               <span className="roleheading">
                                   <br /> Role
                               </span>
                           </p>
                         </div>
                         <div className="roles">
                             <ul>
                                 <li className="condidates">
                                    <button className="btn condidate-roles-btn">
                                        <Link to="#"><p>A <br /><span className="roles-btn">Condidates</span> </p>
                                        </Link>
                                    </button>  
                                 </li>
                                 <li className="condidates">
                                    <button className="btn condidate-roles-btn">
                                        <Link to="#"><p>An <br /><span className="roles-btn">Employee</span> </p>
                                        </Link>
                                    </button>
                                 </li>
                                 <li className="condidates">
                                    <button className="btn condidate-roles-btn">
                                        <Link to="#"><p>Social <br /><span className="roles-btn">Networking</span> </p>
                                        </Link>
                                    </button>
                                 </li>
                             </ul>
                           </div>

                           <div className="roles-nxt-btn text-center">
                           <Link to="/ProfileVisibility"><button className="btn">Next</button></Link>
                           </div>
                     
                   </div>  
                           
               </div>
           </div>
       </div>
    )
    }
}

export default Role;
