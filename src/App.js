import React from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}
