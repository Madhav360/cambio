import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

class MarriageStatus extends Component{
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
                                    <li><img src="image/student-icon/basic-black.png" /></li>
                                    <li><img src="image/student-icon/gender-blue.png" /></li>
                                    <li><img src="image/student-icon/basic3.png" /></li>
                                    <li><img src="image/student-icon/basic4.png" /></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-7 text-center candidate-basic-root basic-details">
                                  <p>Marriage Status</p>
                                 <div className="col-md-12">
                                     <div className="marrige-status">
                                          <div class="flavor">
                                               <input type="radio" id="radio_vanilla" name="flavor" value="vanilla" />
                                               <label for="radio_vanilla" class="option11">Single</label>
    
                                               <input type="radio" id="radio_chocolate" name="flavor" value="chocolate" />
                                               <label for="radio_chocolate" class="option11">Marriged</label>
                                           </div>
                                     </div>
                                 </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                        <Link to="/weight">  <button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center">
                                      <Link to="/weight">Skip</Link>
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

export default MarriageStatus; 