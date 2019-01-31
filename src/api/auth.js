import http from '../utils/http'

export default {
    signin: (params) => {
        return http.post('login', params)
    },
    signup: (params) => {
        return http.post('signup', params)
    },
    signout: () => {

    }
}