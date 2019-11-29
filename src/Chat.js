import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


class Chat extends Component{
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
                </div>
            </div>
        );
    }
}

export default Chat;