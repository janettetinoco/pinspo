import { RECEIVE_BOARD } from "../actions/board_actions";
import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal_actions";

export default function uiBoardReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BOARD:
            return action.board;
        case OPEN_MODAL:
            if(action.boardId){
                return action.boardId;
            }else{
                return state;
            };
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
}