// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入element-ui组件
import ATUI from 'at-ui'
Vue.use(ATUI)

Vue.config.productionTip = false
// 引入公共样式
require('./assets/styles/base.less')
require('./assets/styles/index.less')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
