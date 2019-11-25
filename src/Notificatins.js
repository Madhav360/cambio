import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


class Notifications extends Component{
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
               <div className="row dashpagewidth">
                   <div className="Notifaction head postajob-head text-center">
                       <h3>Notifications</h3>
                   </div>
                   <div className="col-md-12 notification-data">
                      
                       <div className="notifi">
                           <div className="col-md-10">
                               <div className="user-notication">
                                   <p>2 new applicants applied for your job post of Urgently require Java Developer</p>
                               </div>
                           </div>
                           <div className="col-md-2">
                               <div className="gg">
                                   <div >
                                       <p className="user-natifiaction-date">20/12/2019</p>
                                       <p className="user-natification-time">10:20AM</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                   </div>


                   <div className="col-md-12 notification-data">
                      
                       <div className="notifi">
                           <div className="col-md-10">
                               <div className="user-notication">
                                   <p>2 new applicants applied for your job post of Urgently require Java Developer</p>
                               </div>
                           </div>
                           <div className="col-md-2">
                               <div className="gg">
                                   <div >
                                       <p className="user-natifiaction-date">20/12/2019</p>
                                       <p className="user-natification-time">10:20AM</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                   </div>

                   <div className="col-md-12 notification-data">
                      
                       <div className="notifi">
                           <div className="col-md-10">
                               <div className="user-notication">
                                   <p>2 new applicants applied for your job post of Urgently require Java Developer</p>
                               </div>
                           </div>
                           <div className="col-md-2">
                               <div className="gg">
                                   <div >
                                       <p className="user-natifiaction-date">20/12/2019</p>
                                       <p className="user-natification-time">10:20AM</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   
                   </div>
               </div>
           </div>
            </div>
        )
    }
}


export default Notifications;