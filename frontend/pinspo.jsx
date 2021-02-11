import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import  Root from './components/root'
import {login, logout, receiveCurrentUser} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const currentUser  = window.currentUser;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { currentUser: id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;

    } else {
        store = configureStore();
    }


    const root = document.getElementById("root");


    window.login = login;
    window.logout = logout;
    window.receiveCurrentUser = receiveCurrentUser;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root)
    
});