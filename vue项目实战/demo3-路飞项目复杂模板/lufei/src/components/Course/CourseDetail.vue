<template>
  <div class="header">
    <div class="tcPrice_box">
      <ul class="tcPrice">
        <li v-for="(val,index) in price" :key="index" @click="priceHandle(index)" :class="{active: (index+1) == currIndex}">
          <span>{{val}}</span>
        </li>
      </ul>
      <div class="tcBuy">
        <button type="button" @click="buy">购买</button>
        <button type="button" @click="addShop">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
  data () {
    return {
      price:['一个月套餐：99元','三个月套餐：199元','半年套餐：999元','一年套餐：1999元'],
      currIndex:null
    }
  },
  methods:{
    priceHandle:function(i){
      if(this.currIndex === i+1){
        this.currIndex = null;
      }else{
        this.currIndex = i+1
      }
    },
    buy:function(){
      if(this.currIndex){
        this.$router.push({
          name:'Buy'
        })
      }else{
        this.$message({
          message: '您还没有选择要购买的套餐',
          type: 'warning',
          duration:1000
        });
      }
      
    },
    addShop:function(){
      if(this.currIndex){
        this.$message({
          message: '您已加入了购物车',
          type: 'success',
          duration:1000
        });
      }else{
        this.$message({
          message: '您还没有选择要加入的套餐',
          type: 'warning',
          duration:1000
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tcPrice_box{
    margin: 40px auto 0;
  }
  .tcPrice{
    text-align: center;
  }
  .tcPrice li{
    width: 150px;
    height: 15px;
    padding: 20px;
    border: 1px solid #cccccc;
    font-size: 14px;
    border-radius: 10px;
    color: #333;
    margin-right: 20px;
    margin-bottom: 10px;
    display: inline-block;
    cursor: default;
  }
  .tcPrice li.active{
    background: #47b359;
    color: #fff;
  }
  .tcBuy{
    text-align: center;
    margin: 25px auto;
  }
  .tcBuy button{
    border: 1px solid #47b359;
    background: #47b359;
    width: 120px;
    height: 40px;
    outline: none;
    font-size: 14px;
    color: #fff;
    padding: 0 15px;
    border-radius: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
</style>


