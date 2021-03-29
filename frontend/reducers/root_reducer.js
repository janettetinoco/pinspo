import {combineReducers} from 'redux';
import entitiesReducer from "./entities_reducer";
import errors from './errors_reducer';
import SessionReducer from './session_reducer';
import ui from './ui_reducer';
import followingReducer from './following_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    following: followingReducer,
    errors,
    session: SessionReducer,
    ui: ui
})

export default rootReducer;