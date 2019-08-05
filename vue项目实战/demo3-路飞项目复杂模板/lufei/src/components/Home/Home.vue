<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always" height="400px">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img :src="item.imgSrc" :title="item.title" class="ban-img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        images:[
          {id:1,imgSrc:'../../../static/img/1.png',title:'我是图1'},
          {id:2,imgSrc:'../../../static/img/2.png',title:'我是图2'},
          {id:3,imgSrc:'../../../static/img/3.png',title:'我是图3'},
          {id:4,imgSrc:'../../../static/img/4.png',title:'我是图4'},
        ]
      }
    },
  }
</script>

<style lang="css" scoped>
  .ban-img{
    width: 100%;
    height: auto;
  }
</style>
