import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import DashboardContent from "./components/DashboardContent";
import SignInSide from "./components/SignInSide";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin" exact component={SignInSide}></Route>
          <DashboardContent>
            <Route
              path="/vnpt_pilot"
              exact
              component={ListEmployeeComponent}
            ></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
          </DashboardContent>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
