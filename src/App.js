import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Login from './Login';
import Pnewjob from './Pnewjob';
import Signup from './Signup';
import Role from './Role';
import ProfileVisibility from './ProfileVisibility';
import EnableLocation from './EnableLocation';
import Industry from './Industry';
import EmployeeCategory from './EmployeeCategory';
import RecruiterQuestionfirst from './RecruiterQuestionfirst';
import RecruiterQuestiontwo from './RecruiterQuestiontwo';
import RecruiterQuestionthree from './RecruiterQuestionthree';
import RecruiterQuestionfour from './RecruiterQuestionfour';
import RecruiterQuestionfive from './RecruiterQuestionfive';
import RecruiterQuestionsix from './RecruiterQuestionsix';
import Buildyourprofile from './Buildyourprofile';
import Company from './Company';
import Bio from './Bio';
import Accountrecovery from './Accountrecovery';
import Forgotpassword from './Forgotpassword';
import Sidebar from './Sidebar';
import Cardview from './Cardview';
import Bio2 from './Bio2';
import Groupcompany from './Groupcompany';
import CandidateAlert from './CondidateAlert';
import Resetotp from './Resetotp';
import Setnewpassword from './Setnewpassword';
import Dashboard from './Dashboard';
import Post_a_Job from './Post_a_job';
import Candidate_Saved from './Cadidate_Saved';
import Notifications from './Notificatins';
import ProfileSetting from './ProfileSetting';
import Post from './Post';
import JobDetails from './JobDetails';
import ActiveJob from './ActiveJob';
import Applicants from './Applicants';
import Upgdrade from "./Upgrade";





class App extends Component {
  render() {
    return (
  
      <BrowserRouter>
          <Switch>
         
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
          
            <Route exact path="/Login" component={() => (<Login />)} />
            <Route exact path="/Pnewjob" component={() => (<Pnewjob />)} />
            <Route exact path="/Signup" component={() => (<Signup />)} />
            <Route exact path="/Role" component={() => (<Role />)} />
            <Route exact path="/ProfileVisibility" component={() => (<ProfileVisibility />)} />
            <Route exact path="/EnableLocation" component={() => (<EnableLocation />)} />
            <Route exact path="/industry" component={() => (<Industry />)} />
            <Route exact path="/employeecategory" component={() => (<EmployeeCategory />)} />
            <Route exact path="/recruiterquestionfirst" component={() => (<RecruiterQuestionfirst />)} />
            <Route exact path="/recruiterquestiontwo" component={() => (<RecruiterQuestiontwo />)} />
            <Route exact path="/recruiterquestionthree" component={() => (<RecruiterQuestionthree />)} />
            <Route exact path="/recruiterquestionfour" component={() => (<RecruiterQuestionfour />)} />
            <Route exact path="/recruiterquestionfive" component={() => (<RecruiterQuestionfive />)} />
            <Route exact path="/recruiterquestionsix" component={() => (<RecruiterQuestionsix />)} />
            <Route exact path="/buildyourprofile" component={() => (<Buildyourprofile />)} />
            <Route exact path="/company" component={() => (<Company />)} />
            <Route exact path="/bio" component={() => (<Bio />)} />
            <Route exact path="/bio2" component={() => (<Bio2 />)} />
            <Route exact path="/accountrecovery" component={() => (<Accountrecovery />)} />
            <Route exact path="/forgotpassword" component={() => (<Forgotpassword />)} />
            <Route exact path="/sidebar" component={() =>(<Sidebar />)} />
            <Route exact path="/cardview" component={() =>(<Cardview />)} />
            <Route exact path="/group" component={() =>(<Groupcompany />)} />
            <Route exact path="/condidatealert" component={() =>(<CandidateAlert />)} />
            <Route exact path="/resetotp" component={() =>(<Resetotp />)} />
            <Route exact path="/setnewpassword" component={() =>(<Setnewpassword />)} />
            <Route exact path="/dashboard" component={() =>(<Dashboard />)} />
            <Route exact path="/postajob" component={() =>(<Post_a_Job />)} />
            <Route exact path="/candidatesave" component={() =>(<Candidate_Saved />)} />
            <Route exact path="/notifications" component={() =>(<Notifications />)} />
            <Route exact path="/profile-setting" component={() =>(<ProfileSetting />)} />
            <Route exact path="/post" component={() =>(<Post />)} />
            <Route exact path="/job-details" component={() =>(<JobDetails />)} />
            <Route exact path="/active-job" component={() =>(<ActiveJob />)} />
            <Route exact path="/applicants" component={() =>(<Applicants />)} />
            <Route exact path="/upgrade" component={() =>(<Upgdrade />)} />
            
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

