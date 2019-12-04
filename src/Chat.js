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
                <div className="container-fluid chatt">
                    <div className="row">
                        <div className="col-md-12">
                          <div className="chating-activer">
                            <p>Back</p>
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
                                     <h4>John Karl</h4>
                                     <p>have a good day !</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>Today</h6>
                                    <p>2:00pm</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>John Karl</h4>
                                     <p>have a good day !</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>Today</h6>
                                    <p>2:00pm</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>John Karl</h4>
                                     <p>have a good day !</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>Today</h6>
                                    <p>2:00pm</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>John Karl</h4>
                                     <p>have a good day !</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>Today</h6>
                                    <p>2:00pm</p>
                                </div>
                            </div>
                            <div className="col-xs-12 chatting-section">
                                <div className="col-xs-2 chat-with-people">
                                   <img src="image/icons/shikhar.jpg" />
                                </div>
                                <div className="col-xs-7 chatting-person-name">
                                     <h4>John Karl</h4>
                                     <p>have a good day !</p>
                                </div>
                                <div className="col-xs-3 chatting-persion-time">
                                    <h6>Today</h6>
                                    <p>2:00pm</p>
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