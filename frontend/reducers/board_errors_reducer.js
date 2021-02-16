import {RECEIVE_BOARD_ERRORS, RECEIVE_BOARD} from '../actions/board_actions';


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD:
            return [];
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        default:
            return state;
    }
}
