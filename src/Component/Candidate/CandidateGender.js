import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

class CandidateGender extends Component{
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
                            <h2 className="text-center">Basic</h2>
                            <div className="col-md-5 offset-md-7 candidate-basic-root text-center">
                                <ul>
                                    <li><img src="image/student-icon/basic-blue.png" /></li>
                                    <li><img src="image/student-icon/gender-black.png" /></li>
                                    <li><img src="image/student-icon/basic3.png" /></li>
                                    <li><img src="image/student-icon/basic4.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Gender</p>
                                     <div className="col-md-12  gender-options lc">
                                        <div className="gender-option">
                                           <div class="flavor">
                                               <input type="radio" id="radio_vanilla" name="flavor" value="vanilla" />
                                               <label for="radio_vanilla" class="option11">Male</label>
    
                                               <input type="radio" id="radio_chocolate" name="flavor" value="chocolate" />
                                               <label for="radio_chocolate" class="option11">Female</label>
    
                                               <input type="radio" id="radio_strawberry" name="flavor" value="strawberry" />
                                               <label for="radio_strawberry" class="option11">Other</label>
                                           </div>
                                        </div>
                                       
                                     </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                         <Link to="/candidate-lang"><button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/candidate-lang">Skip</Link>
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

export default CandidateGender; 