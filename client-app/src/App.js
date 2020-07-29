import React from "react";
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import { connect } from "react-redux";
//import { hot } from "react-hot-loader/root";
import Home from './routes/home/landing'
import Account from './routes/account'
import SignIn from "./routes/Auth/signIn";
import SignUp from "./routes/Auth/signup";
import ResetPass from "./routes/Auth/resetPass";
import NewPassword from "./routes/Auth/newPassword";
const App = (props) => {
console.log(props);
   return( <Router>
    
     
  <Switch>
  {localStorage.token? <Route path="/profile"  component={Account}/>
      : <Route exact path="/" component={Home} />}
      <Route path="/signIn"  component={SignIn} />
      <Route path="/signUp"  component={SignUp} />
      <Route path="/reset" exact component={ResetPass} />
      <Route path="/reset/:user/:token" exact component={NewPassword} />
      <Redirect to="/" />
      </Switch> 
    </Router>)
  
   };
const mapStatesToProps = (state) => ({
  isAuthenticated: state.currentUser
});

export default connect(mapStatesToProps,null)(App);
