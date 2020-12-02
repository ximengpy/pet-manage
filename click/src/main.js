import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import {ifLogin} from "./api/index";

router.beforeEach((to,from,next)=>{
  console.log(to, from)
  if (to.meta.requireAuth) {
    ifLogin().then(res=>{
      if(res.data.code) {
         //code不为0，未登录，跳登陆
        next('/')
      }else {
        //登录后进入主界面
        store.commit("setUser", res.data)
        next()
      }
    })
  } else {
    next()
  }
  // nprogress.start();
  // next();
})

// router.afterEach(()=>{
//   nprogress.done();
// })
Vue.use(ElementUI)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
