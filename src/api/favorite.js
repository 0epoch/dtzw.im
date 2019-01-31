import http from '../utils/http'

export default {
    show: (user_id) => {
        return http.get('user/'+user_id+'/favorites')
    },
    store: (data) => {
        return http.post("favorite", data)
    },
    update: (favorite_id, meme_id) => {
        let data = {favorite_id: favorite_id, meme_id: meme_id}
        return http.put("favorite", data)
    }

}