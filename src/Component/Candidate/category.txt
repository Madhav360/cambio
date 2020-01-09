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
         $('#search').on('keyup', function () {
            var pattern = $(this).val();
            $('.items-collection .items').hide();
            $('.items-collection .items').filter(function () {
                return $(this).text().match(new RegExp(pattern, 'i'));
            }).show();
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
        <div class="form-group">
            <div class="items-collection">

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/fulltime.png" />
                                     <h5>Full Time</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/parttime.png" />
                                   <h5>Part Time</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/contract.png" />
                                    <h5>Contract</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/onetimejob.png" />
                                    <h5>One Time Job</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/specially.png" />
                                    <h5>Specially</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/exserviceman.png" />
                                    <h5>Ex Serviceman</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/transgender.png" />
                                    <h5>Transgender</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/realstate.png" />
                                     <h5>She helps her</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive" src="image/icons/careerswitch.png" />
                                    <h5>Career Switch</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 roles-nxt-btn text-center">
                  <Link to="/studentquestionone"><button className="btn">Next</button></Link>
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

export default CandidateCategory;
