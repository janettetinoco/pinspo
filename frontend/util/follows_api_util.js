export const createUserFollow = (user_follow) => {
    return $.ajax({
        method: 'POST',
        url:'/api/user_follows',
        data: { user_follow }
    })
}

export const destroyUserFollow = (user_following, user_follower) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/user_follows/${user_following}`,
        data: { user_follow }
    })
}