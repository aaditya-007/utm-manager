import React from 'react';
import NewPasswordForm from './components/newPasswordForm'


const newPassword = (props) => {
 
    return ( <NewPasswordForm param={props.match.params}/> );
}
 
export default newPassword;