import React,{useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import {} from '../../store/action.js';
import {connect} from 'react-redux';

const SignOut = (props) => {

    useEffect(() => {
        localStorage.removeItem("token");
        props.logoutUser();
      });
    
       
    return (  <Redirect to="/"/>);
}
const mapDispatchToProps = dispatch => ({
 
    logoutUser: () => dispatch(logoutUser())
  })
export default connect(null, mapDispatchToProps) (SignOut);