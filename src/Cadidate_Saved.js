import React, { Component } from 'react';

import Sidebar from './Sidebar';

class Candidate_Saved extends Component{
    constructor (props){
        super(props);
    }




    render(){
        return(
            <div>
           
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9 main">
                    <p className="back">Back</p>
                    <div class="row dashpagewidth"> 
                        <div className="postajob-head ">
                              <h3 className="text-center">Saved Candidate</h3>
                         </div>
                        
                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li>
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth">
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li >
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth" >
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li >
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth" >
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li >
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth" >
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li >
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth" >
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="saved-candiadte-details">
                                <ul>
                                    <li >
                                        <img src="image/icons/shikhar.jpg" 
                                        className="img-responsive saved-pitcure" />
                                    </li>
                                    <li className="candidatenamewidth" >
                                        <h6>Name</h6>
                                        <p>Company Name</p>
                                    </li >
                                    <li><img src="image/menuicon/savedblue.png" 
                                        className="img-responsive" /></li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Candidate_Saved;