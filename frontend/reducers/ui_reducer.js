import { combineReducers } from 'redux';
import modal from './modal_reducer';
import uiBoardReducer from './ui_board_reducer';

export default combineReducers({
    modal,
    board:uiBoardReducer
});
