import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Home from '../compontens/Home/Home.vue'
import Course from '../compontens/Course/Course.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
	    {
	    	path:'/home',
	    	name:'Home',
	    	component:Home
	    },
	    {
	    	path:'/course',
	    	name:'Course',
	    	component:Course
	    }
	]
})

export default router;