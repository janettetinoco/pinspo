import {RECEIVE_BOARD_ERRORS, RECEIVE_BOARD} from '../actions/board_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';


const boardErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD:
            return [];
        case RECEIVE_BOARD_ERRORS:
            if(action.errors){
                return action.errors;
            }else{
                return state;
            }
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
}

export default boardErrorsReducer;
