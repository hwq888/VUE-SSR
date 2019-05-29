import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/third',
      name: 'third',
      component: third
    }
  ]
})
