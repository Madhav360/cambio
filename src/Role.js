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
                   <div className="col-lg-12 mdv-singup-page role-height">
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
                                 <Link to="#"><button className="btn condidate-roles-btn">
                                        <p>A <br /><span className="roles-btn">Candidate</span> </p>
                                        
                                    </button>  </Link>
                                 </li>
                                 <li className="condidates">
                                    <Link to="/ProfileVisibility" className="kk"><button className="btn condidate-roles-btn">
                                        <p>An <br /><span className="roles-btn">Employer</span> </p>
                                       
                                    </button> </Link>
                                 </li>
                                 <li className="condidates">
                                 <Link to="#"><button className="btn condidate-roles-btn">
                                        <p>Social <br /><span className="roles-btn">Networking</span> </p>
                                       
                                    </button> </Link>
                                 </li>
                             </ul>
                           </div>

                     
                   </div>  
                           
               </div>
           </div>
       </div>
    )
    }
}

export default Role;
