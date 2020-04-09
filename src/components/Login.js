import React from 'react';
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';

class Login extends React.Component {

  state = {
    loggedIn: false,
  }

  handleLoginClick = (event) => {
    event.preventDefault()
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleLoginClick}>
          <TextField id="standard-basic" label="Username*"style={{width: "250px"}}/>
          <br />
          <TextField id="standard-basic" label="Password*" style={{width: "250px"}} />
          <br />
          <Link to="/dash">
            <Button renderAs="button" type="submit" variant="contained" color="primary" style={{margin: "30px", width:"250px"}} >
              Login
            </Button>
          </Link>
          
        </form>
      </div> 
  )
  }

}

export default Login;