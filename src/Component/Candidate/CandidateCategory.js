import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import Header from '../../common/Header';
import Footer from '../../common/Footer';





class CandidateCategory extends Component{
    constructor(props) {
        super(props);
    
      }
      componentDidMount (){
        $('.single-checkbox').on('change', function() {
            if($('.single-checkbox:checked').length > 3) {
                this.checked = false;
            }
         });
      }
    render(){
	return(
       <div>
            <Header />
                <div class="container">
                    <div className="col-lg-12 mdv-singup-page">
                        <div className="industrymain  text-center">
                            <h2>Select Category</h2>
                            <p>Please select your suitable category</p>
                        </div>
                        <div className="stu-category ks-cboxtags">
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxOne" />
                                 <label for="checkboxOne">
                                    <img className="img-responsive" src="image/icons/fulltime.png" /> <br />
                                    Full Time
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxTwo" />
                                 <label for="checkboxTwo">
                                   <img className="img-responsive" src="image/icons/parttime.png" /> <br />
                                    Part Time
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxThree" />
                                 <label for="checkboxThree">
                                    <img className="img-responsive" src="image/icons/contract.png" /> <br />
                                     Contract
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxFour" />
                                 <label for="checkboxFour">
                                 <img className="img-responsive" src="image/icons/onetimejob.png" /> <br />
                                    One Time Job
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxFive" />
                                 <label for="checkboxFive">
                                    <img className="img-responsive" src="image/icons/specially.png" /> <br />
                                    Specially
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxSix" />
                                 <label for="checkboxSix">
                                   <img className="img-responsive" src="image/icons/exserviceman.png" /> <br />
                                   Ex Serviceman
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxSeven" />
                                 <label for="checkboxSeven">
                                    <img className="img-responsive" src="image/icons/transgender.png" /> <br />
                                     Transgender
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxEight" />
                                 <label for="checkboxEight">
                                    <img className="img-responsive" src="image/icons/realstate.png" /> <br />
                                     She helps her
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxNine" />
                                 <label for="checkboxNine">
                                    <img className="img-responsive" src="image/icons/careerswitch.png" /> <br />
                                    Career Switch
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 roles-nxt-btn text-center lc">
                  <Link to="/studentquestionone"><button className="btn">Next</button></Link>
                </div>
                    </div>
                </div>
            <Footer />
       </div>
    )
    }
}

export default CandidateCategory;
