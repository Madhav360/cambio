import React, {Component } from 'react';
import AccountInfo from './AccountInfo'
import { Link } from 'react-router-dom';



class Support extends Component{
    constructor(props){
        super(props)
       
    }

   


    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <AccountInfo />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth"> 
                     <div className="col-md-12 postajob-head ">

                         <h3 className="text-center">Support</h3>
                     </div>
                     <div className="col-md-12">
                         <div className="support-img text-center">
                            <img src="image/icons/support.png" />
                         </div>
                     </div>
                     <div className="col-md-6 offset-md-6 text-center support-calling">
                         <div className="">
                             <div className="col-md-6 text-center">
                                 <div className="support-call">
                                 <i class="material-icons">email</i>
                                 <p>info@cambio.com</p>
                                 </div>
                             </div>
                             <div className="col-md-6 text-center">
                                <div className="support-call">
                                <i class="material-icons">call</i>
                                 <p>+91 996409087</p>
                                </div>
                             </div>
                         </div>
                     </div>
                     <div className="col-md-12 support-inputs-width">
                      
                         <form className="gg">
                         <div className="form-back-color">
                            <div class="form-group">
                              <select 
                                  class="form-control support-select-cat-inputs">
                                 <option>Select Category</option>
                                 <option>2</option>
                                 <option>3</option>
                                <option>4</option>
                                </select>
                            </div>
                            <div class="form-group">
                              <input 
                               type="text" 
                               class="form-control support-select-cat-inputs" 
                               placeholder="Support title" 
                               />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                   class="form-control support-massage-input" 
                                    placeholder="Type Message"
                                    rows="5" 
                                    id="comment">
                                </textarea>
                            </div>
                            </div>
                            <div className="submit-form-button text-center">
                                 <img src="image/icons/submit.png" type="submit" alt="submit" />
                            </div>
                         </form>
                     </div>
                   
                                                 
                   </div> 
                </div>
            </div>
        )
    }
}
export default Support;