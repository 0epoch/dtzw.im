import auth from '@/api/auth'
import comment from '@/api/comment'
import favorite from '@/api/favorite'

export default {
    /**
     * 用户
     */
    //登录
    async signin(context, params) {
        let data = await auth.signin(params)
        context.commit('SIGN_IN', data)
    },

    async signup(context, params) {
        const {data} = await auth.signup(params)
        context.commit('SIGN_IN', data)
    },
    
    /**
     * 评论
     */    
    //评论列表
    async fetchComments(context, meme_id) {
        const {data} = await comment.show(meme_id)
        context.commit('comments', data)
    },

    //发表评论
    async storeComment(context, params) {
        const {data} = await comment.store(params)
        context.commit('STORE_COMMENT', data)
    },
    /**
     * 收藏夹
     */    
    //收藏夹列表
    async fetchFavorites(context, user_id) {
        const {data} = await favorite.show(user_id)
        context.commit('favorites', data)
    },

    //添加收藏夹
    async storeFavorite(context, params) {
        const {data} = await favorite.store(params)
        context.commit('SAVE_FAVORITE', data)
    },

    //更新收藏夹
    async putFavorite(context, favorite_id, meme_id) {
        const { data } = await favorite.update(favorite_id, meme_id)
    },


}