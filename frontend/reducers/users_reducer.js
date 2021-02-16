import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_PROFILE} from '../actions/board_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
        case LOGOUT_CURRENT_USER:
            return {}; 
        case RECEIVE_PROFILE:
            let {id, username, email, age} = action.userProfile
            // debugger
            let newState = Object.assign({}, state );
            newState[action.userProfile.id] = { id, username, email, age};
            return newState
        default:
            return state;
    }
}

export default usersReducer;