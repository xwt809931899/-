## vue-router
  Vue-router是Vue.js的路由管理器。它和Vue.js的核心深度集成，让构建单页应用(SPA)变得易如反掌。由前端来控制页面的跳转(本质上还是单页面)，根据不同的url来展示不同的内容和页面。
  优点：体验好，不需要每次从服务器获取全部，快速展现给用户；
  缺点：不利于SEO;使用游览器的前进，后退键的时候会重新发送请求，没有合理的利用缓存；单页面无法记住之前滚动的位置，无法在前进和后退时候记住滚动的位置。

## 在router文件夹下配置子路由需注意
  children里的子路由对象信息的path不需要/，比如说父路由的path是'/pageOne',那么子路由path应该是'branch1',而不是'/branch1'

## $route表示(当前路由信息对象)
  表示当前激活的路由的状态信息，包含了当前URL解析得到的信息，还有URL匹配到的route records(路由记录)
  路由信息对象：即$route会被注入每个组件中，可以利用它进行一些信息的获取
  1. $route.path: 字符串，对应当前路由的路径，总解析为绝对路径，如'/foo/bar'
  2. $route.params: 一个键值(key/value)对象，包含了动态片段和全匹配片段，如果没有路由参数，那么就是一个空对象。
  3. $route.query: 一个键值(key/value)对象，表示url的查询参数。；例如，对于路径 /foo?user=1,择有$route.query.user == 1,如果没有查询参数，则是个空对象。
  4. $route.hash: 当前路由的hash值(不带#)，如果没有hash，则为空字符串。
  5. $route.fullPath: 完成解析后的URL,包含查询参数和hash的完整路径
  6. $route.matched: 数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象
  7. $route.name: 当前路径的名字
  8. $route.meta: 路由元信息、

## $router(全局的路由实例)
  1. 是router构造方法的实例对象。在Vue实例内部，可通过$router访问路由实例
  2. $router.push方法跳转会向history栈添加一个新的记录，当我们点击浏览器的返回按钮时可以看到之前的页面
  3. 路有实例go方法: this.$router.go(-1)  //后退  页面路由跳转 前进或者后退
  4. $router.replace是替换当前的页面，不会向history栈添加一个新的记录(一般使用replace来做404页面)

## vue-router如何传递参数(使用router-link传参一定不要忘了对to进行动态绑定(:to)！！！！！！！！！！！)
  1. router文件夹里index.js配置的路由对象信息状态中的name可以用来传值并显示在模板里(用$route.name来接收)。这种方法并不推荐。
  2. 通过router-link的to属性来传参。用to进行传参时需要注意，要对to进行一个绑定(我理解为 像父子组件通信，进行一个动态绑定)。
  基本语法 => <router-link :to='{ name:xxx, params:{key:value} }'>valueString</router-link>
  name:就是我们在路由配置文件中起的name值
  params:就是我们要传的参数，它也是对象形式，在对象里可以传递多个值。
  3. name的作用： 一种作用是传参，一种作用是在传参时起到名称作用。
  4. params(路由参数)的传递是不会显示在url里的，而query(查询参数)的传递是会显示在url里的，这里和post与get有点相似。

## $router.push()的三种写法
  1. 字符串 $router.push('/') 引号里面直接加路径
  2. 对象 $router.push({path:''}) 括号里面直接放一个对象，对象里面是路径
  3. 命名的路由 $router.push({name:'',params:'',query:''})

## 对于router-view的理解
  正常写法中，一层路径(/xxx)对应一个router-view
  比如：/a/b/c(假设a,b,c都为正常的路径，不会作为参数)
  · 那/a对应的就是App.vue中的router-view
  · 那/a/b对应的就是a.vue中的router-view
  · 那/a/b/c对应的就是b.vue中的router-view

## 单页面多路由区域操作
  1. <router-view></router-view>可以用名字来区分，在router文件夹里的index.js配置里可以在routes的数组里的路由信息状态里的components添加不同的组件来渲染到不同名字的router-view里。(嵌套路由和嵌套组件之间的匹配是个很常见的需求，使用vue-router可以轻松实现。router-view是一个顶级的外链，它会渲染一个和顶级路由匹配的组件。同理，组件内部也可以包含自己的外链，嵌套的router-view)

## vue-router 利用url传递参数
  除了可以用router-link的to和$router.push()来传递参数，老情怀的程序员还是偏向用url来传递参数。
  1. 冒号的形式传递参数，就是对参数的绑定。(参数会成为url的一部分，被包含在hash里)

## vue-router的重定向-redirect
  用法很简答，就是替换component，后面的路径就是要重定向的路径。重定向依然可以传递参数，方法和用url传递参数是一样的。

## vue-router的alias
  1. 首先在路由配置文件里，起个别名，如 alias:'/name'
  2. 配置<router-link>,起别名之后，可以直接使用<router-link>标签里的to属性，进行重定向 <router-link  to="/jspang">jspang</router-link>
  3. redirect和alias的区别
    redirect:直接改变了url的值，把url变成了真实的path路径
    alias:url的路径没有改变，只是改变了router-view中的内容
  4. 坑！！！(别名请不要用在path:'/'中，不起作用的)

## 路由的过渡动画(transition)
  通过transition标签来实现,在router-view标签的外部添加transition标签，它有name属性
  在组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，假设name为fade,会有以下四个CSS类名：
  1. fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
  2. fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡完成后移除。
  3. fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除。
  4. fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
  fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}

## 路由中的钩子
  beforeEnter(to,from,next){}
  1. to: 路由即将要跳转的路径信息，信息包含在对象里
  2. from: 路由跳转前的路径信息，信息也包含在一个对象里
  3. next: 路由的控制参数，常用的有next(true)和next(false)