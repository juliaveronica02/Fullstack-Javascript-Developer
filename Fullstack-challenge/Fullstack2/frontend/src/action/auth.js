import axios from "axios";
import setAuthToken from "../utils/authToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import Swal from 'sweetalert2'

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  console.log("user", userData);
  axios
    .post(`http://localhost:7000/users/register`, userData)
    .then((res) => {
      // like windows alert.
      Swal.fire({
        icon: `success`,
        title: `Register Success`,
      })
      // if success register will be redirect to login page.
      history.push("/signin")
    })
    
    .catch((err) => {
      console.error(err.response)
      // get status error password from backend.
      if(err.response.status === 400){
        // alert.
        Swal.fire('Password must match')
      }
      // get status error email from backend.
      else if(err.response.status === 401){
        // alert.
        Swal.fire('Email already Registered')
      }
      // get status error phone from backend.
      else if(err.response.status === 402){
        // alert.
        Swal.fire('Phone Already in Use')
      }
      else{dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })}
    })
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL_LOGIN}`,

      userData
    )
    .then((res) => {
      console.log(res);
      // Save to localStorage Set token to localStorage
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded), 
      // when user success login will show alert.
      Swal.fire({
        icon: 'success',
        title: 'Login Success'
      })
      );
      
    })
    // catch error if password incorrect when login.
    .catch((err) => {
      console.error(err.response)
      if(err.response.status === 400){
        Swal.fire(
          {
            icon: 'error',
            text: 'Incorrect Password'
          }
        )
      }
      // catch error for email.
      else if(err.response.status === 404){
        Swal.fire(
          {
            icon: 'error',
            text: 'Email Not Found'
          }
        )
      }
    })
};
// Set logged in user
export const setCurrentUser = (decoded) => {
  return { type: SET_CURRENT_USER, payload: decoded };
};
// User loading
export const setUserLoading = () => {
  return { type: USER_LOADING };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage.
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests.
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false.
  dispatch(setCurrentUser({}));
};