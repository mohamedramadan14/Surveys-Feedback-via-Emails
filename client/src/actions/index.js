import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post("/api/billing", token);
  dispatch({ type: FETCH_USER, payload: data });
};
