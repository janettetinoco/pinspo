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
        <Switch>
            <ProtectedRoute path="/home" component={LoggedInHeaderContainer} />
            <Route exact path="/" component={LoggedOffHeaderContainer} />
        </Switch>
    </>
);

export default App;