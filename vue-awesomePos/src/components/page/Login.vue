<template>
  <div class="login">
    <h1>登录界面</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name" style="width:400px" class="one">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" style="width:400px" class="two">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-button type="primary" round style="text-align:center;margin-left:85px">登录 </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur"
          }
        ],
        pass: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-left: 100px;
  margin-top: 250px;
}
.el-form{
  text-align: center;
}
</style>
