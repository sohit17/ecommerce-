import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
  console.log("login start")
  dispatch(loginStart());
  try {
    console.log("Asdfasd")
    const res = await publicRequest.post("/auth/login", user);
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  console.log(user,"user")
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(registerFailure());
  }
};
