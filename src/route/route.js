import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProjectForm from "./../components/ProjectForm"
import ProjectDetail from "./../components/ProjectDetail"
import ProjectListing from "../components/ProjectListing"

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ProjectListing} />
          <Route path="/form" component={ProjectForm} />
          <Route path="/project-detail" component={ProjectDetail} />
        </Switch>
      </div>
    </Router>
  )
}
