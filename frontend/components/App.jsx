import React from "react";
import { Switch } from "react-router-dom";
import LoggedOffHeaderContainer from './headers/logged_off_header_container'
import Modal from '../modal/modal'
import {Route, Redirect} from 'react-router-dom'
import LoggedInHeaderContainer from './headers/logged_in_header_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <>
        <div >
            <Modal />
            <header>
            </header>
        </div>
        <AuthRoute exact path="/" component={LoggedOffHeaderContainer} />
        <ProtectedRoute path="/" component={LoggedInHeaderContainer} />
        
        <Switch>
            {/* <AuthRoute exact path="/" render={() => <h1>This is the header when we are logged out</h1> }/> */}
            <Route path='/404' render={()=> <h1 id="error-page">404 Page</h1>} />
            <Route exact path="/" render={() => <h1> </h1>} />
            <Route exact path="/home" render={() => <h1> </h1>} />
            <Redirect to="/404" />
        </Switch>
    </>
);

export default App;