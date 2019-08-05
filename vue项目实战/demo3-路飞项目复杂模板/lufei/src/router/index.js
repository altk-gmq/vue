import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'
import SmallCourse from '@/components/SmallCourse/SmallCourse'
import XwCourse from '@/components/XwCourse/XwCourse'
import TiKu from '@/components/TiKu/TiKu'
import GkCourse from '@/components/GkCourse/GkCourse'
import NbJc from '@/components/NbJc/NbJc'
import CourseDetail from '@/components/Course/CourseDetail'
import Buy from '@/components/Buy/Buy'
import Login from '@/components/Login/Login'
Vue.use(Router)

export default new Router({
	mode:'history',  //去掉#
    routes: [
		{
	      path: '/',
	      redirect: '/home'
	    },
	    {
	      path: '/home',
	      name: 'Home',
	      component: Home
	    },
	    {
	      path: '/course',
	      name: 'Course',
	      component: Course
	    },
	    {
	      path: '/smallcourse',
	      name: 'SmallCourse',
	      component: SmallCourse
	    },
	    {
	      path: '/xwcourse',
	      name: 'XwCourse',
	      component: XwCourse
	    },
	    {
	      path: '/tiku',
	      name: 'TiKu',
	      component: TiKu
	    },
	    {
	      path: '/gkcourse',
	      name: 'GkCourse',
	      component: GkCourse
	    },
	    {
	      path: '/nbjc',
	      name: 'NbJc',
	      component: NbJc
		},
		{
			path:'/courses/:courseId/details-introduce',
			name:'CourseDetail',
			component:CourseDetail
		},
		{
			path:'/buy',
			name:'Buy',
			component:Buy
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		}
	]
})
