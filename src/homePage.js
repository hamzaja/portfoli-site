import React from 'react'

class HomePage extends React.Component{
  projects = () => {
    this.props.history.push('/projects')
  }
  blogs = () => {
    this.props.history.push('/blogs')
  }

  render(){
    return(
      <div>
      <h4 onClick={this.projects}>projects</h4>
      <h4 onClick={this.blogs}>blogs</h4>
        <center><h2>Hamza Javed</h2><br/><br/><br/><br/>
          <p>I'm Hamza. I am full stack developer.</p>
          </center>
      </div>
    )
  }

}
export default HomePage
