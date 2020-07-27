import React from 'react';
import {Link} from 'react-router-dom'

const landing = () => {
    return ( <div>
        <Link to="/signUp">Sign up</Link><br/>
        <Link to="/signIn">Sign In</Link><br/>
       
        Welcome to UTM Manager</div> );
}
 
export default landing;