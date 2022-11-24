import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Confirm Your Survey Data</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text darker-3 btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  const formData = state.form.surveyForm.values;
  //console.log(state.form.surveyForm.values);
  return { formValues: formData };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
