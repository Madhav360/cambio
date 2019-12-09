import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import $ from "jquery";




class Industry extends Component{
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
                           <h2>Select Industry</h2>
                           <p>Please select your job category</p>
                         </div>
        <div class="form-group">
            <div class="items-collection">

                <div class="items col-xs-6 col-sm-3 col-md-2 col-lg-2">
                    <div class="info-block block-info clearfix">
                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
                            <label class="btn btn-default industry-job">
                                <div class="itemcontent">
                                    <input type="checkbox" name="var_id[]" autocomplete="off" value="" />
                                    <img className="img-responsive industryimg" src="image/icons/shopping-cart.png" />
                                    <h5>E-commerce</h5>
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
                                    <img className="img-responsive" src="image/icons/fmcg.png" />
                                     <h5>FMCG</h5>
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
                                    <img className="img-responsive" src="image/icons/hospital-buildings.png" />
                                    <h5>Hospitality</h5>
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
                                    <img className="img-responsive" src="image/icons/retails.png" />
                                    <h5>Retail</h5>
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
                                    <img className="img-responsive" src="image/icons/bpo.png" />
                                    <h5>BPO/Call Center</h5>
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
                                    <img className="img-responsive" src="image/icons/shopping-cart.png" />
                                     <h5>Banking & <br />Financial<br /> Services</h5>
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
                                    <h5>Real Estate</h5>
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
                                    <img className="img-responsive" src="image/icons/blueprint.png" />
                                     <h5>Architecture</h5>
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
                                    <img className="img-responsive" src="image/icons/animation.png" />
                                    <h5>Animation</h5>
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
                                    <img className="img-responsive" src="image/icons/shop.png" />
                                    <h5>Events & <br /> Entertainment</h5>
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
                                    <img className="img-responsive" src="image/icons/dataanlytics.png" />
                                    <h5>Data Analytics</h5>
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
                                    <img className="img-responsive" src="image/icons/contruction.png" />
                                    <h5>Construction</h5>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 roles-nxt-btn text-center">
                           <Link to="/employeecategory"><button className="btn">Next</button></Link>
                           </div>
            </div>
        </div>
    </div>

</div>
       </div>
    )
    }
}

export default Industry;
