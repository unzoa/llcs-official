import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/Login'
import welcome from '@/view/welcome'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/welcome',
      children:[
      	{
          path: '/welcome',
          name: 'welcome',
          component: welcome,
          meta: {
            keepAlive: true,
          }
        },
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path:'*',
      redirect:'/welcome'
    }
  ]
})
