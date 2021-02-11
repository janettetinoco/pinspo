import React from "react";
import { Switch } from "react-router-dom";
import LoggedOffHeaderContainer from './headers/logged_off_header_container'
import Modal from '../modal/modal'
import {Route} from 'react-router-dom'
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
            {/* <ProtectedRoute path="/home" render={()=> <h1>This is the home component</h1>} /> */}
        </Switch>
    </>
);

export default App;