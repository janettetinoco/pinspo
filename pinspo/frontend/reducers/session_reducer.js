import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze({
    id: null
});


const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {currentUser: action.currentUser.id};
        case LOGOUT_CURRENT_USER:
            return _nullUser; 
        default:
            return state;
    }
}

export default SessionReducer;