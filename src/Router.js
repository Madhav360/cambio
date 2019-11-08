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
import Postjob from "./Postjob";
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
    path:"/Postjob",
   	isExactPath: true,
   	component: <Postjob />
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