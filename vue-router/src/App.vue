<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-link to='/'>跳转到pageOne</router-link>
    <router-link :to='{name:"pageTwo",params:{username:"xwt"},query:{id:1}}'>跳转到pageTwo</router-link>
    <router-link to='/page-two/branch1'>branch1</router-link>
    <router-link to='/page-two/branch2'>branch2</router-link> -->
    <div @click="toJump1">跳转到pageOne</div>
    <div @click="toJump2">跳转到pageTwo</div>
    <div @click="toJump3">branch1</div>
    <div @click="toJump4">branch2</div>
    <div @click="goBack">后退</div>
    <router-view/>
    <router-view name='left' style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name='right' style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    toJump1() {
      this.$router.push('/21/xwt')
    },
    toJump2() {
      this.$router.push({name:'pageTwo',params:{username:'xwt'},query:{id:1}})
    },
    toJump3() {
      this.$router.push('/page-two/branch1')
    },
    toJump4() {
      this.$router.push('/page-two/branch2')
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
