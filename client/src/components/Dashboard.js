import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./survey/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
