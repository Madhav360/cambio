import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


class Chat extends Component{
    constructor (props){
        super(props);
        this.state={
            time:'2:00pm',
            person_name:'Rahul',
            person_msg:'Have a good day',
            day:'Today'
        }
    }

    render(){
        return(
            <div>
                <div className="container-fluid chatt">
                    <div className="row">
                        <div className="col-md-12">
                          <div className="chating-activer">
                            <p className="chating-back">Back</p>
                             <div class="flex-container text-center">
                                <div className="more-active">
                                  <img src="image/icons/shikhar.jpg" /><p>John</p>
                                  <span>+20</span>
                                </div>
                                <div>
                                   <img src="image/icons/shikhar.jpg" /><p>John</p>
                                </div>
                                <div>
                                  <img src="image/icons/shikhar.jpg" /><p>John</p>
                                </div>
                                <div>
                                   <img src="image/icons/shikhar.jpg" /><p>John</p>
                                </div>
                                <div>
                                   <img src="image/icons/shikhar.jpg" /><p>John</p>
                                </div>  
                            </div>
                            <div className="onversationslist">
                              <img src="image/menuicon/bullet-list.png" />
                              <p>Conversations ( Unread )</p>
                           </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>{this.state.person_name}</h4>
                                     <p>{this.state.person_msg}</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>{this.state.day}</h6>
                                    <p>{this.state.time}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>{this.state.person_name}</h4>
                                     <p>{this.state.person_msg}</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>{this.state.day}</h6>
                                    <p>{this.state.time}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>{this.state.person_name}</h4>
                                     <p>{this.state.person_msg}</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>{this.state.day}</h6>
                                    <p>{this.state.time}</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>{this.state.person_name}</h4>
                                     <p>{this.state.person_msg}</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>{this.state.day}</h6>
                                    <p>{this.state.time}</p>
                                </div>
                            </div>
                                                     
                          </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;