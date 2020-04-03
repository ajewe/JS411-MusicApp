import React from 'react';
import { TextField, Button } from '@material-ui/core';

function Login(props) {
  return (
    <div className="App">
      <form onSubmit={props.handleLoginClick}>
        <TextField id="standard-basic" label="Username*"style={{width: "250px"}}/>
        <br />
        <TextField id="standard-basic" label="Password*" style={{width: "250px"}} />
        <br />
        <Button type="submit" variant="contained" color="primary" style={{margin: "30px", width:"250px"}} >
          Login
        </Button>
      </form>
    </div> 
  )
}

export default Login;