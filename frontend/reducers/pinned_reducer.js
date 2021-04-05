import { RECEIVE_PROFILE } from '../actions/board_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const pinnedReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = {};
            action.currentUser.pinned.forEach((pin) => {
                if(newState[pin.board_id]){
                    newState[pin.board_id].push(pin.pin_id)
                }else{
                    newState[pin.board_id] = [pin.pin_id]
                }            
            })
            return newState;
        case RECEIVE_PROFILE:
            let newPinnedState = {};
            action.userProfile.pinned.forEach((pin) => {
                if (newPinnedState[pin.board_id]) {
                    newPinnedState[pin.board_id].push(pin.pin_id)
                } else {
                    newPinnedState[pin.board_id] = [pin.pin_id]
                }
            })
            return newPinnedState
        default:
            return state;
    }
}

export default pinnedReducer