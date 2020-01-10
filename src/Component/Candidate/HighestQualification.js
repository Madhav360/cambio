import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';


class HighestQualification extends Component{
    constructor(props){
        super(props);
       
    }
   
   
        
     
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Education & Works</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/edublue.png" /></li>
                                    <li><img src="image/student-icon/work.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Highest Qualification</p>
                                  <div className="col-md-12">
                                      <div className="highest-edu-option">
                                          <div class="flavor high-qul">
                                               <input type="radio" id="radio_high-school" name="flavor" value="radio_high-school" />
                                               <label for="radio_high-school" class="option11">High School</label>
    
                                               <input type="radio" id="radio_under-graduate" name="flavor" value="radio_under-graduate" />
                                               <label for="radio_under-graduate" class="option11">Under Graduate</label>
                                                 <br />
                                               <input type="radio" id="radio_graduate" name="flavor" value="radio_graduate" />
                                               <label for="radio_graduate" class="option11">Graduate</label>

                                               <input type="radio" id="radio_post-graduate" name="flavor" value="radio_post-graduate" />
                                               <label for="radio_post-graduate" class="option11">Post Graduate</label>
                                               <br />
                                               <input type="radio" id="radio_doctorate" name="flavor" value="radio_doctorate" />
                                               <label for="radio_doctorate" class="option11">Doctorate</label>

                                               <input type="radio" id="radio_post-doctorate" name="flavor" value="radio_post-doctorate" />
                                               <label for="radio_post-doctorate" class="option11">Post Doctorate</label>

                                           </div>
                                      </div>
                                      <div className="form-group">
                                          <input 
                                          className="form-control height-qualification-input"
                                          placeholder="Name of the Institution"
                                          type="text"
                                          />
                                      </div>
                                      <div className="form-group text-center">
                                          <label for="sel1">Year of Passing</label>
                                             <select class="form-control height-qualification-input" id="sel1">
                                               <option>2015</option>
                                               <option>2016</option>
                                               <option>2017</option>
                                               <option>2018</option>
                                             </select>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/current-experience"> <button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/current-experience">Skip</Link>
                                      </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    
}

export default HighestQualification; 