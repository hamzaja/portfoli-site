import React from 'react'
import { Link } from 'react-router-dom'


class Projects extends React.Component{

  render(){

    return(
      <div>
        <Link to="/" > <button>homePage</button> </Link><br/>
        <div className="abc">
          <img src="Untitled.gif" alt="Smiley face" height="70%" width="60%"/><br/><br/><br/><br/>
        </div>
        <img src="larmzajack.gif" alt="Smiley face" height="70%" width="60%"/>

      </div>
    )
  }

}
export default Projects
