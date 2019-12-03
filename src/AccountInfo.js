import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class AccountInfo extends Component{
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
                <div className="container-fluid account-info-back">
                    <div className="accountinfo">
                        <Link to="/dashboard">Back to Home</Link>
                    </div>
                    <div className="col-md-12">
                       <div className="account-info-menu">
                          <h2>Account Info</h2>
                          <ul>
                             <li><Link to="#">Proﬁle Settings</Link></li>
                             <li><Link to="#">Privacy Policy</Link></li>
                             <li><Link to="#">Terms of usage</Link></li>
                             <li><Link to="#">My Circle</Link></li>
                             <li><Link to="/help">Help</Link></li>
                             <li><Link to="#">Proﬁle Settings</Link></li>
                             <li><Link to="#">Support</Link></li>
                             <li><Link to="#">Logout</Link></li>
                             <li><Link to="#">Swap your Role</Link></li>
                             <li><Link to="#">Job Alert</Link></li>
                             <li><Link to="#">Delete Account</Link></li>
                             <li><Link to="#">Refer this App</Link></li>
                             
                          </ul>
                       </div>
                    </div>
                </div>
                   
            </div>
        )
    }
}
export default AccountInfo;