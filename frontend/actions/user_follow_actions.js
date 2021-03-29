import * as FollowsAPIUtil from '../util/follows_api_util';

export const RECEIVE_USER_FOLLOWS_ERRORS = 'RECEIVE_USER_FOLLOWS_ERRORS';
export const RECEIVE_USER_FOLLOWS = 'RECEIVE_USER_FOLLOWS'

export const receiveUserFollowsErrros = (errors) => {
    return {
        type: RECEIVE_USER_FOLLOWS_ERRORS,
        errors
    }
}

export const receiveUserFollows = (following) => {
    return {
        type: RECEIVE_USER_FOLLOWS,
        following
    }
}

export const followUser = (userFollow) => {
    return FollowsAPIUtil.createUserFollow(userFollow)
        .then((res) => console.log('success'),
            (errors) => dispatchEvent(receiveUserFollowsErrros(errors.responseJSON)));
}

export const unfollowUser= (userFollow) => {
    return FollowsAPIUtil.destroyUserFollow(userFollow)
        .then((res) => console.log('success'),
            (errors) => dispatchEvent(receiveUserFollowsErrros(errors.responseJSON)));
}