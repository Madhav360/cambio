import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgswipe: 'image/menuicon/swipeblack.png',
            imghome: 'image/menuicon/homeblack.png',
            imgsaved: 'image/menuicon/savedblack.png',
            imgdash: 'image/menuicon/dashboardblack.png',
            imgupg: 'image/menuicon/upgradeblack.png',
            imgnoti: 'image/menuicon/notificationblack.png'

            
         };
         this.handleMouseOver = this.handleMouseOver.bind(this);
         this.handleMouseOut = this.handleMouseOut.bind(this);

         this.handleHomeMouseOver = this.handleHomeMouseOver.bind(this);
         this.handleHomeMouseOut = this.handleHomeMouseOut.bind(this);

         this.handleSavedMouseOver = this.handleSavedMouseOver.bind(this);
         this.handleSavedMouseOut = this.handleSavedMouseOut.bind(this);

         this.handleDashMouseOver = this.handleDashMouseOver.bind(this);
         this.handleDashMouseOut = this.handleDashMouseOut.bind(this);

         this.handleUpgMouseOver = this.handleUpgMouseOver.bind(this);
         this.handleUpgMouseOut = this.handleUpgMouseOut.bind(this);

         this.handleNotiMouseOver = this.handleNotiMouseOver.bind(this);
         this.handleNotiMouseOut = this.handleUpgMouseOut.bind(this);

         
         
       }
     
       handleMouseOver() {
         this.setState({
            imgswipe: 'image/menuicon/swipeblue.png'
         });
       }
     
       handleMouseOut() {
         this.setState({
            imgswipe: 'image/menuicon/swipeblack.png'
         });
        }
         handleHomeMouseOver() {
            this.setState({
               imghome: 'image/menuicon/homeblue.png'
            });
          }
        
          handleHomeMouseOut() {
            this.setState({
               imghome: 'image/menuicon/homeblack.png'
            });
       }

       handleSavedMouseOver() {
        this.setState({
           imgsaved: 'image/menuicon/savedblue.png'
        });
      }
    
      handleSavedMouseOut() {
        this.setState({
           imgsaved: 'image/menuicon/savedblack.png'
        });
   }

   handleDashMouseOver() {
    this.setState({
       imgdash: 'image/menuicon/dashboardblue.png'
    });
  }

  handleDashMouseOut() {
    this.setState({
       imgdash: 'image/menuicon/dashboardblack.png'
    });
}
handleUpgMouseOver() {
    this.setState({
       imgupg: 'image/menuicon/upgradeblue.png'
    });
  }

  handleUpgMouseOut() {
    this.setState({
       imgupg: 'image/menuicon/upgradeblack.png'
    });
}
handleNotiMouseOver() {
    this.setState({
       imgnoti: 'image/menuicon/notificationblue.png'
    });
  }

  handleNotiMouseOut() {
    this.setState({
       imgnoti: 'image/menuicon/notificationblack.png'
    });
}
    render(){
        return(
            <div className="fixedsidebar">
                <div className="container-fluid">
                    <div className="row">
            
                    <div className="">
                    <div className="sidebar">
                        <ul>
                            <li><Link to="profile-setting"><img src="image/icons/shikhar.jpg" className="img-responsive profile-pitcure" /></Link></li>
                            <li  className="side-myprofile"><Link to="profile-setting">My Profile</Link></li>
                            <li className="side-icon"><img src="image/menuicon/chat.png" className="img-responsive chatimg" /></li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <ul>
                            <li><Link to = "/cardview">
                                <img className="menu-icons menu-icons1" 
                                 onMouseOver={this.handleMouseOver} 
                                 onMouseOut={this.handleMouseOut} 
                                 src={this.state.imgswipe}/> Swipe
                                 </Link></li>
                            <li><Link to="/">
                                <img className="menu-icons menu-icons1" 
                                onMouseOver={this.handleHomeMouseOver} 
                                onMouseOut={this.handleHomeMouseOut} 
                                src={this.state.imghome}/> Home
                                </Link></li>
                            <li><Link to="/candidatesave">
                                <img className="menu-icons menu-icons1" 
                                onMouseOver={this.handleSavedMouseOver} 
                                onMouseOut={this.handleSavedMouseOut} 
                                src={this.state.imgsaved}/> Saved</Link></li>
                            <li><Link to ="/dashboard">
                                <img className="menu-icons menu-icons1" 
                                onMouseOver={this.handleDashMouseOver} 
                                onMouseOut={this.handleDashMouseOut} 
                                src={this.state.imgdash}/> Dashboard</Link>
                                </li>
                            <li><Link to="upgrade">
                                <img className="menu-icons menu-icons1" 
                                onMouseOver={this.handleUpgMouseOver} 
                                onMouseOut={this.handleUpgMouseOut} 
                                src={this.state.imgupg}/> Upgrade</Link></li>
                            <li><Link to="/notifications">
                                <img className="menu-icons menu-icons1" 
                                onMouseOver={this.handleNotiMouseOver} 
                                onMouseOut={this.handleNotiMouseOut} 
                                src={this.state.imgnoti}/> Notification </Link> <span>10</span></li>
                        </ul>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar;