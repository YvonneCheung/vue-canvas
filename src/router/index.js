import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/clock',
      component: () => import('@/views/clock'),
      name: 'clock',
      meta: {
        title: '普通时钟',
        isMenu: true
      }
    },
    {
      path: '/coolClock',
      component: () => import('@/views/coolClock'),
      name: 'coolClock',
      meta: {
        title: '炫丽时钟',
        isMenu: true
      }
    },
    // 重定向
    {
      path: '/',
      redirect: '/clock'
    }
  ]
})
