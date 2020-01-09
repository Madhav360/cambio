import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import $ from "jquery";
import Footer from './common/Footer';




class Industry extends Component{
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
                            <h2>Select Industry</h2>
                            <p>Please select your suitable category</p>
                        </div>
                        <div className="stu-category ks-cboxtags">
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxOne" />
                                 <label for="checkboxOne">
                                   <img className="img-responsive industryimg" src="image/icons/shopping-cart.png" /> <br />
                                   E-commerce
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxTwo" />
                                 <label for="checkboxTwo">
                                   <img className="img-responsive" src="image/icons/fmcg.png" /> <br />
                                   FMCG
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxThree" />
                                 <label for="checkboxThree">
                                    <img className="img-responsive" src="image/icons/hospital-buildings.png" /> <br />
                                    Hospitality
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxFour" />
                                 <label for="checkboxFour">
                                   <img className="img-responsive" src="image/icons/retails.png" /> <br />
                                    Retail
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxFive" />
                                  <label for="checkboxFive">
                                    <img className="img-responsive" src="image/icons/bpo.png" /> <br />
                                     BPO/Call Center
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxSix" />
                                 <label for="checkboxSix">
                                   <img className="img-responsive" src="image/icons/shopping-cart.png" /> <br />
                                    Banking & <br />Financial<br /> Services
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxSeven" />
                                 <label for="checkboxSeven">
                                     <img className="img-responsive" src="image/icons/realstate.png" /> <br />
                                      Real Estate
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxEight" />
                                 <label for="checkboxEight">
                                    <img className="img-responsive" src="image/icons/blueprint.png" /> <br />
                                    Architecture
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxNine" />
                                 <label for="checkboxNine">
                                   <img className="img-responsive" src="image/icons/animation.png" /> <br />
                                    Animation
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxNine" />
                                 <label for="checkboxNine">
                                 <img className="img-responsive" src="image/icons/shop.png" /> <br />
                                  Events & <br /> Entertainment
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxNine" />
                                 <label for="checkboxNine">
                                   <img className="img-responsive" src="image/icons/dataanlytics.png" /> <br />
                                   Data Analytics
                                </label>
                            </div>
                            <div class="col-md-2 mm">
                                <input type="checkbox" class="single-checkbox" id="checkboxNine" />
                                 <label for="checkboxNine">
                                   <img className="img-responsive" src="image/icons/contruction.png" /> <br />
                                   Construction
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 roles-nxt-btn text-center">
                  <Link to="/employeecategory"><button className="btn">Next</button></Link>
                </div>
                    </div>
                </div>
            <Footer />
       </div>
    )
    }
}


export default Industry;
