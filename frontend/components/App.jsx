import React from "react";
import { Switch } from "react-router-dom";
import Modal from '../modal/modal'
import {Route, Redirect} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import LoggedInHeaderContainer from './headers/logged_in_header_container';
import LoggedOffHeaderContainer from './headers/logged_off_header_container';
import Profile from '../components/profiles/profile_container';


const App = () => (
    <>
        <div >
            <Modal />
            <header>
            </header>
        </div>
        <ProtectedRoute path="/" component={LoggedInHeaderContainer} />
        
        <Switch>
            <AuthRoute exact path="/" component={LoggedOffHeaderContainer} />
            <Route path='/404' render={()=> <h1 id="error-page">404 Page</h1>} />
            <ProtectedRoute exact path='/users/:userId' component={Profile}/>
            <Route exact path="/" render={() => <h1> </h1>} />
            <Route exact path="/home" render={() => <h1> </h1>} />
            <Redirect to="/404" />
        </Switch>
    </>
);

export default App;