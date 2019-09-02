<template>
  <div class="left-nav">
    <ul @click="toJump">
      <li>
        <i class="iconfont icon-shouyinqu"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="iconfont icon-shangpin-"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="iconfont icon-huiyuan"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="iconfont icon-tongji"></i>
        <div>统计</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {};
  },
  methods:{
    toJump(e) {
      console.log(e)
      if(e.target.innerHTML === '收银')
      this.$router.push('/pos')
      if(e.target.innerHTML === '店铺')
      this.$router.push('/shop')
      if(e.target.innerHTML === '商品')
      this.$router.push('/goods')
    }
  }
};
</script>

<style scoped>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.iconfont {
  font-size: 24px;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav ul li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
</style>
