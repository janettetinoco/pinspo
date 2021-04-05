import * as BoardPinAPIUtil from '../util/board_pin_api_util';

export const RECEIVE_BOARD_PIN_ERRORS = "RECEIVE_BOARD_PIN_ERRORS";
export const RECEIVE_UNPIN_ERRORS = 'RECEIVE_UNPIN_ERRORS';
export const REMOVED_PIN = 'REMOVED_PIN';

// export const receivePinToBoard = () => {
//     retunr {
//         type
//     }
// }
export const receivePinToBoardErrors = (errors) => {
    return {
        type: RECEIVE_BOARD_PIN_ERRORS,
        errors
    }
}

export const receiveUnpinErrors = (errors) => {
    return {
        type: RECEIVE_UNPIN_ERRORS,
        errors
    }
}

export const newPinned = (pinned) => {
    return{
        type: REMOVED_PIN,
        pinned
    }
}

export const createPinToBoard = (boardPin) => dispatch => {
    return BoardPinAPIUtil.createPinToBoard(boardPin)
        .then((res) => console.log("success"),
            (errors) => dispatch(receivePinToBoardErrors(errors.responseJSON)));
}

export const removePinFromBoard = (boardPin) => dispatch => {
    return BoardPinAPIUtil.unpinFromBoard(boardPin)
        .then((pinned) => dispatch(newPinned(pinned)),
        (errors) => dispatch(receiveUnpinErrors(errors.responseJSON)));
}