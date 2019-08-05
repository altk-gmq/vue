<template>
  <div id="app">
    <h2>alex</h2>
    <router-link :to= "{name:'Home'}">首页</router-link>
    <router-link :to= "{name:'Course'}">课程</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>
scoped 只对当前组件起作用
<style scoped>
  h2{
    color:red;
  }
</style>
