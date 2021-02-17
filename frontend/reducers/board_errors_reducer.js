import {RECEIVE_BOARD_ERRORS, RECEIVE_BOARD} from '../actions/board_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD:
            return [];
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
}
