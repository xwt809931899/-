## 侧边栏(之前写demo碰到的问题)
  浮动所带来的的问题是高度的缺失！！！它虽然脱离了文档流，但是宽度依然占着位置！！！
## main.js App.vue index.html间的关系
  1. main.js是入口文件，主要作用是初始化vue实例并使用需要的插件
  2. App.vue是我们的主组件，所有的页面都是在App.vue下进行切换的；可以理解为所有的路由都是App.vue的子组件。
  3. index.html是vue-cli构造的项目结构中默认的主渲染页面文件
  4. index.html中的<div id="app"></div>是指定绑定元素根路径的，App.vue中的<div id="app"></div>是用于具体注入绑定元素的内容。也就是index.html的#app是绑定目标。App.vue的#app是提供填充内容。两者在运行时指的是同一个DOM元素。
## 关于点击商品然后让其在订单点餐页显示
  首先在商品的li标签里添加点击事件，将商品的循环子元素传给这个点击事件作为参数，碰到的问题是：因为element表格的合计是自带的方法，如果把金额节点用参数的price来渲染的话，就会出现多次点击同一种商品但合计里的总金额不会发生变化，因为数据源参数的price一直是死的(不变的)。所以在这里，我给参数添加了一个新的字段——totalPrice。totalPrice等于传入参数的单价 * 传入参数的数量。这样就解决了合计里的金额totalMoney问题。(还有一个比较巧妙的地方，就是在操作里的增加按钮也绑定同样的点击事件，但传入的参数用template里的scope的row属性)
##