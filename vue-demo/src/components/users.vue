<template>
  <div class="users">
    <div class="search">
      <div class="text">搜索</div>
      <el-form ref="form" :model="form" label-width="40px" class="content" label-position="left">
        <div class="school">
          <el-form-item label="学校">
            <el-select v-model="form.school" placeholder="请选择">
              <el-option label="浙江大学" value="zhejiang"></el-option>
              <el-option label="复旦大学" value="sahnghai"></el-option>
              <el-option label="中山大学" value="guangzhou"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="academy">
          <el-form-item label="院系">
            <el-select v-model="form.academy" placeholder="请选择">
              <el-option label="计算机学院" value></el-option>
              <el-option label="设计学院" value></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="class">
          <el-form-item label="班级">
            <el-input v-model="form.class" style="width:217px;height:40px;"></el-input>
          </el-form-item>
        </div>
        <div class="name">
          <el-form-item label="姓名">
            <el-input v-model="form.name" style="width:217px;height:40px;"></el-input>
          </el-form-item>
        </div>
        <div class="telephone">
          <el-form-item label="电话">
            <el-input v-model="form.telephone" style="width:217px;height:40px;"></el-input>
          </el-form-item>
        </div>
        <div class="role">
          <el-form-item label="角色">
            <el-input v-model="form.role" style="width:217px;height:40px;"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="list">
      <div class="text">学生列表</div>
      <div class="btn">
        <img src="/static/img/add.png" alt />
        添加学生
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop='num' label="序号" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="school" label="学校"></el-table-column>
        <el-table-column prop="academy" label="院校"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="telephone" label="联系电话"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="启动/停用">
          <el-switch v-model="value" active-color="#13ce66" inactive-color="#C0CCDA"></el-switch>
        </el-table-column>
        <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-table-column>
      </el-table>
    </div>
    <v-Text></v-Text>
  </div>
</template>

<script>
import Text from '@/components/Text.vue'
export default {
  name: "users",
  data() {
    return {
      form: {
        school: "",
        academy: "",
        class: "",
        name: "",
        telephone: "",
        role: ""
      },
       value:false,
      tableData:[
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        {
          num:1,
          name:'王尼玛',
          school:'浙江大学',
          academy:'计算机',
          class:1,
          telephone:'177****1686',
          role:'学生',
          value:true
        },
        
      ]
    };
  },
  components:{
    'v-Text':Text
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  }
};
</script>

<style lang="stylus" scoped>
.users
  padding 30px 30px 40px 270px
  background #f1f1f1
  margin-top 60px
  .search
    box-sizing border-box
    width 100%
    padding 20px
    background #ffffff
    border-radius 10px
    .text
      font-weight bold
      margin-bottom 20px
    .content
      font-size 14px
      .school
        display inline-block
        margin-right 250px
      .academy
        display inline-block
        margin-right 250px
      .class
        display inline-block
        margin-right 250px
      .name
        display inline-block
        margin-right 250px
      .telephone
        display inline-block
        margin-right 250px
      .role
        display inline-block
        margin-right 250px
  .list
    background #ffffff
    box-sizing border-box
    width 100%
    padding 20px
    border-radius 10px
    margin-top 30px
    margin-bottom 20px
    .text
      font-weight bold
      margin-bottom 20px
    .btn
      width 100px
      height 30px
      border-radius 5px
      display flex
      justify-content center
      align-items center
      font-size 12px
      background #1E90FF
      color #ffffff
      img 
        width 13px
        height 13px
        margin-right 2px
</style>
