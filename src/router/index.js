import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'madecode',
      component: resolve => require(['@/components/madeCode'],resolve)  
    }
  ]
})
