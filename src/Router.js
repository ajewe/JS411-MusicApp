import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dash" component={Dashboard} />
    </Switch>
  )
}

export default Router

