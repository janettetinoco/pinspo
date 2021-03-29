// import { RECEIVE_USER_FOLLOWS } from '../actions/user_follow_actions';

// const followersReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_USER_FOLLOWS:
//             let newState = {};
//             action.following.forEach((user_follow) => {
//                 newState[user_follow.following_id] = user_follow.following_id
//             })
//             return newState;
//         default:
//             return state;
//     }
// }

// export default followersReducer;