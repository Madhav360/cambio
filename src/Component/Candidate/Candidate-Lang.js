import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CandidateLang extends Component{
    constructor(props){
        super(props);
       
    }
   
   
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 main-root">
                            <h2 className="text-center">Basic</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/basic-black.png" /></li>
                                    <li><img src="image/student-icon/gender-blue.png" /></li>
                                    <li><img src="image/student-icon/basic3.png" /></li>
                                    <li><img src="image/student-icon/basic4.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Language</p>
                                  <div className="col-md-12">
                                      <div className="form-group">
                                          <input 
                                           className="form-control"
                                           id="myAutocompleteMultiple"
                                           type="text"
                                           />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/marriage-status"> <button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/marriage-status">Skip</Link>
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

export default CandidateLang; 