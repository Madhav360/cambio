import React , {Component} from 'react';


class AppliedJobs extends Component{
    constructor(props){
        super(props);
        this.state={
            candidate : {
                profile_picture: 'image/icons/shikhar.jpg',
                position : 'Looking for Java Developer with 2 years of experience',
                name : 'Rohit',
                company_name : 'lorem lorem lorem',
                status : 'short list',
                time: '11:00 AM',
                date: '10th Oct, Mon',
                type_of_interview: 'Smart Interview',
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
                           <hr />
                           <div className="col-xs-12">
                               <hr className="hori-line" />
                           </div>
                           <div className="col-xs-4">
                               <div className="current-interview-date">
                                   <p>{this.state.candidate.date}</p>
                               </div>
                           </div>
                           <div className="col-xs-4">
                               <div className="current-interview-date">
                                  <p>{this.state.candidate.time}</p>
                               </div>
                           </div>
                           <div className="col-xs-4">
                               <div className="current-interview-date">
                                   <p>{this.state.candidate.type_of_interview}</p>
                               </div>
                           </div>
                       </div>
                   </div>
            </div>
        )
    }
}

export default AppliedJobs;