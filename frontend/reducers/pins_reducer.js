import {RECEIVE_ALL_PINS, RECEIVE_PIN} from '../actions/pin_actions';

const pinReducer = (state= {}, action) => {
    Object.freeze(state);
    switch (key) {
        case RECEIVE_ALL_PINS:
            return action.pins
        default:
            return state;
    }
}

export default pinReducer;