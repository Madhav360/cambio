import React , {Component} from 'react';


class ComplitedInterviews extends Component{
    constructor(props){
        super(props);
        this.state={
            complited_interview : {
                
                position : 'Looking for Java Developer',
                posted_on : '20th Jan 2020',
                expire_date : '20th Feb,2020',
                total_application : '25'
            }
      }
    }
    render(){
        return(
            <div>
                   <section className="job-requirement">
                       <div className="col-md-6">
                           <div className="row jobrequirements">
                                    <div class="dropdown active-job-dropdown">
                                       <i class="fas fa-ellipsis-v dropdown-toggle dottedicon" data-toggle="dropdown"></i>
                                       <ul class="dropdown-menu active-job-dropdown-menu">
                                          <li><a href="#">On hold</a></li>
                                          <li><a href="#">Rescheduled</a></li>
                                          <li><a href="#">Select</a></li>
                                        </ul>
                                    </div>
                                  <p className="requirement-heading">{this.state.complited_interview.position}</p>
                                  <div className="col-md-4">
                                     <p className="postedon">Posted on</p>
                                     <p className="postedondate">{this.state.complited_interview.posted_on}</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="postedon">Expire on</p>
                                     <p className="postedondate">{this.state.complited_interview.expire_date}</p>
                                  </div>
                                  <div className="col-md-4">
                                     <p className="totalapplicent">{this.state.complited_interview.total_application}</p>
                                     <p className="postedondatea">Applicant</p>
                                  </div>
                                  <div className="l">
                                  </div>
                           </div>
                       </div>
                   </section>
            </div>
        )
    }
}

export default ComplitedInterviews;