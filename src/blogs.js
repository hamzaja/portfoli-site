import React from 'react'
import { Link } from 'react-router-dom'

class Blogs extends React.Component{

  render(){
    return(
      <div>
        <Link to="/" > <button>homePage</button> </Link>
        <center><iframe
          src="https://medium.com/@hamzajaved71/"
          width="100%"
          height="600"></iframe></center>

      </div>
    )
  }


}
export default Blogs
