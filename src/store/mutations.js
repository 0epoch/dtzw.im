export default {
    //用户
    SIGN_IN(state, data) {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('user', JSON.stringify(data.user))
        state.user = data.user
    },
    //评论
    comments(state, comments) {
        state.comments = comments
    },
    STORE_COMMENT(state, comment)  {
        state.comments.push(comment)
    },
    
    //收藏夹
    favorites(state, favorites) {
        state.favorites = favorites
    },
    SAVE_FAVORITE(state, favorite) {
        state.favorites.push(favorite)
    },
    UPDATE_FAVORITE(state, data) {
        
    }
}