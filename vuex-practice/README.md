## vuex 
  概念：vuex是一个专门为vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并已相应的规则保证状态以一种可预测的方式发生变化。

  vuex包括state,getters,mutations,actions,module

  methods:mapState({}) === methods:{ ...mapState({}) }  因为mapState是一个辅助函数，返回的是一个对象，所以要将这个对象扩展开来放到外部对象

## state 访问状态对象(读取state)
  状态对象赋值给内部对象(就是把store.js里的state里的值赋值给模板里的data)
  1. 通过computed(计算属性)直接赋值
  2. 通过mapState的对象来赋值
  3. 通过mapState的数组来赋值
## mutation 修改状态(修改state)
  vuex提供了commit方法来修改状态($store.commit) 这种写法因为有$store.commit()不是很雅观 直接使用mapMutations([])
## getters 计算过滤操作
  可以把他看成在获取数据前进行的一种再编辑，相当于对数据的一个过滤和加工。类比于vue的computed
## actions 将mutation里处理程序的方法转变为异步的处理方法

