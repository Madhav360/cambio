import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'
import Chat from './Chat';
import Footer from './common/Footer';
class Message extends Component{
    constructor (props){
        super(props);
        this.state={
          your_friend_msg:'Hello',
          your_msg:'hello How are you',
          client_name: 'John'
        }
        
        this.YourMsgHandler = this.YourMsgHandler.bind(this);
    }

    YourMsgHandler(event){
        this.setState({
            your_msg:event.target.value
        })
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
               <div className="col-xs-12 col-md-12 jj">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section1">
                           
                          <h4>{this.state.client_name}</h4>
                          <h6>Typing...</h6>
                       </div>
                   </div>
               <div className="col-md-12 chatting-page-height">
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                           
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                       <div className="col-sm-2 col-xs-2 chat-use-image">
                          <img src="image/icons/shikhar.jpg" />
                       </div>
                       <div className="col-sm-10 col-xs-10 chating-section">
                          <p>{this.state.your_friend_msg}</p>
                       </div>
                   </div>
                   <div className="col-xs-12 col-md-12">
                      <div className="col-sm-10 col-xs-10 your-chat">
                         <p>{this.state.your_msg}</p>
                      </div>
                       <div className="col-sm-2 col-xs-2 chat-use-image your-picture">
                          <img src="image/icons/shikhar.jpg" />
                      </div>
                   </div>
               </div>
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="col-xs-10">
                      <div className="chatting-input">
                          <div className="form-group">
                              <input 
                                 className="form-control chatting-input-typing"
                                 placeholder="Type Your Message"
                                 type="text"
                                 value={this.state.your_msg}
                                 onChange={this.YourMsgHandler}
                                />
                                <i class="material-icons chating-attachement-icons">attachment</i>
                          </div>
                       </div>
                   </div>
                   <div className="col-xs-2">
                      <div className="chatting-input-typing-send">
                          <i class="fa fa-send"></i>
                      </div>
                   </div>
               </div>
           </div>
           <Footer />
        </div>
        )
    }
}


export default Message;