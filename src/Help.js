import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import AccountInfo from './AccountInfo';



class Help extends Component{
    constructor(props){
        super(props)
       
    }

   


    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <AccountInfo />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth help-height"> 
                     <div className="col-md-12 postajob-head ">

                         <h3 className="text-center">Help</h3>
                     </div>
                    <div className="col-md-12">
                        <div className="help-quetion" data-toggle="collapse" data-target="#question1">
                            <i class='fas fa-plus help-plus-icon'></i>
                            <p>Help question 1</p>
                        </div>
                        <div id="question1" class="collapse hepl-anws">
                              Lorem ipsum dolor text....
                        </div>
                        <div className="help-quetion" data-toggle="collapse" data-target="#question2">
                            <i class='fas fa-plus help-plus-icon'></i>
                            <p>Help question 2</p>
                        </div>
                        <div id="question2" class="collapse hepl-anws">
                              Lorem ipsum dolor text....
                        </div>
                        <div className="help-quetion" data-toggle="collapse" data-target="#question3">
                            <i class='fas fa-plus help-plus-icon'></i>
                            <p>Help question 3</p>
                        </div>
                        <div id="question3" class="collapse hepl-anws">
                              Lorem ipsum dolor text....
                        </div>
                        <div className="help-quetion" data-toggle="collapse" data-target="#question4">
                            <i class='fas fa-plus help-plus-icon'></i>
                            <p>Help question 4</p>
                        </div>
                        <div id="question4" class="collapse hepl-anws">
                              Lorem ipsum dolor text....
                        </div>
                     </div>
                                                 
                   </div> 
                </div>
            </div>
        )
    }
}
export default Help;