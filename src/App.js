import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  handleLoginClick = (event) => {
    event.preventDefault()
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <div>
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
