import React , {Component} from 'react';


class ComplitedInterviews extends Component{
    constructor(props){
        super(props);
        this.state={
            candidate : {
                profile_picture: 'image/icons/shikhar.jpg',
                position : 'Looking for Java Developer with 2 years of experience',
                name : 'Rohit',
                company_name : 'lorem lorem lorem',
                status : 'Pending documention'
            }
      }
    }
    render(){
        return(
            <div>
<div className="col-xs-12 col-md-6">
                       <div className="row applicant-candidate">
                           <div className="col-xs-3 col-md-3 hh">
                              <div className="applicant-profile-picture">
                                <img src={this.state.candidate.profile_picture} />
                              </div>
                           </div>
                           <div className="col-xs-9 col-md-9">
                               <div className="interviewcomplited-data">
                                  <h5>{this.state.candidate.position}</h5>
                                  <h4>{this.state.candidate.name}</h4>
                                  <p>{this.state.candidate.company_name}</p>
                                  <p className="interview-status">{this.state.candidate.status}</p>
                               </div>
                           </div>
                       </div>
                   </div>
            </div>
        )
    }
}

export default ComplitedInterviews;