import React , {Component} from 'react';

class CandidatesSaved extends Component{
    constructor (props){
        super(props);
        this.state = {
            saved_job : {
                designtion: 'Java Developer at Bangalore',
                last_day_to_apply : '10th Jan 2020',
                posted_by : 'IMB',
                picture : 'image/icons/shikhar.jpg'
            }
        }
    }

    render(){
        return(
            <div>
                <div className="col-md-12">
                    <div className="col-md-8 row offset-md-4 saved-candidate">
                       <div className="col-xs-9">
                           <h3>{this.state.saved_job.designtion}</h3>
                           <div className="col-xs-6 col-md-6">
                               <p>Last day to Apply</p>
                               <h5>{this.state.saved_job.last_day_to_apply}</h5>
                           </div>
                           <div className="col-xs-6 col-md-6">
                               <p>Posted by</p>
                               <h5>{this.state.saved_job.posted_by}</h5>
                           </div>
                       </div>
                       <div className="col-xs-3 col-md-3">
                           <img src={this.state.saved_job.picture} />
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidatesSaved;