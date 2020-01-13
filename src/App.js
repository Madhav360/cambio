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
import TermsConditions from './common/Terms-and-Conditions';
import PrivacyPolicy from './common/Privacy-Policy';
import CandidateProfileVisibility from './Component/Candidate/Candidate-Profile-Visibility';
import CandidateEnableLocation from './Component/Candidate/CandidateEnableLocation';
import CandidateIndustry from './Component/Candidate/CandidateIndustry';
import CandidateCategory from './Component/Candidate/CandidateCategory';
import CandidateAccountrecovery from './Component/Candidate/CandidateAccountrecovery';
import CandidateSetAJobAlert from './Component/Candidate/SetAJobAlert';
import IQTest from './Component/Candidate/IQTest';
import IQTestBegin from './Component/Candidate/IQTestBegin';
import IQTestQuestionone from './Component/Candidate/IQTestQuestionone';
import IQTestQuestiontwo from "./Component/Candidate/IQTestQuestiontwo";
import IQTestQuestionthree from "./Component/Candidate/IQTestQuestionthree";
import IQTestQuestionfour from "./Component/Candidate/IQTestQuestionfour";
import IQTestQuestionfive from "./Component/Candidate/IQTestQuestionfive";
import IQTestQuestionsix from "./Component/Candidate/IQTestQuestionsix";
import CandidateDashboard from './Component/Candidate/CandidateDashboard';
import CandidateHome from './Component/Candidate/CandidateHome';
import CandidateUdgrade from './Component/Candidate/CandidateUpgrade';
import CandidateNotifications from './Component/Candidate/CandidateNotificatins';
import CandidateCardview from './Component/Candidate/CandidateCardview';
import CandidateProfileSetting from './Component/Candidate/CandidateProfileSetting';
import CandidateUpCommingInterview from './Component/Candidate/CandidateUpCommingInterview';
import CandidateAllappliedJob from './Component/Candidate/CandidateAllappliedJob';
import CandidateComplitedInterviews from './Component/Candidate/CandidateComplitedInterviews';
import CandidateMatchedJob from './Component/Candidate/CandidateMatchedJob';
import CandidateCurrentInterviews from './Component/Candidate/CandidateCurrentInterviews';
import CandidateSaved from './Component/Candidate/CandidateSaved';
import EmployerRescheduleInterviews from './Component/EmployerRescheduleInterviews';
import EmployerCurrentInterviews from './EmployerCurrentInterviews';
import EmployerComplitedInterviews from './EmployerComplitedInterviews';
import EmployerUpcomingInterviews from './EmployerUpcomingInterviews';
import EmployerExpireJobs from './EmployerExpireJobs';
import EmployerAllJobs from './EmployerAllJobs';






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
            <Route exact path="/terms-and-conditions" component={() =>(<TermsConditions />)} />
            <Route exact path="/privacy-policy" component={() =>(<PrivacyPolicy />)} />
            <Route exact path="/candidate-profile-visibility" component={() =>(<CandidateProfileVisibility />)} />
            <Route exact path="/candidate-enable-location" component={() =>(<CandidateEnableLocation />)} />
            <Route exact path="/candidate-category" component={() =>(<CandidateCategory />)} />
            <Route exact path="/candidate-industry" component={() =>(<CandidateIndustry />)} />
            <Route exact path="/candidate-account-recovery" component={() =>(<CandidateAccountrecovery />)} />
            <Route exact path="/candidate-set-a-job-alert" component={() =>(<CandidateSetAJobAlert />)} />
            <Route exact path="/iq-test" component={() =>(<IQTest />)} />
            <Route exact path="/iq-test-begin" component={() =>(<IQTestBegin />)} />
            <Route exact path="/iq-test-question-1" component={() =>(<IQTestQuestionone />)} />
            <Route exact path="/iq-test-question-2" component={() =>(<IQTestQuestiontwo />)} />
            <Route exact path="/iq-test-question-3" component={() =>(<IQTestQuestionthree />)} />
            <Route exact path="/iq-test-question-4" component={() =>(<IQTestQuestionfour />)} />
            <Route exact path="/iq-test-question-5" component={() =>(<IQTestQuestionfive />)} />
            <Route exact path="/iq-test-question-6" component={() =>(<IQTestQuestionsix />)} />
            <Route exact path="/candidate-dashboard" component={() =>(<CandidateDashboard />)} />
            <Route exact path="/candidate-home" component={() =>(<CandidateHome />)} />
            <Route exact path="/candidate-upgrade" component={() =>(<CandidateUdgrade />)} />
            <Route exact path="/candidate-notifications" component={() =>(<CandidateNotifications />)} />
            <Route exact path="/candidate-cardview" component={() =>(<CandidateCardview />)} />
            <Route exact path="/candidate-profile-setting" component={() =>(<CandidateProfileSetting />)} />
            <Route exact path="/candidate-upcoming-interview" component={() =>(<CandidateUpCommingInterview />)} />
            <Route exact path="/candidate-all-applied-job" component={() =>(<CandidateAllappliedJob />)} />
            <Route exact path="/candidate-complited-interviews" component={() =>(<CandidateComplitedInterviews />)} />
            <Route exact path="/candidate-matched-job" component={() =>(<CandidateMatchedJob />)} />
            <Route exact path="/candidate-current-interview" component={() =>(<CandidateCurrentInterviews />)} />
            <Route exact path="/candidate-saved" component={() =>(<CandidateSaved />)} />
            <Route exact path="/employer-reschedule-interviews" component={() =>(<EmployerRescheduleInterviews />)} />
            <Route exact path="/employer-current-interviews" component={() =>(<EmployerCurrentInterviews />)} />
            <Route exact path="/employer-complited-interviews" component={() =>(<EmployerComplitedInterviews />)} />
            <Route exact path="/employer-upcoming-interviews" component={() =>(<EmployerUpcomingInterviews />)} />
            <Route exact path="/employer-expire-jobs" component={() =>(<EmployerExpireJobs />)} />
            <Route exact path="/employer-all-jobs" component={() =>(<EmployerAllJobs />)} />
           
            
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

