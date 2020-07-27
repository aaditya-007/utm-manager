import React from 'react';
import axios from 'axios'
import {GET_AUTH} from '../constants'



export const userPostFetch = user => {
  
    return dispatch => {
     
      return axios.post(`${GET_AUTH}/signup`,user)
        .then(resp => {
            //console.log("resp",resp.data);
          return resp })
        .then(data => {
          if (data.data==="emailError") {
                console.log("Email already registered!");
          } else {
           // console.log("data",data.data.userId);
           // localStorage.setItem("token", data.token)
            dispatch({
              type: 'SIGNUP_USER',
              payload: data.data.userId
          })
          }
        })
    }
  }
  
  export const userLoginFetch = user => {
    //console.log("submit",user);
    return dispatch => {

      return axios.post(`${GET_AUTH}/signin`,user)
    .then(resp => 
         // console.log('res',resp);
         resp)
        .then(data => {
          if (data.message) {
            // Here you should have logic to handle invalid login credentials.
            // This assumes your Rails API will return a JSON object with a key of
            // 'message' if there is an error
          } else {
           // console.log("data",data.data);
            localStorage.setItem("token", data.data.token)
            dispatch({
              type: 'LOGIN_USER',
              payload: data.data.userId
          })
          }
        })
    }
  }

  export const logoutUser=()=>{
  
    dispatch({
      type: 'LOGOUT_USER'
  })

  }