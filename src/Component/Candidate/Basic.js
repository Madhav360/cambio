import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

class Basic extends Component{
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
                            <div className="col-md-5 offset-md-7 candidate-basic-root basic-details">
                                  <p>Date Of Birth</p>
                                  <div className="col-md-4">
                                      <div className="candidate-basic-date">
                                         <div class="form-group">
                                            <select class="form-control select-custom" id="sel1">
                                               <option>1</option>
                                               <option>2</option>
                                               <option>3</option>
                                               <option>4</option>
                                           </select>
                                       </div>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="candidate-basic-date">
                                         <div class="form-group">
                                            <select class="form-control select-custom" id="sel1">
                                               <option>Jan</option>
                                               <option>Feb</option>
                                               <option>Mar</option>
                                               <option>Apr</option>
                                           </select>
                                       </div>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="candidate-basic-date">
                                         <div class="form-group">
                                            <select class="form-control select-custom" id="sel1">
                                               <option>1993</option>
                                               <option>1994</option>
                                               <option>1995</option>
                                               <option>1996</option>
                                               <option>1997</option>
                                               <option>1998</option>
                                               <option>1999</option>
                                               <option>2000</option>
                                               <option>2001</option>
                                               <option>2002</option>
                                               <option>2003</option>
                                               <option>2004</option>
                                               <option>2005</option>
                                               <option>2006</option>
                                               <option>2007</option>
                                               <option>2008</option>
                                               <option>2009</option>
                                               <option>2010</option>
                                               <option>2011</option>
                                               <option>2012</option>
                                               <option>2013</option>
                                               <option>2014</option>
                                               <option>2015</option>
                                               <option>2016</option>
                                               <option>2017</option>
                                               <option>2018</option>
                                               <option>2019</option>
                                               <option>2020</option>
                                               <option>2021</option>
                                               <option>2022</option>
                                               
                                           </select>
                                       </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-nxr-btn text-center">
                                          <Link to="/candidate-gender"><button className="btn">Next</button></Link>
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="basic-skip text-center lc">
                                      <Link to="/candidate-gender">Skip</Link>
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

export default Basic; 