import {RECEIVE_PROFILE} from '../actions/board_actions'

const boardsReducer = (state = null, action)=>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            // debugger
            let newState = {};
            action.userProfile.boards.forEach((board) => {
                // debugger
                newState = Object.assign(newState, {[board.id]: board} )
            })
            return newState;
        default:
            return state;
    }
}

export default boardsReducer