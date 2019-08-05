<template>
  <div>
    我是首页
    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Home',
  data () {
    return {
     
    }
  },
  components:{
    Son
  }
}
</script>

<style scoped>
  h2{
    color:green;   
  }
</style>
