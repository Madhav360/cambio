import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgswipe: 'image/menuicon/swipeblack.png',
            imghome: 'image/menuicon/homeblack.png'
         };
         this.handleMouseOver = this.handleMouseOver.bind(this);
         this.handleMouseOut = this.handleMouseOut.bind(this);

         this.handleHomeMouseOver = this.handleHomeMouseOver.bind(this);
         this.handleHomeMouseOut = this.handleHomeMouseOut.bind(this);
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
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="">
                    <div className="sidebar bg-primary">
                        <ul>
                            <li><img src="image/icons/shikhar.jpg" className="img-responsive profile-pitcure" /></li>
                            <li  className="side-myprofile">My Profile </li>
                            <li className="side-icon">|||</li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <ul>
                            <li><Link to = "#"><img className="menu-icons" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgswipe}/> Swipe</Link></li>
                            <li><Link to="#"><img className="menu-icons" onMouseOver={this.handleHomeMouseOver} onMouseOut={this.handleHomeMouseOut} src={this.state.imghome}/> Home</Link></li>
                            <li><Link to="/candidatesave"><i class="glyphicon glyphicon-save-file"></i> Saved</Link></li>
                            <li><Link to ="/dashboard"><i class="glyphicon glyphicon-dashboard"></i> Dashboard</Link></li>
                            <li><i class="glyphicon glyphicon-home"></i> Upgrade</li>
                            <li><i class="glyphicon glyphicon-home"></i> Notification <span>10</span></li>
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