import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


class ProfileSetting extends Component{
    constructor (props){
        super(props);

    }

    render(){
        return(
            <div>
           <div className="col-md-3">
               <Sidebar />
           </div>
           <div className="col-md-9">
               <div class="back">
                   <p className="back">Back</p>
               </div>
               <div className="row dashpagewidth">
                   <div className="Notifaction head postajob-head text-center">
                       <h3>Profile Setting</h3>
                   </div>
               </div>
           </div>
            </div>
        )
    }
}


export default ProfileSetting;