import React from 'react';
import SignInForm from './components/signInForm'
import {Link} from 'react-router-dom'


const SignIn = () => {
    return ( <div><SignInForm/>
<Link to="/reset">Forgot Password?</Link>
    </div> );
}
 
export default SignIn;