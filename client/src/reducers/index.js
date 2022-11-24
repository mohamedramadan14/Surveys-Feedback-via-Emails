import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reducerForm } from "redux-form";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  form: reducerForm,
  surveys: surveysReducer,
});
