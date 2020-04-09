import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';

function App() {

    return (
      <div>
        <AppBar position="static" style={{marginBottom: "40px"}}>
          <Toolbar>
            <Typography variant="h6" >
              My Music App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default App;
