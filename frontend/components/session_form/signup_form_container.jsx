import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import {signup, login} from '../../actions/session_actions'
import SessionForm from './session_form'
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};


const mapDispatchToProps = dispatch => {
    return {
        demoLogin: (user) => dispatch(login(user)),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));