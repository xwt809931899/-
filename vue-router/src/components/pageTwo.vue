<template>
  <div>
    <div v-if="!$route.path === '/page-two/branch1'">This is pageTwo</div>
    <div v-if="$route.path === '/page-two'">This is pageTwo</div>
    <div>{{ $route.params.username }}</div>
    <div>{{ $route.query.id }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$route.name)
  }
}
</script>

<style>

</style>
