import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form'
import {withRouter} from 'react-router-dom'
import {getUserBoards, receiveUserBoards} from '../../actions/board_actions'


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        // pullBoards: (userId) => dispatch(getUserBoards(userId)),
        otherForm: (
            <h1 onClick={() => dispatch(openModal('signup'))} className="clickable-link">
                Signup
            </h1>
        ),
        closeModal: () => dispatch(closeModal())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
