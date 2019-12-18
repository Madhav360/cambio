import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div>

        <footer class="footer1">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12 text-center">
                <ul class="list-unstyled clear-margins">
                    <li class="widget-container widget_nav_menu">
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions">Terms of Usage</Link></li>
                            <li><Link to="#">Refund Policy</Link></li>
                            <li><Link to="#">Career</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<div class="footer-bottom text-center">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="copyright">
                    Copyright @ 2019 Cambios | All Rights Reserved
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
    }
}