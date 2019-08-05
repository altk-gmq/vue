<template>
    <div class="category-list">
	    <div class="categoryTitle">
		    <span v-for="(item,index) in categoryList" :key="item.id" :class="{active: index == currIndex}" @click="categoryHand(index,item.id)">{{item.name}}
		    </span>
	    </div>
        <div class="categoryList">
					<ul>
						<li v-for="val in categoryListContent"  :key ="val.id" class="categoryList-item" @click="courseHandler(val.id)">
							
							<div class="categoryList-item-left">
									<img :src="val.course_img">
							</div>
							<div class="categoryList-item-right">
								<div class="name">
									<img src="../../../static/img/person.svg">
									<span class="course-name">{{val.name}}</span>
									<span class="learn-num">{{val.learn_number}}人已加入学习</span>
								</div>
								<div class="teacher">
									<span>{{val.teacher_description}}</span>	
									<span class="keshi">
										<span>共{{val.numbers}}课时/</span>
										<span  v-if="val.complete_numbers == val.numbers">更新完成</span>
										<span v-else-if="val.complete_numbers != val.numbers">已更新{{val.complete_numbers}}课时</span>
									</span>
								</div>
								<div class="free_sections">
									<ul class="section-list">
										<li v-for="(item,index) in val.free_sections" :key="item.id" @mouseenter="changeColor(1)" @mouseleave="changeColor(0)">
											<img :src="images[currImg].imgSrc">
											{{0+`${index+1}`+` | `+`${item.name}`}}
											<span>免费</span>
										</li>
									</ul>
								</div>								
								<div class="price">
									<p>
										<span class="promotion_name" v-if="val.promotion_price == 0">{{val.promotion_name}}</span>
										<span class="promotion_price">￥{{val.promotion_price}}元</span>
										<span class="course_price"><del>原价:{{val.price}}元</del></span>
									</p>		
									<button class="btn">立即购买</button>										
								</div>
							</div>
						</li>
					</ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      categoryList: [],
      categoryListContent: [],
      currIndex: 0,
      categoryId: 0,
      images: [
        { id: 0, imgSrc: "../../../static/img/play.svg" },
        { id: 1, imgSrc: "../../../static/img/play-h.svg" }
      ],
      currImg: 0
    };
  },
  methods: {
		// 课程列表点击事件
		courseHandler(id){
			// 1,路由跳转,编程式导航
			this.$router.push({
				name:'CourseDetail',
				params:{
					courseId:id
				}
			})
		},
		//获取分类列表
    getCategoryList() {
      this.$https
        .get("course_sub/category/list/")
        .then(res => {
          console.log(res);
          var data = res.data;
          if (data.error_no === 0) {
            this.categoryList = data.data;
            let obj = {
              id: 0,
              name: "全部",
              category: 0
            };

            this.categoryList.unshift(obj);
          }
        })
        .catch(err => {
          console.loc("获取页面失败" + err);
        });
		},
	  // 获取课程列表
    getCategoryListContent() {
      this.$https
        .get(`courses/?sub_category=${this.categoryId}&ordering=`)
        .then(res => {
          console.log(res);
          var data = res.data;

          if (data.error_no === 0) {
            this.categoryListContent = data.data;
          }
        })
        .catch(err => {
          console.loc("获取页面失败" + err);
        });
    },
    categoryHand: function(index, categoryId) {
      this.currIndex = index;
      this.categoryId = categoryId;
      this.getCategoryListContent();
    },
    changeColor: function(type) {
      if (type) {
        this.currImg = 1;
      } else {
        this.currImg = 0;
      }
    }
  },
  created() {
    this.getCategoryList();
    this.getCategoryListContent();
  }
};
</script>

<style scoped>
.category-list {
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 35px;
}
.categoryList-item {
  height: auto;
  background: #fff;
  padding: 20px 30px 20px 20px;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 35px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 2px 3px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
}
.categoryTitle {
  height: auto;
  margin-bottom: 35px;
  padding: 25px 30px 25px 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}
.categoryTitle span {
  padding: 6px 16px;
  line-height: 16px;
  margin-left: 14px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #4a4a4a;
}
.categoryTitle span.active {
  color: #f00;
}

.categoryList-item-left {
  width: 423px;
  height: 210px;
  margin-right: 30px;
}
.categoryList-item-left img {
  width: 100%;
  height: 100%;
}
.categoryList-item-right {
  flex: 1;
}
.name {
  position: relative;
  margin-bottom: 5px;
}
.course-name {
  font-size: 26px;
}
.learn-num {
  position: absolute;
  right: 15px;
  color: #999;
  font-size: 14px;
}

.teacher {
  display: flex;
  margin-bottom: 14px;
  padding-bottom: 14px;
  color: #9b9b9b;
  font-size: 14px;
  position: relative;
}
.keshi {
  position: absolute;
  right: 15px;
}
.price {
  display: flex;
  position: relative;
}
.promotion_name {
  padding: 6px 10px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-right: 8px;
  background: #fa6240;
  border: 1px solid #fa6240;
  border-radius: 10px 0 10px 0;
  font-family: PingFangSC-Regular;
}
.promotion_price {
  font-size: 24px;
  color: #fa6240;
}
.course_price {
  font-family: PingFangSC-Regular;
  text-decoration: line-through;
  font-size: 14px;
  color: #9b9b9b;
  margin-left: 10px;
}
.btn {
  width: 120px;
  height: 38px;
  background: transparent;
  color: #fa6240;
  font-size: 16px;
  border: 1px solid #fd7b4d;
  border-radius: 3px;
  font-family: PingFangSC-Regular;
  transition: all 0.2s ease-in-out;
  position: absolute;
  right: 15px;
}

.section-list {
  list-style-type: none;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.section-list li {
  width: 49%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  cursor: pointer;
}
.section-list li:hover {
  color: #ffc210;
}
.section-list li span {
  width: 34px;
  height: 20px;
  color: #fd7b4d;
  margin-left: 10px;
  border: 1px solid #fd7b4d;
  border-radius: 2px;
  text-align: center;
  font-size: 13px;
  white-space: nowrap;
}
.section-list li img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
</style>

