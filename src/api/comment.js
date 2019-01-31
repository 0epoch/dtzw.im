import http from '../utils/http'

export default {
    show: (meme_id) => {
        return http.get('comments?meme_id='+meme_id)
    },

    store: (params) => {
        http.post('comments', params)
    }
}
