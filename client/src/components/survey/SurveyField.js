import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label> {label}</label>
      <input {...input} />
      <div className="red-text" style={{ margin: "10px 0", fontWeight: "500" }}>
        {touched ? error : null}
      </div>
    </div>
  );
};

export default SurveyField;
