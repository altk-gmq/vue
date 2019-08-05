// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

// 引入axios
import Axios from 'axios'
// 将axios挂载到vue原型上
Vue.prototype.$https = Axios

// 设置公共url
Axios.defaults.baseURL = 'https://www.luffycity.com/api/v1/'
Vue.config.productionTip = false

// 将Home组件变成全局组件
// import Header from '@/components/Header/Header'
// Vue.component(Header.name,Header)

import Footer from '@/components/Footer/Footer'
Vue.component(Footer.name,Footer)

import '../static/global/base.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
