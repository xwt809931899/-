<template>
  <div id="app">
    <!-- 左侧导航 -->
    <!-- <router-view/> -->
    <v-leftNav v-if="!$route.path === '/login'"></v-leftNav>
    <!-- 操作区域 -->
    <div class="main" :class="$route.path === '/login' ? 'all' : ''">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    'v-leftNav':leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height:100%;
}

.main {
  width: 95%;
  float: left;
  background: #EFF2F7;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.all{
  width: 100%;
  background:url('https://www.nintendo.co.jp/wallpaper/19_HBD_Kirby/img/19_HBD_Kirby_1920_1080.jpg');
}
</style>
