import React from 'react';
import Blogs from './blogs'
import Projects from './projects'
import HomePage from './homePage'
import { Route, withRouter } from 'react-router-dom'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/blogs'} component={Blogs}/>
        <Route path={'/projects'} component={Projects}/>
      </switch>
    )
  }

}

export default withRouter(App);
