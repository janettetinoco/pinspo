import {RECEIVE_BOARD, RECEIVE_PROFILE} from '../actions/board_actions'

const boardsReducer = (state = {}, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            let newState = {};
            action.userProfile.boards.forEach((board) => {
                newState[board.id] = board;
            })
            return newState;

        case RECEIVE_BOARD:
            let fixState = Object.assign({},state);
            fixState[action.board.id] = action.board
            return fixState;
            
        default:
            return state;
    }
}

export default boardsReducer