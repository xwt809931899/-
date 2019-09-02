import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'dashboard'
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component:() => import('@/components/dashboard')
    },
    {
      path:'/users',
      name:'users',
      component:() => import('@/components/users')
    },
    {
      path:'/paper',
      name:'paper',
      component:() => import('@/components/paper')
    },
    {
      path:'/add',
      name:'add',
      component:() => import('@/components/add')
    },
    {
      path:'/setting',
      name:'setting',
      component:() => import('@/components/setting')
    },
  ]
})
