<template>
  <div id="app">
    <div class="header">
      <div class="logo"><span>学校管理系统</span></div>
      <div class="btns">
        <div class="button1">首页</div>
        <div class="button2">反馈</div>
        <div class="button3">帮助</div>
      </div>
      <div class="user">
        <img src="/static/img/user.png" alt="" class="user-img">
        <div class="user-info">
          <div class="name">淘小宝</div>
          <div class="department">研发部</div>
        </div>
      </div>
    </div>
    <div class="tabbar" @click="toChange">
      <div class="tab" :class='index === isActive ? "border" : ""' @click="checkItem(index)" v-for="(item,index) in items" :key="index">{{item.name}}</div>
    </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isSelected:false,
      items:[
        {
          name:'我的工作台'
        },
        {
          name:'学生管理'
        },
        {
          name:'试卷管理'
        },
        {
          name:'添加学生'
        },
        {
          name:'个人设置'
        }
      ],
      isActive:0
    }
  },
  methods:{
    toChange(e) {
      console.log(e.target.innerHTML)
      if(e.target.innerHTML === '我的工作台'){
        this.$router.push({ path:'/dashboard' })
      }
      if(e.target.innerHTML === '学生管理'){
        this.$router.push({ path:'/users' })
      }
      if(e.target.innerHTML === '试卷管理'){
        this.$router.push({ path:'/paper' })
      }
      if(e.target.innerHTML === '添加学生'){
        this.$router.push({ path:'/add' })
      }
      if(e.target.innerHTML === '个人设置'){
        this.$router.push({ path:'/setting' })
      }
    },
    checkItem(index) {
      this.isActive = index
    }
  }
}
</script>

<style lang='stylus'>
body
  margin 0
  padding 0
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  position relative
  .header
    width 100%
    height 60px
    background #66CCFF
    box-sizing border-box
    padding 0 20px
    display flex
    align-items center
    position fixed
    top 0
    z-index 999
    .logo
      color #ffffff
      font-size 20px
      font-weight bold
      display inline-block
      margin-right 1400px
      flex 1
    .btns
      font-size 14px
      display flex
      color #ffffff
      margin-right 40px
      flex 1
      .button1
        margin-right 40px
      .button2
        margin-right 40px
    .user
      .user-img
        width 30px
        height 30px
        margin-right 10px
      .user-info
        display inline-block
        color #ffffff
        .name
          font-size 15px
        .department
          font-size 13px
  .tabbar
    display inline-block
    color #000000
    font-size 15px
    width 240px
    background #ffffff
    box-sizing border-box
    padding 30px 0 0 0
    height 905px
    float left
    position fixed
    top 60px
    .tab
      margin-bottom 20px
      height 35px
      padding-left 20px
      display flex
      align-items center
    .border
      background #f1f1f1
      border-right 2px solid #66CCFF
      color #66CCFF
      

</style>
