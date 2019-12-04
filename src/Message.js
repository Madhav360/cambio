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
           <div className="col-md-4">
               <Chat />            
           </div>
        </div>
        )
    }
}


export default Message;