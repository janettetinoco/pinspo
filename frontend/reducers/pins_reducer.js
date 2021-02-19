import {RECEIVE_ALL_PINS, RECEIVE_PIN} from '../actions/pin_actions';

const pinReducer = (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PINS:
            let newState = {};
            action.pins.forEach((pin) => {
                newState[pin.id] = pin;
            })
            return newState;
        default:
            return state;
    }
}

export default pinReducer;