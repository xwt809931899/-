<template>
<div class="dashboard">
  <div class="top">
    <div class="one-item" v-for="(item,index) in items" :key="index" :class="array[item.id]">
      <div class="image">
        <img :src="item.img" alt="">
      </div>
      <div class="numAndTitle">
        <div class="num">{{item.num}}</div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <img src="/static/img/baobiao.jpg" alt="">
    <v-Text></v-Text>
  </div>
</div>
</template>

<script>
import Text from '@/components/Text.vue'
export default {
  name: 'dashboard',
  components:{
    'v-Text':Text
  },
  data () {
    return {
      items:[
        {
          img:'/static/img/subjectRed.png',
          num:30,
          title:'待审核课件',
          id:0
        },
        {
          img:'/static/img/homeworkGr.png',
          num:120,
          title:'待批改作业',
          id:1
        },
        {
          img:'/static/img/paperY.png',
          num:160,
          title:'待批阅试卷',
          id:2
        },
        {
          img:'/static/img/shixun.png',
          num:69,
          title:'待评分实训',
          id:3
        },
        {
          img:'/static/img/subjectBlue.png',
          num:85,
          title:'已审核课件',
          id:0
        },
        {
          img:'/static/img/homeworkPur.png',
          num:93,
          title:'已批改作业',
          id:1
        },
        {
          img:'/static/img/paper.png',
          num:185,
          title:'已批阅试卷',
          id:2
        },
        {
          img:'/static/img/shixun1.png',
          num:235,
          title:'已评分实训',
          id:3
        }
      ],
      array:[
        'bg1',
        'bg2',
        'bg3',
        'bg4'
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.dashboard
  padding 30px 0 0 270px
  background #f1f1f1
  margin-top 60px
  .top
    .one-item
      width 380px
      display inline-block
      margin-right 25px
      margin-bottom 25px
      border-radius 10px
      height 100px
      position relative
    .bg1
        background #FF69B4
    .bg2
        background #FFD700
    .bg3
        background #3CB371
    .bg4
        background #1E90FF
      .image
        width 50px
        height 50px
        margin-left 135px
        margin-top 24px
        border-radius 50%
        background #ffffff
        display flex
        align-items center
        justify-content center
        img 
          width 30px
          height 30px
      .numAndTitle
        display inline-block
        font-size 15px
        color #ffffff
        position absolute
        top 30%
        left 51%
  .bottom
    padding-bottom 40px
    img
      border-radius 10px
      margin-bottom 20px


</style>
