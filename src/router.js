import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import signin from './views/signin.vue'
import signup from './views/signup.vue'
import tags from './views/tags.vue'
import TagsMemes from './views/tags-memes.vue'
import meme from './views/meme'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
        path: '/signin',
        name: 'signin',
        component: signin
    },
    {
        path: 'signup',
        name: 'signup',
        component: signup
    },
    {
        path: '/tags',
        name: 'tags',
        component: tags
    },
    {
        path: '/tags/memes',
        name: 'TagsMemes',
        component: TagsMemes
    },
    {
        path: '/meme',
        name: 'meme',
        component: meme
    }
  ]
})
