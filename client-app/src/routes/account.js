import React from 'react';



import "antd/dist/antd.css";
import "../base.css";
import Main from "../layouts/Main";
import Links from "./Links/Links";
import Templates from "./LinkTemplates";
import Users from "./Users";
import SignOut from "./Auth/signout"
import {  Route, Switch } from "react-router-dom";
const Account = (props) => {
//console.log(props);
const {match}=props;
console.log(match);
    return ( <Main url={match.url}>
        <Switch>
          <Route exact path={`${match.path}/links`} component={Links} />
          <Route path={`${match.path}/templates`}  component={Templates} />
          <Route path={`${match.path}/users`}  component={Users} />
          <Route path={`${match.path}/signOut`}  exact component={SignOut} />
        
        </Switch>
      </Main> );
}
 
export default Account;