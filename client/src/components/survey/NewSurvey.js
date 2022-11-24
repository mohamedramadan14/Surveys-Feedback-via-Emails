/** This is component is to show SurveyForm and ReviewForm */

import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyFormReview from "./SurveyFormReview";

const NewSurvey = () => {
  const [showFormReview, setFormShowReview] = useState(false);

  return (
    <div>
      {showFormReview ? (
        <SurveyFormReview onCancel={() => setFormShowReview(false)} />
      ) : (
        <SurveyForm onSurveyFormSubmit={() => setFormShowReview(true)} />
      )}
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(NewSurvey);
