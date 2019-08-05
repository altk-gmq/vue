<template>
   <div class="purchase_wrap">
     <ul>
       <li>课程</li>
       <li>有效期</li>
       <li>价格</li>
     </ul>
   </div>
</template>

<script>
export default {
  name: 'Buy',
  data(){
    return{
    }
  }
}
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 128px;
    background: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .link_nav{
    display: flex;
    align-items: center;
    padding-bottom:15px;
  }
  .link_nav li{
    margin:0 15px;
    font-size: 14px;
    color: #fff;
  }
  .base_style{
    color:#fff;
    font-size:12px;
  }
</style>
