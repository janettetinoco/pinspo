import * as PinUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';


export const receiveAllPins = (pins) => {
    return({
        type: RECEIVE_ALL_PINS,
        pins
    })
}

export const receivePin = (pin) => {
    return ({
        type: RECEIVE_PIN,
        pin
    })
}

export const receivePinErrors = (errors) => {
    return ({
        type: RECEIVE_PIN_ERRORS,
        errors
    })
}

export const requestAllPins = () => dispatch => {
    return PinUtil.fetchAllPins()
        .then((pins) => dispatch(receiveAllPins(pins)))
}

export const requestPin = (pinId) => dispatch => {
    return PinUtil.fetchPin(pinId)
        .then((pin) => dispatch(receiveAllPins(pin)))
}

export const createPin = (pin) => dispatch => {
    return PinUtil.createPin(pin)
        .then((pin) => dispatch(receivePin(pin)), 
        (errors) => dispatch(receivePinErrors(errors.responseJSON)));
}