<template>
    <el-header> 
        <div class="header-wrap">
          <div class="header-left">
            <a href="#" class="head-logo">
              <img src="../static/img/head-logo.svg" alt="">
            </a>
            <ul class="nav-list clearfix">
              <li v-for="(item,index) in navList" :key="item.id" @click="changeNav(index)">
                <router-link :to = "{name:item.name}" :class="{active:index === currIndex}">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
          <div class="header-right" v-if="isLogo">
            <div class="shop-car">
              <a href="#" class="shop-car-icon"><i class="el-icon-shopping-cart-1"></i>购物车</a>
            </div>
            <div class="register"> 
              <span _v-0ec42e90="" @click="Login">登录</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span _v-0ec42e90="">注册</span> 
            </div>
          </div>
          <div class="header-right" v-esle>
            <ul>
                <li>12</li>
                <li>12</li>
                <li>12</li>
            </ul>
          </div>
        </div> 
    </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navList: [
        { id: 1, title: "首页123", name: "Home" },
        { id: 2, title: "免费课程", name: "Course" },
        { id: 3, title: "轻课", name: "SmallCourse" },
        { id: 4, title: "学位课程", name: "XwCourse" },
        { id: 5, title: "智能题库", name: "TiKu" },
        { id: 6, title: "公开课", name: "GkCourse" },
        { id: 7, title: "内部教材", name: "NbJc" }
      ],
      currIndex: 0,
      isLogo: false
    };
  },
  methods: {
    changeNav: function(i) {
      this.currIndex = 2;
    },
    Login: function() {
      this.$router.push({
        name: "Login"
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  width: 100%;
  height: 60px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ddd;
  z-index: 2;
  padding: 0;
}
.el-header .header-wrap {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}
.header-wrap .header-left {
  display: flex;
}
.header-wrap .header-right {
  display: flex;
  align-items: center;
}
.header-right .shop-car {
  display: flex;
  width: 80px;
  height: 28px;
  background: #f7f7f7;
  border-radius: 17px;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  margin-right: 20px;
}
.header-right .shop-car:hover {
  background: #f3f3f3;
}
.header-right .shop-car .shop-car-icon {
  text-decoration: none;
  color: #4a4a4a;
  margin-left: 6px;
}
.header-right .shop-car .shop-car-icon i {
  margin-right: 6px;
}
.header-right .register {
  font-size: 15px;
  color: #4a4a4a;
  font-family: PingFangSC-Regular;
}
.header-right .register span {
  cursor: pointer;
}
.header-right .register span:hover {
  color: #000;
}
.head-logo {
  display: flex;
  margin-right: 50px;
}
.nav-list {
  list-style: none;
  display: flex;
}
.nav-list li {
  float: left;
  padding: 0 15px;
  line-height: 60px;
}
.nav-list li a {
  text-align: center;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  position: relative;
  font-size: 16px;
  color: #4a4a4a;
  font-family: PingFangSC-Regular;
  text-decoration: none;
}
.nav-list li:hover a {
  color: #000;
}
.nav-list li a.active {
  border-bottom: 4px solid #ffc210;
}
</style>
