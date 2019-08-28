import React from 'react';

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
            <div class="col-lg-5 col-md-5 col-xs-12">
                <ul class="list-unstyled clear-margins">
                    <li class="widget-container widget_recent_news">
                    <img className="img-responsive logofooter" src="image/logofooter.png" />
                        <div class="footerp">
                            <h2 class="title-median">Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text</h2>
                        </div>
                        <div class="social-icons">
                            <ul class="nomargin">
                                <a href="#"><i class="fa fa-facebook social-icon facebook" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-instagram social-icon facebook" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-twitter social-icon facebook" aria-hidden="true"></i></a>
								<a href="#"><i class="fa fa-linkedin social-icon facebook" aria-hidden="true"></i></a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-12">
                <ul class="list-unstyled clear-margins">
                    <li class="widget-container widget_nav_menu">
                        <h1 class="title-widget">Categories</h1>
                        <ul>
                            <li><a href="#"> Tech & Programming</a></li>
                            <li><a href="#"> Product Design</a></li>
                            <li><a href="#"> Digital Marketing</a></li>
                            <li><a href="#"> Writing & Translation</a></li>
                            <li><a href="#"> Video & Animation</a></li>
                            <li><a href="#"> Creative & Design</a></li>
                            <li><a href="#"> Show all</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-xs-6">
                <ul class="list-unstyled clear-margins">
                    <li class="widget-container widget_nav_menu">
                        <h1 class="title-widget">About</h1>
                        <ul>
                            <li><a href="#"> About Us</a></li>
                            <li><a href="#"> The Team</a></li>
                            <li><a href="#"> Privacy Policy</a></li>
                            <li><a href="#"> Terms of Usage</a></li>
                            <li><a href="#"> Refund Policy</a></li>
                            <li><a href="#"> Career</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
			<div class="col-lg-2 col-md-2 col-xs-6">
                <ul class="list-unstyled clear-margins">
                    <li class="widget-container widget_nav_menu">
                        <h1 class="title-widget">Contact</h1>
                        <ul>
                            <li><a href="#"> FAQ's</a></li>
                            <li><a href="#"> Support</a></li>
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