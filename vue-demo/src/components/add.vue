<template>
    <div class="add">
      <div class="main">
        <div class="header1">
          添加学生
        </div>
        <div class="footer">
        <el-form ref="form" :model="form" label-width="40px" class="content" label-position="left">
          <div class="name">
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="淘小宝" style="width:350px;height:10px;"></el-input>
            </el-form-item>
          </div>
          <div class="sex">
            <el-form-item label="性别">
              <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-form-item>
          </div>
          <div class="grade">
            <el-form-item label="年级">
              <el-select v-model="form.grade" placeholder="请选择">
                <el-option label="大一" value="dayi"></el-option>
                <el-option label="大二" value="daer"></el-option>
                <el-option label="大三" value="dasan"></el-option>
                <el-option label="大四" value="dasi"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="telephone">
          <el-form-item label="电话">
            <el-input v-model="form.telephone" style="width:350px;height:10px;"></el-input>
          </el-form-item>
        </div>
        <div class="academy" >
          <el-form-item label="院系">
            <el-select v-model="form.academy" placeholder="请选择" style="width:350px;height:10px;">
              <el-option label="计算机学院" value></el-option>
              <el-option label="设计学院" value></el-option>
            </el-select>
          </el-form-item>
        </div>
        </el-form>
        <div class="button">提交</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'add',
  data() {
    return {
      form:{
        name:'',
        sex:'',
        grade: "",
        telephone: "",
        academy: ""
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.add
  padding 30px 0 0 270px
  background #f1f1f1
  margin-top 60px
  .main
    box-sizing border-box
    width 100%
    padding 20px
    background #ffffff
    border-radius 10px
    .header1
      font-weight bold
      margin-bottom 20px
  .footer
    .button
      width 100px
      height 30px
      display flex
      justify-content center
      align-items center
      background #1E90FF
      color #ffffff
      border-radius 3px
      font-size 14px
</style>
