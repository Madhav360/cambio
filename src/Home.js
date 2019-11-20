import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from './common/Header';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
        <div>
          <Header />
          <Carousel>
               <div>
             
               <img class="img-responsive" src="image/banner/banner1.png" />
               <p className="legend">Are You loking<br /> your <span className="dremjob">dream job</span></p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821_960_720.jpg" />
               
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg" />
                 
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg" />
                   
                </div>
            </Carousel>
        </div>
       )
    }
}