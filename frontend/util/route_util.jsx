//will route depending on signed in or not
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return ({
        loggedIn: Boolean(state.session.currentUser)
    })
};

//<AuthRoute path = "" component={} />

//component: Componetn changes the variable name component  to Capitalized Component
const Auth = ({ loggedIn, path, component: Component, exact }) => {//redirects if logged out
    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                loggedIn ? <Redirect to="/home" /> : <Component {...props} />
            )}
        />
    )
};

const Protected = ({ loggedIn, path, component: Component, exact }) => {//only accessible when logged in
    return (
        <Route
            path={path}
            exact={exact}
            render={props => (
                loggedIn ? <Component {...props} /> : <Redirect to="/" />
            )}
        />
    )
};
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));