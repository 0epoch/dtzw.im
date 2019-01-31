import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
    baseURL: 'api/',
    timeout: 10000 // request timeout
  })

  //request 拦截器
http.interceptors.request.use(
    config => {
        let token = localStorage.getItem('access_token');
        if(token) {
            config.headers.Authorization = 'Bearer '+token; 
        }
        return config
    },
    error => {
        return Promise.error(error)
    }
)

//response 拦截器
http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if(!error['response']) {
            return Promise.reject(error)
        }

        switch(error.response.status) {
            case 422: {
                let data = error.response.data.errors
                let content = ''

                Object.keys(data).map(function (key) {
                  let value = data[key]
        
                  content = value[0]
                })
        
                Message.error(content)
                break
            }
            case 403: {
                Message.error(error.response.data.message || '您没有此操作权限！')
                break
              }
              case 401: {
                  alert('登录失败，用户名或密码错误')
                // if (window.location.pathname !== '/auth/login') {
                //   window.location.href = '/auth/login'
                // }
                break
              }
              case 500:
              case 501:
              case 503:
                Message.error('服务器斗图去了，~！')
                break
              }                        
        }
)

export default http;  