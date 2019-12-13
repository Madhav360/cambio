import React from "react";
import {ReactDOM, render} from 'react-dom';
import{
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter,
	ReactRoter
} from "react-router-dom";

import Home from "./Home";

import Login from "./Login";
import Pnewjob from "./Pnewjob";
import Signup from "./Signup";
import Role from "./Role";
import ProfileVisibility from "./ProfileVisibility";
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
import Bio2 from './Bio2';
import Accountrecovery from './Accountrecovery';
import Forgotpassword from './Forgotpassword'
import Sidebar from './Sidebar';
import Cardview from "./Cardview";
import Groupcompany from "./Groupcompany";
import CandidateAlert from "./CondidateAlert";
import Resetotp from "./Resetotp";
import Setnewpassword from "./Setnewpassword";
import Dashboard from "./Dashboard";
import Post_a_Job from "./Post_a_job";
import Candidate_Saved from "./Cadidate_Saved";
import Notifications from "./Notificatins";
import ProfileSetting from "./ProfileSetting";
import Post from "./Post";
import JobDetails from "./JobDetails";
import ActiveJob from "./ActiveJob";
import Applicants from "./Applicants";
import Upgdrade from "./Upgrade";
import Help from "./Help";
import Support from "./Support";
import AccountInfo from "./AccountInfo";
import Message from "./Message";
import Candidate_Build_Profile from "./Component/Candidate/Candidare-Build-Profile";
import Basic from "./Component/Candidate/Basic";
import EmpLetsBuildProfile from "./EmployeeLetsBuildProfile";
import CandidateSignup from './Component/Candidate/Sign-up';
import StudentQuestionone from "./Component/Candidate/StudentQuestionone";
import StudentQuestiontwo from "./Component/Candidate/StudentQuestiontwo";
import StudentQuestionthree from "./Component/Candidate/StudentQuestionthree";
import StudentQuestionfour from "./Component/Candidate/StudentQuestionfour";
import StudentQuestionfive from "./Component/Candidate/StudentQuestionfive";
import StudentQuestionsix from "./Component/Candidate/StudentQuestionsix";
import CandidateExperience from "./Component/Candidate/Candidate-Experience";
import CandidateBio from "./Component/Candidate/Candidate-Bio";
import CandidateGender from "./Component/Candidate/CandidateGender";
import CandidateLang from "./Component/Candidate/Candidate-Lang";
import MarriageStatus from "./Component/Candidate/MarriageStatus";
import Candidateheight from "./Component/Candidate/CandidateHeight";
import CandidateWeight from "./Component/Candidate/CandidateWeight";
import CandidateAbled from "./Component/Candidate/CandidateAbled";
import HighestQualification from "./Component/Candidate/HighestQualification";
import CurrentExperience from "./Component/Candidate/CurrentExperience";
import CandidateProfilePic from "./Component/Candidate/Candidate-Profile-Pic";



