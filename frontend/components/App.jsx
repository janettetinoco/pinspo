import React from "react";
import { Switch } from "react-router-dom";
import Modal from '../modal/modal';
import {Route, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LoggedInHeaderContainer from './headers/logged_in_header_container';
import LoggedOffHeaderContainer from './headers/logged_off_header_container';
import Profile from '../components/profiles/profile_container';
import BoardProfile from '../components/boards/board_profile_container';
import NewPinForm from '../components/pins/new_pin_form_container';
import Footer from './footer/footer';
import HomeFeed from '../components/pins/home_feed_container';


const App = () => (
    <>
        <header>
            <Modal />
        </header>
        <AuthRoute exact path="/" component={LoggedOffHeaderContainer} />
        <ProtectedRoute path="/" component={LoggedInHeaderContainer} />
        
        <Switch>
            <Route path='/404' render={()=> <h1 id="error-page">404 Page</h1>} />
            <ProtectedRoute exact path='/users/:userId' component={Profile} />
            <ProtectedRoute exact path='/boards/:boardId' component={BoardProfile} />
            <ProtectedRoute exact path='/pins/new' component={NewPinForm} />
            <Route exact path="/" render={() => <h1> </h1>} />
            <ProtectedRoute exact path="/home" component={HomeFeed} />
            <Redirect to="/404" />
        </Switch>
        <footer>
            <ProtectedRoute path="/" component={Footer} />
        </footer>

    </>
);

export default App;