import * as BoardPinAPIUtil from '../util/board_pin_api_util';

export const RECEIVE_BOARD_PIN_ERRORS = "RECEIVE_BOARD_PIN_ERRORS";

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

export const createPinToBoard = (boardPin) => dispatch => {
    return BoardPinAPIUtil.createPinToBoard(boardPin)
        .then((res) => console.log("success"),
            (errors) => dispatch(receivePinToBoardErrors(errors.responseJSON)));
}