import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreditButton from "./CreditButton";

const Header = ({ auth }) => {
  function renderContent() {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">SignIn with google</a>
          </li>
        );
      default:
        return [
          <li key={"ab"}>
            <CreditButton />
          </li>,
          <li key={"abc"} style={{ margin: "0 10px" }}>
            {" "}
            Credits: {auth.credits}
          </li>,
          <li key={"abcde"}>
            <a href="/api/logout">logout</a>
          </li>,
        ];
    }
  }
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Link to={auth ? "/surveys" : "/"} className="left brand-logo">
          SurveySender
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Header);
