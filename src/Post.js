import React from 'react';
import {Component} from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'


class Post extends Component{
    constructor (props){
        super(props);
        this.state={
            count : 0
        }

    }

    incrementLikes = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    render(){
        return(
            <div>
           <div className="col-md-3">
               <Sidebar />
           </div>
           <div className="col-md-9">
               {/* <div class="back">
                   <p className="back">Back</p>
               </div> */}
               <div className="row dashpagewidth">
                   <div className="col-md-4 offset-col-8 searchpost">
                      <div class="form-group">
                         <input 
                             type="text" 
                             className="form-control searchbar"
                             placeholder="Search" 
                             />
                             <i class="glyphicon glyphicon-search seachicon" />
                      </div>
                   </div>
                   <div className="col-md-12">
                       <div className="postbtn text-center">
                           <ul>
                               <li><button className="btn ">All</button></li>
                               <li><button className="btn ">Feature</button></li>
                               <li><button className="btn ">My Circle</button></li>
                               <li><button className="btn ">IQ Topper</button></li>
                           </ul>
                       </div>
                   </div>
                    <div className="col-xs-12 col-md-12 user-post-profile">
                        <div className="col-xs-3 col-md-2 text-center">
                           <img src="image/icons/shikhar.jpg" className="img-responsive post-use-picture" />
                        </div>
                        <div className="col-xs-6 col-md-6">
                            <div className="post-user-name">
                               <h3>Niko Nova</h3>
                               <button className="btn">Follow</button>
                            </div>
                        </div>
                        <div className="col-xs-3 col-md-4">
                            <div className="post-user-date">
                                <p>20th Sept <br/><span className="posttime">02:00pm</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-12 post-conents">
                        <div className="post-conent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="post-picture">
                              <img src="image/icons/post.jpg" className="img-responsive" />
                        </div>
                        <div className="postlikes">
                            <ul>
                                <li>{this.state.count} Like</li>
                                <li>2 Comments</li>
                            </ul>
                        </div>
                        <div className="post-comment-action">
                            <ul>
                                <li onClick={this.incrementLikes}><i class='far fa-thumbs-up'></i> Like</li>
                                <li>|</li>
                                <li><i class='far fa-comment-alt'></i> Comments</li>
                                <li>|</li>
                                <li><i class='fas fa-share'></i> Share</li>
                            </ul>
                        </div>
                        <div className="col-md-12 form-group  post-user-comment">
                           <div class="form-group">
                             <input 
                                type="text" 
                                className="form-control commentbox"
                                placeholder="Post Your Comments"
                             />
                             <i class="far fa-comment-alt postcommenticon" />
                             </div>
                        </div>
                        {/* ----------------user comments start here---------------------- */}
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="userpost-comments">
                                <ul>
                                    <li>
                                        <div className="col-sm-3 col-xs-2 col-md-2">
                                           <div className="commentor-photo">
                                              <img src="image/icons/shikhar.jpg" className="img-responsive commentor-pics" />
                                           </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-7 col-md-7">
                                            <div className="commentor-name">
                                               <h6>Emmanuel</h6>
                                                <p>nice!</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3">
                                             <div className="commenttime commentor-name">
                                                 <h6>30 Dec</h6>
                                                 <p>2:00 pm</p>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="userpost-comments">
                                <ul>
                                    <li>
                                        <div className="col-sm-2 col-xs-2 col-md-2">
                                           <div className="commentor-photo">
                                              <img src="image/icons/shikhar.jpg" className="img-responsive commentor-pics" />
                                           </div>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7">
                                            <div className="commentor-name">
                                               <h6>Emmanuel</h6>
                                                <p>nice!</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3">
                                             <div className="commenttime commentor-name">
                                                 <h6>30 Dec</h6>
                                                 <p>2:00 pm</p>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="userpost-comments">
                                <ul>
                                    <li>
                                        <div className="col-sm-2 col-xs-2 col-md-2">
                                           <div className="commentor-photo">
                                              <img src="image/icons/shikhar.jpg" className="img-responsive commentor-pics" />
                                           </div>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7">
                                            <div className="commentor-name">
                                               <h6>Emmanuel</h6>
                                                <p>nice!</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3">
                                             <div className="commenttime commentor-name">
                                                 <h6>30 Dec</h6>
                                                 <p>2:00 pm</p>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 sendpost">
                            <div className="userpost-comments">
                                <ul>
                                    <li>
                                        <div className="col-sm-2 col-xs-2 col-md-2">
                                           <div className="commentor-photo">
                                              <img src="image/icons/shikhar.jpg" className="img-responsive commentor-pics" />
                                           </div>
                                        </div>
                                        <div className="col-xs-7 col-sm-7 col-md-7">
                                            <div className="commentor-name">
                                               <h6>Karl kane</h6>
                                                <p>very good!</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3">
                                             <div className="commenttime commentor-name">
                                                 <h6>30 Dec</h6>
                                                 <p>2:00 pm</p>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="viewallcomments text-center">
                                <p data-toggle="modal" data-target="#myModalsx">View All Comments</p>
                            </div>
                            
                            <i class='fas fa-plus addmorepost' data-toggle="modal" data-target="#postafeedpopup"></i>
                        </div>

              {/* -------------Post Comments popup-------------- */}

                  <div id="myModalsx" class="modal fade" role="dialog">
                      <div class="row modal-dialog postcommentpopupdialog">
                          <div class="modal-content">
                               <div class="modal-body">
                                   <i class="material-icons feedpopupclose" data-dismiss="modal">close</i>
                                   <div className="feedpostcontent text-center">
                                      <form>
                                          <div className="row usepopup-comments">
                                             <ul>
                                                 <li className="gg">
                                                     <div className="col-xs-3 usewidth imgwidth">
                                                        <img src="image/icons/shikhar.jpg" 
                                                         className="img-responsive popuuuserpicture" />
                                                     </div>
                                                     <div className="col-xs-6 usewidth usercommentwidth">
                                                        <h6>Marcus Santos </h6>
                                                         <p>cool !</p>
                                                     </div>
                                                     <div className="col-xs-3 usewidth">
                                                         <i class='far fa-thumbs-up'></i>
                                                     </div>
                                                  </li>
                                                  <hr />
                                                  <li className="gg">
                                                       <div className="col-xs-3 usewidth imgwidth">
                                                          <img src="image/icons/shikhar.jpg" 
                                                          className="img-responsive popuuuserpicture" />
                                                        </div>
                                                        <div className="col-xs-6 usewidth usercommentwidth">
                                                           <h6>Marcus Santos </h6>
                                                           <p>cool !</p>
                                                        </div>
                                                        <div className="col-xs-3 usewidth">
                                                           <i class='fas fa-share'></i>
                                                        </div>
                                                    </li>
                                                    <hr />
                                                    <li className="gg">
                                                         <div className="col-xs-3 usewidth imgwidth">
                                                             <img src="image/icons/shikhar.jpg" 
                                                             className="img-responsive popuuuserpicture" />
                                                         </div>
                                                         <div className="col-xs-6 usewidth usercommentwidth">
                                                           <h6>Marcus Santos </h6>
                                                             <p>cool !</p>
                                                         </div>
                                                         <div className="col-xs-3 usewidth">
                                                             <i class='far fa-thumbs-up'></i>
                                                         </div>
                                                    </li>
                                                    <hr />
                                                    <li className="gg">
                                                        <div className="col-xs-3 usewidth imgwidth">
                                                             <img src="image/icons/shikhar.jpg" 
                                                             className="img-responsive popuuuserpicture" />
                                                        </div>
                                                        <div className="col-xs-6 usewidth usercommentwidth">
                                                            <h6>Marcus Santos </h6>
                                                            <p>cool !</p>
                                                        </div>
                                                        <div className="col-xs-3 usewidth">
                                                            <i class='far fa-thumbs-up'></i>
                                                        </div>
                                                     </li>
                                                     <hr />
                                                     <li className="gg">
                                                        <div className="col-xs-3 usewidth imgwidth">
                                                             <img src="image/icons/shikhar.jpg" 
                                                             className="img-responsive popuuuserpicture" />
                                                        </div>
                                                        <div className="col-xs-6 usewidth usercommentwidth">
                                                            <h6>Marcus Santos </h6>
                                                            <p>cool !</p>
                                                        </div>
                                                        <div className="col-xs-3 usewidth">
                                                            <i class='far fa-thumbs-up'></i>
                                                        </div>
                                                     </li>
                                                     <hr />
                                                     <li className="gg">
                                                        <div className="col-xs-3 usewidth imgwidth">
                                                             <img src="image/icons/shikhar.jpg" 
                                                             className="img-responsive popuuuserpicture" />
                                                        </div>
                                                        <div className="col-xs-6 usewidth usercommentwidth">
                                                            <h6>Marcus Santos </h6>
                                                            <p>cool !</p>
                                                        </div>
                                                        <div className="col-xs-3 usewidth">
                                                            <i class='far fa-thumbs-up'></i>
                                                        </div>
                                                     </li>
                                                     <hr />
                                              </ul>          
                                         </div>
                                         <div className="comment-popup-input">
                                             <div class="form-group">
                                                 <input 
                                                   type="text" 
                                                   className="form-control commentbox popcommentbox"
                                                   placeholder="Write a Comments..."
                                                  />
                                                  <i class="glyphicon glyphicon-send postsendiconpopup"></i>
                                             </div>
                      
                                          </div>     
                                   </form>
                              </div>
                           </div>
                       </div>
                   </div>
              </div>

{/* -----------------------------post comment popup end---------------------------------------- */}

{/* -----------------------------------Post a feed popup start here----------------------------------------- */}
<div id="postafeedpopup" class="modal fade" role="dialog">
  <div class="modal-dialog feedpopupdialog">

  
    <div class="modal-content">
      
      <div class="modal-body">
        <i class="material-icons feedpopupclose" data-dismiss="modal">close</i>
        <div className="feedpostcontent text-center">
            <h2>Feed a Post</h2>
            <form>
               <div className="form-group">
                 <textarea 
                    className="form-control feddposttextarea" 
                    rows="5"
                    placeholder="Type what do you want to post" 
                    id="comment" />
                </div>
          
           <div className="feedphotoandvideo">
           <div class="upload-btn-wrapper">
                <button class="btn btn mdv-company-iconss" 
                        onChange={this.handleChange}>
                        <img src="image/icons/photo.png" /> 
                </button><span className="feedphoto">Photo</span>
                 <input type="file" onChange={this.handleChange}/>
            </div>
            <div class="upload-btn-wrapper">
                <button class="btn btn mdv-company-iconss" 
                        onChange={this.handleChange}>
                        <img src="image/icons/video.png" /> 
                </button><span className="feedphoto">video</span>
                 <input type="file" onChange={this.handleChange}/>
            </div>
            <div className="feed-submit-button text-center">
                <button className="btn">Post</button>
            </div>
           </div>
           </form>
        </div>
      </div>
    </div>

  </div>
</div>


{/* -----------------------------------Post a feed popup end here----------------------------------------- */}



                        {/* ----------------------user comment end here--------------------------------- */}
                    </div>
               </div>
              
           </div>
        </div>
        )
    }
}


export default Post;