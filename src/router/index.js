import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'
import fourth from '@/components/fourth'

import userComm from '@/components/userCenter/userComm'
import userFirst from '@/components/userCenter/userFirst'
import userSecond from '@/components/userCenter/userSecond'
import userThird from '@/components/userCenter/userThird'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'first',
      component: first
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
    },
    {
      path: '/fourth',
      name: 'fourth',
      component: fourth
    },
    {
      path: '/userCenter',
      component: userComm,
      meta: {name: '用户中心'},
      children: [
        {path: '/userCenter/userFirst', component: userFirst},
        {path: '/userCenter/userSecond', component: userSecond},
        {path: '/userCenter/userThird', component: userThird}
      ]
    }
  ]
})
