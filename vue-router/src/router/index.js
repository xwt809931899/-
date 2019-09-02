import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:age/:name',
      name: 'pageOne',
      components:{
        default:() => import('@/components/pageOne'),
        left:() => import('@/components/left'),
        right:() => import('@/components/right')
      },
      beforeEnter(to,from,next){
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    },
    {
      path:'/page-two',
      name:'pageTwo',
      components:{
        default:() => import('@/components/pageTwo'),
        left:() => import('@/components/right'),
        right:() => import('@/components/left')
      },
      children:[
        {
          path:'branch1',
          name:'branch1',
          component:() => import('@/components/branch1')
        },
        {
          path:'branch2',
          name:'branch2',
          component:() => import('@/components/branch2')
        }
      ]
    }
  ]
})
