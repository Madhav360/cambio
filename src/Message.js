import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Chat from './Chat';


class Message extends Component{
    constructor (props){
        super(props);
        this.state={
          
        }

    }

   

    render(){
        return(
            <div>
           <div className="col-md-3">
               <Sidebar />
           </div>
           <div className="col-md-4 chattt">
               <Chat />            
           </div>
           <div className="col-md-5 chattt">
               <div className="message">
                   <h3>Message</h3>
               </div>
               <div className="col-md-12">
                   <div className="col-sm-2 chat-use-image">
                      <img src="image/icons/shikhar.jpg" />
                   </div>
                   <div className="col-sm-10 chating-section">
                       <p>Hi hello</p>
                   </div>
               </div>
               <div className="col-md-12">
                   <div className="col-sm-10 your-chat">
                       <p>Hi hello</p>
                   </div>
                   <div className="col-sm-2 chat-use-image">
                      <img src="image/icons/shikhar.jpg" />
                   </div>
               </div>
           </div>
        </div>
        )
    }
}


export default Message;