import React, { Component, useEffect } from 'react';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import listingSingle from './components/PostDetails/ListingSingle';
import Auth from './components/Auth/Auth'
import Admin from './components/Form/Admin'


import Navbar from './components/Navbar/Navbar';
import Index from './components/Admin/Index';
import User from './components/Admin/Users/User';


import {useSelector, useDispatch} from 'react-redux';

import {getUsers} from './actions/users';

const App = () => {

  
  return (
    
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route exact path='/posts' component={Home}/>
        <Route path="/search" exact component={Home} />
        <Route path="/posts/:id" exact component={listingSingle} />
    
        <Route exact path="/Auth" component={Auth}/>
        <Route exact path="/Admin" component={Admin}/>
        <Route exact path="/Admins" component={Index}/>
        {/* <Route exact path="/Admins/users" component={() => <User users={users} />}/> */}

      
      </div>
    </Router>
  )
}

export default App;