const appRoute =[
   {
   	path:"/",
   	isExactPath: true,
   	component: <Home />
   },
   {
    path:"/Home",
   	isExactPath: true,
   	component: <Home />
   },
  
   {
    path:"/Login",
   	isExactPath: true,
   	component: <Login />
   },
   {
    path:"/Pnewjob",
   	isExactPath: true,
   	component: <Pnewjob />
   },
   {
    path:"/Signup",
   	isExactPath: true,
   	component: <Signup />
   },
   {
    path:"/Role",
   	isExactPath: true,
   	component: <Role />
   },
   {
    path:"/ProfileVisibility",
   	isExactPath: true,
   	component: <ProfileVisibility />
   },
   {
    path:"/EnableLocation",
   	isExactPath: true,
   	component: <EnableLocation />
   },
   {
   path:"/Industry",
   isExactPath: true,
   component: <Industry />
},
{
	path:"/EmployeeCategory",
	isExactPath: true,
	component: <EmployeeCategory />
 },
 {
	path:"/RecruiterQuestionfirst",
	isExactPath: true,
	component: <RecruiterQuestionfirst />
 },
 {
	path:"/RecruiterQuestiontwo",
	isExactPath: true,
	component: <RecruiterQuestiontwo />
 },
 {
	path:"/RecruiterQuestionthree",
	isExactPath: true,
	component: <RecruiterQuestionthree />
 },
 {
	path:"/RecruiterQuestionfour",
	isExactPath: true,
	component: <RecruiterQuestionfour />
 },
 {
	path:"/RecruiterQuestionfive",
	isExactPath: true,
	component: <RecruiterQuestionfive />
 },
 {
	path:"/RecruiterQuestionsix",
	isExactPath: true,
	component: <RecruiterQuestionsix />
 },
 {
	path:"/Buildyourprofile",
	isExactPath: true,
	component: <Buildyourprofile />
 },
 {
	path:"/Company",
	isExactPath: true,
	component: <Company />
 },
 {
	path:"/Bio",
	isExactPath: true,
	component: <Bio />
 },
 {
	path:"/Bio2",
	isExactPath: true,
	component: <Bio2 />
 },
 {
	path:"/Accountrecovery",
	isExactPath: true,
	component: <Accountrecovery />
 },
 {
	path:"/Forgotpassword",
	isExactPath: true,
	component: <Forgotpassword />
 },
 {
	path:"/Sidebar",
	isExactPath: true,
	component: <Sidebar />
 },
 {
	path:"/Cardview",
	isExactPath: true,
	component: <Cardview />
 },
 {
	path:"/Groupcompany",
	isExactPath: true,
	component: <Groupcompany />
 },
 {
	path:"/CandidateAlert",
	isExactPath: true,
	component: <CandidateAlert />
 },
 {
	path:"/Resetopt",
	isExactPath: true,
	component: <Resetotp />
 },
 {
	path:"/Setnewpassword",
	isExactPath: true,
	component: <Setnewpassword />
 },
 {
	path:"/Dashboard",
	isExactPath: true,
	component: <Dashboard />
 },
 {
	path:"/Post_a_Job",
	isExactPath: true,
	component: <Post_a_Job />
 },
 {
	path:"/Candidate_Saved",
	isExactPath: true,
	component: <Candidate_Saved />
 },
 {
	path:"/Notifications",
	isExactPath: true,
	component: <Notifications />
 },
 {
	path:"/ProfileSetting",
	isExactPath: true,
	component: <ProfileSetting />
 },
 {
	path:"/Post",
	isExactPath: true,
	component: <Post />
 },
 {
	path:"/JobDetails",
	isExactPath: true,
	component: <JobDetails />
 },
 {
	path:"/ActiveJob",
	isExactPath: true,
	component: <ActiveJob />
 },
 {
	path:"/Applicants",
	isExactPath: true,
	component: <Applicants />
 },
 {
	path:"/Upgrade",
	isExactPath: true,
	component: <Upgdrade />
 },
 {
	path:"/help",
	isExactPath: true,
	component: <Help />
 },
 {
	path:"/support",
	isExactPath: true,
	component: <Support />
 },
 {
	path:"/accountinfo",
	isExactPath: true,
	component: <AccountInfo />
 },
 {
	path:"/message",
	isExactPath: true,
	component: <Message />
 },
 {
	path:"/lets-build-profile",
	isExactPath: true,
	component: <Candidate_Build_Profile />
 },
 {
	path:"/basic",
	isExactPath: true,
	component: <Basic />
 },
 {
	path:"/employee-lets-build-profile",
	isExactPath: true,
	component: <EmpLetsBuildProfile />
 },
 {
	path:"/sign-up",
	isExactPath: true,
	component: <Signup />
 },
 {
	path:"/studentquestionone",
	isExactPath: true,
	component: <StudentQuestionone />
 },
 {
	path:"/studentquestionsix",
	isExactPath: true,
	component: <StudentQuestionsix />
 },
 {
	path:"/studentquestionfive",
	isExactPath: true,
	component: <StudentQuestionfive />
 },
 {
	path:"/studentquestionfour",
	isExactPath: true,
	component: <StudentQuestionfour />
 },
 {
	path:"/studentquestionthree",
	isExactPath: true,
	component: <StudentQuestionthree />
 },
 {
	path:"/studentquestiontwo",
	isExactPath: true,
	component: <StudentQuestiontwo />
 },
 {
	path:"/candidate-experience",
	isExactPath: true,
	component: <CandidateExperience />
 },
 {
	path:"/candidate-bio",
	isExactPath: true,
	component: <CandidateBio />
 },
 {
	path:"/candidate-gender",
	isExactPath: true,
	component: <CandidateGender />
 },
 {
	path:"/candidate-lang",
	isExactPath: true,
	component: <CandidateLang />
 },
 {
	path:"/marriage-status",
	isExactPath: true,
	component: <MarriageStatus />
 },
 {
	path:"/height",
	isExactPath: true,
	component: <Candidateheight />
 },
 {
	path:"/weight",
	isExactPath: true,
	component: <CandidateWeight />
 },
 {
	path:"/abled",
	isExactPath: true,
	component: <CandidateAbled />
 },
 {
	path:"/highest-qualification",
	isExactPath: true,
	component: <HighestQualification />
 },
 {
	path:"/current-experience",
	isExactPath: true,
	component: <CurrentExperience />
 },
 {
	path:"/profile-picture",
	isExactPath: true,
	component: <CandidateProfilePic />
 },
];




//HashRouter  also apply # 

const routes= (
	<BrowserRouter>
	<Switch>
		{appRoute.map((route, idx) => {
			console.log(route,"1");
			return <Route
			    key={route.path}
			    path={route.path}
			    exact={route.isExactPath}
			    render={(params) => {
			    	 return route.component;
			    }}
		/>;
		})}
	</Switch>
	</BrowserRouter>
);

export default routes;