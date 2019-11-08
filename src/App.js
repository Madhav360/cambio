import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Postjob from './Postjob';
import Login from './Login';
import Pnewjob from './Pnewjob';
import Signup from './Signup';
import Role from './Role';
import ProfileVisibility from './ProfileVisibility';
import EnableLocation from './EnableLocation';
import Industry from './Industry';
import EmployeeCategory from './EmployeeCategory';

class App extends Component {
  render() {
    return (
  
      <BrowserRouter>
          <Switch>
         
            <Route exact path="/" component={() => (<div className="App"><Home /></div>)} />
            <Route exact path="/Postjob" component={() => (<Postjob />)} />
            <Route exact path="/Login" component={() => (<Login />)} />
            <Route exact path="/Pnewjob" component={() => (<Pnewjob />)} />
            <Route exact path="/Signup" component={() => (<Signup />)} />
            <Route exact path="/Role" component={() => (<Role />)} />
            <Route exact path="/ProfileVisibility" component={() => (<ProfileVisibility />)} />
            <Route exact path="/EnableLocation" component={() => (<EnableLocation />)} />
            <Route exact path="/industry" component={() => (<Industry />)} />
            <Route exact path="/employeecategory" component={() => (<EmployeeCategory />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;