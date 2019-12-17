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
import Help from './Help';
import Support from './Support';
import AccountInfo from './AccountInfo';
import Message from './Message';
import Candidate_Build_Profile from './Component/Candidate/Candidare-Build-Profile';
import CandidateSignup from './Component/Candidate/Sign-up';
import Basic from './Component/Candidate/Basic';
import EmpLetsBuildProfile from './EmployeeLetsBuildProfile';
import StudentQuestionone from "./Component/Candidate/StudentQuestionone";
import StudentQuestiontwo from "./Component/Candidate/StudentQuestiontwo";
import StudentQuestionthree from "./Component/Candidate/StudentQuestionthree";
import StudentQuestionfour from "./Component/Candidate/StudentQuestionfour";
import StudentQuestionfive from "./Component/Candidate/StudentQuestionfive";
import StudentQuestionsix from "./Component/Candidate/StudentQuestionsix";
import CandidateExperience from './Component/Candidate/Candidate-Experience';
import CandidateBio from './Component/Candidate/Candidate-Bio';
import CandidateGender from './Component/Candidate/CandidateGender';
import CandidateLang from './Component/Candidate/Candidate-Lang';
import MarriageStatus from './Component/Candidate/MarriageStatus';
import Candidateheight from './Component/Candidate/CandidateHeight';
import CandidateWeight from './Component/Candidate/CandidateWeight';
import CandidateAbled from './Component/Candidate/CandidateAbled';
import HighestQualification from './Component/Candidate/HighestQualification';
import CurrentExperience from './Component/Candidate/CurrentExperience';
import CandidateProfilePic from './Component/Candidate/Candidate-Profile-Pic';
import CandidateAdharUpload from './Component/Candidate/UploadAdhar';
import CandidateAbout from './Component/Candidate/CandidateAbout';
import CandidateVideoResume from './Component/Candidate/CandidateVideoResume';
import EmployeeBio from './EmployeeBio';





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
            <Route exact path="/help" component={() =>(<Help />)} />
            <Route exact path="/support" component={() =>(<Support />)} />
            <Route exact path="/account-info" component={() =>(<AccountInfo />)} />
            <Route exact path="/message" component={() =>(<Message />)} />
            <Route exact path="/lets-build-profile" component={() =>(<Candidate_Build_Profile />)} />
            <Route exact path="/basic" component={() =>(<Basic />)} />
            <Route exact path="/employee-lets-build-profile" component={() =>(<EmpLetsBuildProfile />)} />
            <Route exact path="/sign-up" component={() =>(<CandidateSignup />)} />
            <Route exact path="/studentquestionone" component={() =>(<StudentQuestionone />)} />
            <Route exact path="/studentquestiontwo" component={() =>(<StudentQuestiontwo />)} />
            <Route exact path="/studentquestionthree" component={() =>(<StudentQuestionthree />)} />
            <Route exact path="/studentquestionfour" component={() =>(<StudentQuestionfour />)} />
            <Route exact path="/studentquestionfive" component={() =>(<StudentQuestionfive />)} />
            <Route exact path="/studentquestionsix" component={() =>(<StudentQuestionsix />)} />
            <Route exact path="/candidate-experience" component={() =>(<CandidateExperience />)} />
            <Route exact path="/candidate-bio" component={() =>(<CandidateBio />)} />
            <Route exact path="/candidate-gender" component={() =>(<CandidateGender />)} />
            <Route exact path="/candidate-lang" component={() =>(<CandidateLang />)} />
            <Route exact path="/marriage-status" component={() =>(<MarriageStatus />)} />
            <Route exact path="/height" component={() =>(<Candidateheight />)} />
            <Route exact path="/weight" component={() =>(<CandidateWeight />)} />
            <Route exact path="/abled" component={() =>(<CandidateAbled />)} />
            <Route exact path="/highest-qualification" component={() =>(<HighestQualification />)} />
            <Route exact path="/current-experience" component={() =>(<CurrentExperience />)} />
            <Route exact path="/profile-picture" component={() =>(<CandidateProfilePic />)} />
            <Route exact path="/upload-adhar" component={() =>(<CandidateAdharUpload />)} />
            <Route exact path="/about-you" component={() =>(<CandidateAbout />)} />
            <Route exact path="/video-resume" component={() =>(<CandidateVideoResume />)} />
            <Route exact path="/employee-bio" component={() =>(<EmployeeBio />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

