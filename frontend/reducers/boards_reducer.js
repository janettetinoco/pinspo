import {RECEIVE_PROFILE} from '../actions/board_actions'

const boardsReducer = (state = {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            let newState = {};
            action.userProfile.boards.forEach((board) => {
                newState[board.id] = board;
            })
            return newState;
        default:
            return state;
    }
}

export default boardsReducer