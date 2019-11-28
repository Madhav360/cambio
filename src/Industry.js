import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';




class Industry extends Component{
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
                           <h2>Select Industry</h2>
                           <p>Please select your job category</p>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/shopping-cart.png" />
                               <h5>E-commerce</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/fmcg.png" />
                               <h5>FMCG</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                             <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/hospital-buildings.png" />
                               <h5>Hospitality</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/retails.png" />
                               <h5>Retail</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/bpo.png" />
                               <h5>BPO/Call Center</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/shopping-cart.png" />
                               <h5>Banking & <br />Financial<br /> Services</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/realstate.png" />
                               <h5>Real Estate</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/blueprint.png" />
                               <h5>Architecture</h5>
                            </button>
                         </div>
                         <div className="col-md-4 text-center">
                             <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/animation.png" />
                               <h5>Animation</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/shop.png" />
                               <h5>Events & <br /> Entertainment</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/dataanlytics.png" />
                               <h5>Data Analytics</h5>
                            </button>
                         </div>
                         <div className="col-xs-4 col-md-2 text-center">
                            <button className="btn industry-job">
                               <img className="img-responsive" src="image/icons/contruction.png" />
                               <h5>Construction</h5>
                            </button>
                         </div>
                         <div className="roles-nxt-btn text-center">
                           <Link to="/employeecategory"><button className="btn">Next</button></Link>
                           </div>
                   </div>  
                 
               </div>
           </div>
       </div>
    )
    }
}

export default Industry;
