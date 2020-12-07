import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Auth/Login"
import Index from "./pages/"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  )
}

export default App
