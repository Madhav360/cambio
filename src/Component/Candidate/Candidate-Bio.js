import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';



class CandidateBio extends Component{
     
      constructor (props){
          super(props);
      }
    
   render(){
       return(
           <div>
               <Header />
               <div className="container">
                   <div className="row">
                       <section>
                           <p className="back">Back</p>
                           <div className="col-md-12 main-root basic-page-height">
                               <h2 className="text-center">Let's Build Your Profile</h2>
                               <h4 className="text-center">Below are 3 individual tabs </h4>
                               
                               <div className="col-md-4 offset-md-8 tabs">
                                  
                                  <div className="col-xs-12 text-center">
                                  <div className="profile-build-tabs">
                                      <div className="roundedd activeded">
                                          <Link to="/basic"><button className="btn">Basic</button></Link>
                                          <div className="student-dot-progess stident-dot-actived"></div>
                                          <div className="candidate-progress stident-dot-actived"></div>
                                      </div>
                                      <div className="roundedd activeded">
                                          <Link to="/highest-qualification"><button className="btn">Education & Experience</button></Link>
                                          <div className="student-dot-second-progess stident-dot-actived"></div>
                                          
                                      </div>
                                      <div className="roundedd activeded">
                                          
                                          <Link to="/profile-picture"><button className="btn">Bio</button></Link>
                                          <div className="student-third-second-progess stident-dot-actived"></div>
                                          <div className="condidate-second-progess stident-dot-actived"></div>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                               <div className="col-md-8 offset-md-4 tabs">
                                   <div className="col-md-4"></div>
                               </div>
                           </div>
                           
                       </section>
                   </div>
               </div>
               <Footer />
           </div>
       )
   }

}


export default CandidateBio;
