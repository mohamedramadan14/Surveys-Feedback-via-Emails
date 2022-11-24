import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

const SurveyForm = (props) => {
  const renderFields = () => {
    return formFields.map(({ label, name }, i) => (
      <Field
        key={i}
        component={SurveyField}
        type="text"
        label={label}
        name={name}
      />
    ));
  };
  return (
    <div>
      <form onSubmit={props.handleSubmit(props.onSurveyFormSubmit)}>
        {renderFields()}
        <Link
          to="/surveys"
          className="red btn-flat white-text left"
          style={{ margin: "10px 0" }}
        >
          Cancel
          <i className="material-icons right">close</i>
        </Link>
        <button
          type="submit"
          className="teal btn-flat right white-text"
          style={{ margin: "10px 0" }}
        >
          Next
          <i className="material-icons right">arrow_forward</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  errors.emails = validateEmails(values.recipients || "");
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
