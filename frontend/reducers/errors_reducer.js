import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import boardErrorsReducer from './board_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';

export default combineReducers({
    session,
    board:boardErrorsReducer,
    pin:pinErrorsReducer
})
