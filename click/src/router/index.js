

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component : () => import('../views/Login'),
    meta: {requireAuth: false},
  },
  {
    path: "/admin",
    meta : {cnName : "首页"},
    component : () => import('../views/Admin'),
    meta: {requireAuth: true, roles: ['admin']},

    children:[
      {
        path: "",
        name:"AdminIndex",
        component : () => import('../views/Admin/AdminIndex'),
        meta : {cnName : "首页", requireAuth: true, roles: ['admin']}
      },
      {
        path: "finance",
        name:"Finance",
        component : () => import('../views/Admin/pet'),
        meta : {cnName : "查看记录",requireAuth: true, roles: ['admin']}
      },
      {
        path: "financeAdd",
        name:"financeAdd",
        component : () => import('../views/Admin/pet/petAdd.vue'),
        meta : {cnName : "添加记录",requireAuth: true, roles: ['admin']}
      },
      {
        path: "other",
        name:"Ohter",
        component : () => import('../views/Admin/other'),
        meta : {cnName : "其他",requireAuth: true, roles: ['admin']}
      },
      {
        path: "user",
        name:"User",
        component : () => import('../views/Admin/user'),
        meta : {cnName : "用户管理", requireAuth: true, roles: ['admin']}
      },
      {
        path: "userAdd",
        name:"UserAdd",
        component : () => import('../views/Admin/user/userAdd.vue'),
        meta : {cnName : "用户添加", requireAuth: true, roles: ['admin']}
      },
      {
        path: "statistics",
        name:"Statistics ",
        component : () => import('../views/Admin/statistics'),
        meta : {cnName : "财务统计" ,requireAuth: true, roles: ['admin']}
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router





