<template>
  <div class="MainNav">
    <div class="left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
            v-for="(item, index) in getRouters"
            :key="index"
            :to="item.path">
          {{item.meta.cnName || item.name}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{$route.meta.cnName || $route.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right" @click="loginout">
      退出登录
    </div>
  </div>
</template>

<script>
import {Loginout} from '../api/index'
  export default {
    name: "MainNav",
    computed : {
      getRouters(){
        let arr = [...this.$route.matched];
        arr.pop();
        return arr;
      }
    }
    ,watch:{
      $route(router){
      }
    },
    methods: {
      loginout() {
        Loginout().then(res =>{
          this.$router.push('/')
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .MainNav{
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: darkgrey;
    .el-breadcrumb{
      line-height: 50px;
    }
    & .left {
      width: 90%;
    }
    & .right {
      line-height: 50px;
      cursor: pointer;
    }
  }
</style>
