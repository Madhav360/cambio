import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class HighestQualification extends Component{
    constructor(props){
        super(props);
       
    }
   
   
        
     
    render(){
        return(
            <div>
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
                                          <button className="btn">High School</button>
                                          <button className="btn"> Under Graduate</button>
                                          <button className="btn">Graduate</button>
                                          <button className="btn">Post Graduate</button>
                                          <button className="btn">Doctorate</button>
                                          <button className="btn">Post Doctorate</button>
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
            </div>
        )
    }
    
}

export default HighestQualification; 