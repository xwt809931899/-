<template>
    <div class="paper">
      <div class="select">
        <div class="text">精确筛选</div>
        <div class="main" style="margin-bottom:20px">
          专业:
            <el-radio-group v-model="radio" size="small" style="margin-left:30px">
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="软件"></el-radio-button>
              <el-radio-button label="土木"></el-radio-button>
              <el-radio-button label="外语"></el-radio-button>
              <el-radio-button label="机械"></el-radio-button>
              <el-radio-button label="经济学"></el-radio-button>
              <el-radio-button label="管理学"></el-radio-button>
              <el-radio-button label="市场营销"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="subject">
          科目:
            <el-radio-group v-model="radio1" size="small" style="margin-left:30px">
              <el-radio-button label="全部"></el-radio-button>
              <el-radio-button label="英语"></el-radio-button>
              <el-radio-button label="数学"></el-radio-button>
              <el-radio-button label="材料力学"></el-radio-button>
              <el-radio-button label="机械原理"></el-radio-button>
            </el-radio-group>
        </div>
      </div>
      <div class='paper-list'>
        <div class="text">试卷列表</div>
        <div class="lists">
          <div class="list" v-for="(list,index) in lists" :key="index">
            <div class="title">{{list.title}}</div>
            <div class="paper-info">
              <div class="way">阅卷方式：{{list.way}}</div>
              <div class="date">时间：{{list.date}}</div>
              <div class="time">引用次数：{{list.time}}</div>
              <div class="score">分值：{{list.score}}</div>
              <div class="direction">技术方向：{{list.direction}}</div>
              <div class="question">题目：{{list.question}}</div>
            </div>
            <div class="btns">
              <div class="btn">
                <img src="/static/img/edit.png" alt="">
                编辑
              </div>
              <div class="btn">
                <img src="/static/img/delete.png" alt="">
                删除
              </div>
              <div class="btn">
                <img src="/static/img/file.png" alt="">
                归档
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-Text></v-Text>
    </div>
</template>

<script>
import Text from '@/components/Text.vue'
export default {
  name:'paper',
  components:{
    'v-Text':Text
  },
  data() {
    return {
      radio:'全部',
      radio1:'全部',
      lists:[
        {
          title:'1.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'2.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'3.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'4.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'5.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'6.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'7.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'8.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'9.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        },
        {
          title:'10.江西省乐平市第三中学2019-2020年数学测试',
          way:'人工',
          date:'2018-06-10',
          time:1,
          score:90,
          direction:'自然语言',
          question:20
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.paper
  padding 30px 30px 40px 270px
  background #f1f1f1
  margin-top 60px
  .select
    box-sizing border-box
    width 100%
    padding 20px
    background #ffffff
    border-radius 10px
    .text
      font-weight bold
      margin-bottom 20px
  .paper-list
    background #ffffff
    box-sizing border-box
    width 100%
    padding 20px
    border-radius 10px
    margin-top 30px
    margin-bottom 20px
    .text
      font-weight bold
    .lists
      margin-top 20px
      .list
        border-bottom 1px solid #f5f5f5
        height 60px
        font-size 0
        margin-bottom 20px
        .title 
          font-size 13px
          margin-bottom 10px
        .paper-info
          display inline-block
          color #ccc
          font-size 10px
          .way
            display inline-block
            margin-right 10px
          .date
            display inline-block
            margin-right 10px
          .time
            display inline-block
            margin-right 10px
          .score
            display inline-block
            margin-right 10px
          .direction
            display inline-block
            margin-right 10px
          .question
            display inline-block
        .btns
          display inline-block
          margin-left 1420px
          .btn
            font-size 12px
            color #ccc
            display inline-block
            margin-right 6px
            img
              width 10px
              height 10px
              margin-right 3px




</style>
