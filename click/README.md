# Pet-manage
后台管理系统
## 关于语言
  前端部分使用vue.js,后端使用node.js 数据库mongodb

## 全局使用element-ui组件库建成,
## 首页登录才能跳转到管理页面
## 对路由设置限制
路由部分代码
接口部分自行修改
```
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
```
## 商品的添加单独设置组件

## 功能
管理员登录
宠物的增删改查,
管理员对用户账号的增删改查等功能

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
