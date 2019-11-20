import React, { Component } from 'react';


class Sidebar extends Component{
    constructor(props){
        super(props);
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
                            <li><i class="glyphicon glyphicon-home"></i> Swipe</li>
                            <li><i class="glyphicon glyphicon-home"></i> Home</li>
                            <li><i class="glyphicon glyphicon-save-file"></i> Saved</li>
                            <li><i class="glyphicon glyphicon-dashboard"></i> Dashboard</li>
                            <li><i class="glyphicon glyphicon-home"></i> Upgrade</li>
                            <li><i class="glyphicon glyphicon-home"></i> Notification <spa>10</spa></li>
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