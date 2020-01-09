import React, {Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import UpComingInterview from './UpComingInterviews';


class CandidateUpCommingInterview extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate: new Date(),
            time: '10:00',
            est_duration: '',
        }

        this.EstDurationHandler = this.EstDurationHandler.bind(this);
    }
    
    EstDurationHandler(event){
        this.setState(
            {est_duration:event.target.value}
        )
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    onChange = date => this.setState({ date })
    onTime = time => this.setState({ time })
    render(){
        return(
            <div>
              
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                      <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9">
                    <p className="back">Back</p>
                   <div class="row  dashpagewidth role-height"> 
                        <div className="col-md-12 postajob-head ">
                           <h3 className="text-center">Upcomming Interview</h3>
                        </div>                            
        {/* ----------------------------- Applicants people end------------------------------------- */}
                   

                   {/* --------------applicant profile---------------------- */}
                   
                   <UpComingInterview />
                   <UpComingInterview />
                   <UpComingInterview />
                   <UpComingInterview />

                   {/* --------------------profile applicant end--------------------- */}
                 </div> 
                </div>
            </div>
        )
    }
}
export default CandidateUpCommingInterview;



