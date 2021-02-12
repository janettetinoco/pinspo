import * as BoardAPIUtil from '../util/board_api_util'
import { fetchUser } from '../util/user_api_util'


export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS'

export const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    }
}

export const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

export const receiveBoardErrors = errors => {
    return {
        type: RECEIVE_BOARD_ERRORS,
        errors
    }
}

export const receiveUserBoards = (userProfile) => {
    return {
        type: RECEIVE_PROFILE,
        userProfile
    }
}




export const getBoard = (boardId) => dispatch => {
        return BoardAPIUtil.showBoard(boardId)
            .then((board) => dispatch(receiveBoard(board)),
                (errors) =>dispatch(receiveBoardErrors(errors.responseJSON)));
}


export const createBoard = (board) => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then((board) => dispatch(receiveBoard(board)),
            (errors) => dispatch(receiveBoardErrors(errors.responseJSON)));
}

export const updateBoard = (board) => dispatch => {
    return BoardAPIUtil.showBoard(board.id)
        .then((board) => dispatch(receiveBoard(board)),
            (errors) => dispatch(receiveBoardErrors(errors.responseJSON)));
}

export const deleteBoard = (boardId) => dispatch => {
    return BoardAPIUtil.destroyBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)),
            (errors) => dispatch(receiveBoardErrors(errors.responseJSON)));
}

export const getUserBoards = (userId) => dispatch => {
    return fetchUser(userId)
        .then((user) => dispatch(receiveUserBoards(user)),
            (errors) => dispatch(receiveBoardErrors(errors.responseJSON)));
}

