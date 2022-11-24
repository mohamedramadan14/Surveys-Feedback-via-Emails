import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const CreditButton = ({ handleToken }) => {
  //console.log(handleToken);
  return (
    <StripeCheckout
      name="SurveySender"
      description="5 surveys send to your email list"
      panelLabel="Charge"
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn waves-effect waves-light blue darken-4">
        Add 5 Credits
      </button>
    </StripeCheckout>
  );
};

export default connect(null, actions)(CreditButton);
