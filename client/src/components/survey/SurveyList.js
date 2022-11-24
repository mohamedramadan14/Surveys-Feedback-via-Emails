import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, []);

  const renderSurveys = (surveys) =>
    surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1 blue-grey" key={survey?._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey?.title}</span>
            <p>{survey?.body}</p>
            <p className="right">
              Sent On : {new Date(survey?.dateSend).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });

  return <div>{renderSurveys(surveys)}</div>;
};

function mapStateToProps({ surveys }) {
  return {
    surveys,
  };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
