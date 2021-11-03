import React from "react";
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginFormContainer from "./session_form/login_form_container";
import { SignUpForms } from "./session_form/signup_form_container";
import Splash from "./splash/splash";
import HeaderContainer from "./header/header";
import Main from './main/main';
import NotFound from './not_found/not_found';
import FeedContainer from './feed/feed';
import ProfileContainer from "./profile/profile";

const App = ({ rootPath }) => {
  // const header = (
  //   <div>
  //     <Route path='/' component={ HeaderContainer } />
  //   </div>
  // )
    
  return (
    <div>
      {/* {header} */}
      <Route path='/' component={ HeaderContainer }/>
      <section className='main-section'>
      {/* <AuthRoute exact path='/' component={ Splash } /> */}
        <Switch>
          <ProtectedRoute exact path='/feed' component={ FeedContainer } />
          <ProtectedRoute exact path='/users/:id' component={ ProfileContainer }/>
          <AuthRoute exact path='/' component={ Splash } />
          {/* <Route path='/*' component={ SignUpForms } /> */}
          <AuthRoute exact path='/login' component={ LoginFormContainer } />
          <AuthRoute path='/signup' component={ SignUpForms } />
          <Route component={ NotFound } />
        </Switch>
      </section>
    </div>
  )
};

const mapSTP = (state, ownProps) => {
  const path = ownProps.location.pathname;
  return ({
  rootPath: path == '/'
})};

const AppContainer = withRouter(connect(mapSTP)(App));

export default AppContainer;

// export default App;