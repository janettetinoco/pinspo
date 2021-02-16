import { RECEIVE_BOARD } from "../actions/board_actions";

export default function uiBoardReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BOARD:
            return action.board;
        default:
            return state;
    }
}