import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <p>Blogs</p>
          Hamza Javed
      </div>
    )
  }

}

export default withRouter(App);
