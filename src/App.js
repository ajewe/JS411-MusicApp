import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: true,
  }

  handleLoginClick = (event) => {
    event.preventDefault()
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <div>
        <AppBar position="static" style={{marginBottom: "40px"}}>
          <Toolbar>
            <Typography variant="h6" >
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.loggedIn ? 
        <Dashboard />
        :
        <Login handleLoginClick={this.handleLoginClick} />
        }
      </div>
    );
  }

}

export default App;
