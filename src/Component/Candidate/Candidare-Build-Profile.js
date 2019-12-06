import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';



class Candidate_Build_Profile extends Component{
     
      constructor (props){
          super(props);
      }
    
   render(){
       return(
           <div>
               <div className="container">
                   <div className="row">
                       <section>
                           <p className="back">Back</p>
                           <div className="col-md-12 text-center main-root">
                               <h2>Let's Build Your Profile</h2>
                               <h4>Below are 3 individual tabs </h4>
                               
                               <div className="col-md-6 offset-md-6 tabs">
                                   <div className="profile-build-tabs">
                                       <div className="roundedd">
                                           <span className="rounded-dot"></span>
                                           <Link to="#"><button className="btn">Basic</button></Link>
                                       </div>
                                       <div className="roundedd">
                                           <span className="rounded-dot"></span>
                                           <Link to="#"><button className="btn">Education & Experience</button></Link>
                                       </div>
                                       <div className="roundedd">
                                           <span className="rounded-dot"></span>
                                           <Link to="#"><button className="btn">Bio</button></Link>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           
                       </section>
                   </div>
               </div>
           </div>
       )
   }

}


export default Candidate_Build_Profile;
