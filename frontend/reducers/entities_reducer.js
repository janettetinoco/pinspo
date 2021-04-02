import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import pinsReducer from './pins_reducer';
import boardsReducer from './boards_reducer';
import pinnedReducer from './pinned_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    pins: pinsReducer,
    pinned: pinnedReducer
})

export default entitiesReducer;