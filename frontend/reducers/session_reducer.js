import { RECEIVE_BOARD } from "../actions/board_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import BoardProfile from "../components/boards/board_profile";

const _nullUser = Object.freeze({
    currentUser: null
});


const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            let newState = {currentUser: action.currentUser.id};
            let currentUserBoards= {}
            action.currentUser.boards.map((board) => {
                currentUserBoards[board.id] = board
            })

            return Object.assign(newState, {currentUserBoards})
        case LOGOUT_CURRENT_USER:
            return _nullUser; 
        default:
            return state;
    }
}

export default SessionReducer;