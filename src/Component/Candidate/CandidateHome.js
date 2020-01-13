import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



class CandidateHome extends Component{
    constructor() {
        super();
        this.state = {
            count : 0,
            follow_status: 'true',
          initialItems : [
            "Apples",
            "Broccoli",
            "Chicken",
            "Duck",
            "Eggs",
            "Fish",
            "Granola",
            "Hash Browns"  
          ],
          items: [],
          candidate : 
              {
                  name : 'Mike Nova',
                  picture :'image/icons/shikhar.jpg',
                  date : '20/12/2019',
                  time: '12:00pm',
                  post_content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
                  post_picture : 'image/icons/post.jpg',  
              },
          viewer_comments : 
            {
              name : 'Peter Karl',
              picture : 'image/icons/candidate.jpg',
              time : '2.00am',
              date: '29th Jan',
              comment : 'Nice!',
              
            }
          
        };
    
        this.filterList = this.filterList.bind(this);
    
      }
      changeFollowStatus = () => {
        this.setState({follow_status: "Following" });
     };
      componentWillMount(){
        this.setState({
          items: this.state.initialItems
        });
      }
    
      filterList(e){
        let updateList = this.state.initialItems;
        updateList = updateList.filter(item => {
          return item.toLowerCase().search(
            e.target.value.toLowerCase()
            ) !== -1;
        });
    
        this.setState({
          items: updateList
        });
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
             
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                     <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth"> 
                     <div className="col-md-8 offset-md-4 candidate-home-main">
                         <div className="col-sm-2 candidate-home-picture">
                             <img src={this.state.candidate.picture} />
                         </div>
                         <div className="col-sm-10">
                             <input 
                               className="form-control candidate-home-search-input" 
                               placeholder="Search"
                               type="text" 
                               onChange={this.filterList} />
                               <i class='fas fa-search candidate-search-icon'></i>
                         </div>
                         <div className="col-md-12 candidate-home-featured-button text-center">
                             <button className="btn">All</button>
                             <button className="btn">Featured</button>
                             <button className="btn">My Circle</button>
                         </div>
                         <div className="col-xs-2 col-sm-2 candidate-home-picture">
                             <img src={this.state.candidate.picture} />
                         </div>
                         <div className="col-xs-7 col-sm-7 candidate-hone-name">
                               <p>{this.state.candidate.name}</p>
                              <button className="btn" onClick= {() => this.setState({follow_status: !this.state.follow_status})}>
                                {this.state.follow_status? 'Follow' : 'Following'}
                              </button>
                         </div>
                         <div className="col-xs-3 col-sm-3 candidate-home-date-time">
                              <p>{this.state.candidate.date}</p>
                              <p>{this.state.candidate.time}</p>
                         </div>
                         <div className="col-md-12 candidate-home-post-data">
                            <p>{this.state.candidate.post_content}</p>
                            <img src={this.state.candidate.post_picture} />
                         </div>
                       <div className="col-md-12">
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
                       </div>
                        <div className="col-md-12 candidate-comments-inputs">
                           <input 
                               className="form-control" 
                               placeholder="Post your Comment"
                               type="text" />
                               <i class='far fa-comment-alt candidate-comments-icon'></i>
                        </div>
                        <div className="col-md-12">
                           <div className="col-md-2 candidate-viewer-picture">
                             <img src={this.state.viewer_comments.picture} />
                           </div>
                           <div className="col-md-7 candidate-viewer-name">
                             <h5>{this.state.viewer_comments.name}</h5>
                             <p>{this.state.viewer_comments.comment}</p>
                           </div>
                           <div className="col-md-3 candidate-viewer-date-time">
                              <h5>{this.state.viewer_comments.date}</h5>
                              <p>{this.state.viewer_comments.time}</p>
                           </div>  
                        </div>

                        <div className="col-md-12">
                           <div className="col-md-2 candidate-viewer-picture">
                             <img src={this.state.viewer_comments.picture} />
                           </div>
                           <div className="col-md-7 candidate-viewer-name">
                             <h5>{this.state.viewer_comments.name}</h5>
                             <p>{this.state.viewer_comments.comment}</p>
                           </div>
                           <div className="col-md-3 candidate-viewer-date-time lc">
                              <h5>{this.state.viewer_comments.date}</h5>
                              <p>{this.state.viewer_comments.time}</p>
                           </div>  
                        </div>


                     </div>                     
                   </div> 
                </div>
            </div>
        )
    }
}
export default CandidateHome;