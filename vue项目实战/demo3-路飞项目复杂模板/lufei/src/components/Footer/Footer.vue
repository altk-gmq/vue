<template>
   <div class="footer">
     <div class="footer_wrap">
       <ul class="link_nav">
         <li>关于我们</li>
         <li>联系我们</li>
         <li>商务合作</li>
         <li>帮助中心</li>
         <li>意见反馈</li>
         <li>新手指南</li>
       </ul>
       <p class="base_style" _v-09aa1442="">Copyright © luffycity.com版权所有 | 京ICP备17072161号-1</p>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Footer',
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
    margin-top:128px;
    background: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
