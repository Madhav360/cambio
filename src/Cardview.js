import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import $ from "jquery";


class Post_a_Job extends Component{
    constructor(props){
        super(props)
        this.state={
            job_title : '',
            
        }
    }

    componentDidMount() {
      $(function(){
          $('#button1').on('click',function(){
              $('#div1').show();
            $('#div2').hide();
          });
          $('#button1').on('click',function(){
              $('#div1').hide();
            $('#div2').show();
          });
        });
        $(function(){
          $('#button2').on('click',function(){
              $('#div1').show();
            $('#div2').hide();
          });
        });
        $(function(){
          $('#button3').on('click',function(){
              $('#div1').hide();
            $('#div2').show();
          });
        });
    }


    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    
                     <div className="swipe-title text-center">
                       <Link to="#" className="cardviewactive">Cardview</Link> 
                       <Link to="#">Mapview</Link>  
                     </div> 
                     <section>
                      <div className="col-md-12">
                      <div id='div1'>
                          <div className="col-md-6 hhh">
                             <div className="swipe-candidate-picture">
                                <img src="image/banner/swipe-back.png"  alt="profile picture" className="profile-picture"/>
                                <img src="image/menuicon/bookmark-black-shape.png" alt="#" className="top-icon" />
                                <img src="image/menuicon/share.png" className="share-icon" />
                                <img src="image/menuicon/video.png" className="video-icon" />
                             </div>
                             <div className="col-xs-12 text-center swipe-card">
                               <div className="swipe-candidate-name">
                                   <h4>John Mark, <span>20 yrs</span></h4>
                                   <p>5 ft 6 inch , 48kg</p>
                                   <p>Software Developer at Deuglo</p>
                                   <p>bangalore</p>
                                   <p>Cambio Id VGCFG5664</p>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>Total Tenurity </p>
                                    <p>2 Years</p>
                                 </div>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>lorem </p>
                                    <p>2.6</p>
                                 </div>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>lorem lorem lorem</p>
                                    
                                 </div>
                               </div>
                             </div>
                          </div>
                          <div className="col-md-6 swipe-tab-background">
                            <div classname="swipe-tabs">
                                <ul class="nav nav-tabs mm">
                                   <li class="swip-active"><a data-toggle="tab" href="#home">Bio</a></li>
                                   <li className="swip-active"><a data-toggle="tab" href="#menu1">Eduction</a></li>
                                   <li className="swip-active"><a data-toggle="tab" href="#menu2">Experience</a></li>
                                </ul>

                                <div class="tab-content text-center">
                                     <div id="home" class="tab-pane fade in active">
                                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                       <div className="resume">
                                         <p>Candidate.pdf</p>
                                       </div>
                                       <embed src="https://sumanbogati.github.io/tiny.pdf" width="100px" height="200px" />  
                                     </div>
                                     <div id="menu1" class="tab-pane fade">
                                         <h4>B.tech at Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</h4>
                                         <p>2009 - 2014</p>
                                         <h4>12th at iste natus error sit voluptatem accusantium </h4>
                                         <p>2007 - 2009</p>
                                         <h4>10th at iste natus error sit voluptatem accusantium </h4>
                                         <p>2005 - 2007</p>
                                     </div>
                                     <div id="menu2" class="tab-pane fade">
                                          <h4>Java Developer at Oracle</h4>
                                          <p>Jun 2019 - Present</p>
                                          <h4>Java Developer at IBM</h4>
                                          <p>Aug 2010- May 2019</p>
                                      </div>
                                 </div>
                            </div>
                          </div>
                          </div>
                          <div id='div2'>
                          <div className="col-md-6 hhh">
                             <div className="swipe-candidate-picture">
                                <img src="image/icons/shikhar.jpg"  alt="profile picture" className="profile-picture"/>
                                <img src="image/menuicon/bookmark-black-shape.png" alt="#" className="top-icon" />
                                <img src="image/menuicon/share.png" className="share-icon" />
                                <img src="image/menuicon/video.png" className="video-icon" />
                             </div>
                             <div className="col-xs-12 text-center swipe-card">
                               <div className="swipe-candidate-name">
                                   <h4>John Mark, <span>20 yrs</span></h4>
                                   <p>5 ft 6 inch , 48kg</p>
                                   <p>Software Developer at Deuglo</p>
                                   <p>Delhi</p>
                                   <p>Cambio Id VGCFG5664</p>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>Total Tenurity </p>
                                    <p>2 Years</p>
                                 </div>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>lorem </p>
                                    <p>2.6</p>
                                 </div>
                               </div>
                               <div className="col-xs-4">
                                 <div className="swipe-jobs">
                                    <img src="image/menuicon/dashboardblue.png" />
                                    <p>lorem lorem lorem</p>
                                    
                                 </div>
                               </div>
                             </div>
                          </div>
                          <div className="col-md-6 swipe-tab-background">
                            <div classname="swipe-tabs">
                                <ul class="nav nav-tabs mm">
                                   <li class="active swip-active"><a data-toggle="tab" href="#home">Bio</a></li>
                                   <li className="swip-active"><a data-toggle="tab" href="#menu1">Eduction</a></li>
                                   <li className="swip-active"><a data-toggle="tab" href="#menu2">Experience</a></li>
                                </ul>

                                <div class="tab-content text-center">
                                     <div id="home" class="tab-pane fade in active">
                                       <p>kkkkkkLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                       <div className="resume">
                                         <p>Candidate.pdf</p>
                                       </div>
                                       <embed src="https://sumanbogati.github.io/tiny.pdf" width="100px" height="200px" />  
                                     </div>
                                     <div id="menu1" class="tab-pane fade">
                                         <h4>M.tech at Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</h4>
                                         <p>2009 - 2014</p>
                                         <h4>12th at iste natus error sit voluptatem accusantium </h4>
                                         <p>2007 - 2009</p>
                                         <h4>10th at iste natus error sit voluptatem accusantium </h4>
                                         <p>2005 - 2007</p>
                                     </div>
                                     <div id="menu2" class="tab-pane fade">
                                          <h4>Java Developer at Oracle</h4>
                                          <p>Jun 2019 - Present</p>
                                          <h4>Java Developer at IBM</h4>
                                          <p>Aug 2010- May 2019</p>
                                      </div>
                                 </div>
                            </div>
                          </div>
                          </div>
                           <div className="col-md-12">
                             <div className="swipe-buutons text-center">
                                  <img id='button2' className="cardpointer" title="Prevoius" src="image/menuicon/backbtn.png" />
                                  <img id='button1' className="cardpointer" title="Pass" src="image/menuicon/closebtn.png" />
                                  <img id='button3' className="cardpointer" title="Like" src="image/menuicon/likebtn.png" />
                             </div>
                           </div>
                      </div>
                     </section>
                </div>
            </div>
        )
    }
}
export default Post_a_Job;