// import { RECEIVE_PROFILE } from '../actions/board_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const pinnedReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            let newState = {};
            action.currentUser.pinned.forEach((pin) => {
                if(newState[pin.board_id]){
                    newState[pin.board_id].push(pin.pin_id)
                }else{
                    newState[pin.board_id] = [pin.pin_id]
                }            
            })
            return newState;
        default:
            return state;
    }
}

export default pinnedReducer