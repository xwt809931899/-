import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/page/Login')
    },
    {
      path: '/pos',
      name: 'Pos',
      component: () => import('@/components/page/Pos')
    },
    {
      path:'/',
      redirect: () => 'pos'
    },
    {
      path:'/shop',
      name:'Shop',
      component:() => import('@/components/page/Shop')
    },
    {
      path:'/goods',
      name:'Goods',
      component:() => import('@/components/page/Goods')
    }
  ]
})
