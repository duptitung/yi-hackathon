import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectForm from './../components/ProjectForm';
import ProjectDetail from './../components/ProjectDetail';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/form">
            <ProjectForm/>
          </Route>
          <Route path="/project-detail">
            <ProjectDetail />
          </Route>
          <Route path="/">
            <ProjectDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}