import React from "react";
import { Switch } from "react-router-dom";
import LoggedOffHeaderContainer from './headers/logged_off_header_container'
import Modal from '../modal/modal'
import {Route} from 'react-router-dom'

const App = () => (
    <>
        <div >
            <Modal />
            <header className='logged-off-header'>
                <h1>Pinspo</h1>
                <LoggedOffHeaderContainer />
            </header>
        </div>
        {/* <Switch>
            <Route exact path="/" component={LoggedOffHeaderContainer} />
        </Switch> */}
    </>
);

export default App;