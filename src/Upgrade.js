import React, {Component } from 'react';
import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';



class Udgrade extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

   


    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth"> 
                     <div className="postajob-head ">
                     
                         <h3 className="text-center">Upgrade</h3>
                     </div>
                     <div className="col-md-9 offset-md-3 upgradewidth">
                         <div className="upgrade-slider text-center">
                             <img src="image/icons/buldingloc.png" alt="user" />
                             <h2>View Potential Connects Right Away</h2>
                         </div>
                         <div className="updrade-pricing">
                             <div className="flex-container">
                                 <div className="pricing-data">
                                    <p>₹ <span>199</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                    <p>₹ <span>320</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                    <p>₹ <span>500</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                   <p>₹ <span>599</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                    <p>₹ <span>700</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                    <p>₹ <span>899</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                    <p>₹ <span>289</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                                 <div className="pricing-data">
                                   <p>₹ <span>999</span></p>
                                    <h5>1 Day Job Pass </h5>
                                 </div>
                             </div>
                             <div className="upgrade-pay-to-contineu text-center lc">
                                 <button className="btn">Continue to Pay</button>
                             </div>
                         </div>
                     </div>
                    
                    
                   </div> 
                </div>
            </div>
        )
    }
}
export default Udgrade;