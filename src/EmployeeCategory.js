import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class EmployeeCategory extends Component{
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
                         <div className="industrymain  text-center">
                           <h2>Select Category</h2>
                           <p>Please select your suitable category</p>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/fulltime.png" />
                               <h5>Full Time</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/parttime.png" />
                               <h5>Part Time</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                             <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/contract.png" />
                               <h5>Contract</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                             <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/onetimejob.png" />
                               <h5>One Time Job</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/specially.png" />
                               <h5>Specially</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/exserviceman.png" />
                               <h5>Ex Serviceman</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/transgender.png" />
                               <h5>Transgender</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/realstate.png" />
                               <h5>She helps her</h5>
                            </button>
                         </div>
                         <div className="col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/careerswitch.png" />
                               <h5>Career Switch</h5>
                            </button>
                         </div>
                         
                         <div className="col-md-12 roles-nxt-btn text-center">
                           <Link to="#"><button className="btn">Next</button></Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
       </div>
    )
    }
}

export default EmployeeCategory;
