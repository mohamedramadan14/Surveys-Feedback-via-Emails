/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import NewSurvey from "./survey/NewSurvey";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={NewSurvey} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
