<template>
  <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      @open="handleOpen"
      :router="true"
      ref="menu"
  >

    <el-submenu index="/admin/finance">
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span>就诊记录</span>
      </template>
      <el-menu-item @click="handleClick" index="/admin/financeAdd">添加记录</el-menu-item>
      <el-menu-item @click="handleClick" index="/admin/finance">查看记录</el-menu-item>
    </el-submenu>

    <el-submenu index="/admin/user">
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item @click="handleClick" index="/admin/user">权限管理</el-menu-item>
      <el-menu-item @click="handleClick" index="/admin/userAdd">用户添加</el-menu-item>

    </el-submenu>

    <el-submenu index="/admin/statistics">
      <template slot="title">
        <i class="el-icon-document-copy"></i>
        <span>值班统计</span>
      </template>
      <el-menu-item @click="handleClick" index="/admin/statistics">统计</el-menu-item>
    </el-submenu>



  </el-menu>
</template>

<script>
  export default {
    name: "Menu",
    data(){
      return {
        defaultActive : ""
      }
    },
    watch:{
      $route(){
        this.defaultActive = this.$route.path;
      }
    },
    methods:{
      handleOpen(index){
      },
      handleClick(){
        this.$refs.menu.activeIndex = this.$route.path;
      }
    },
    mounted() {
      this.defaultActive = this.$route.path;
    }
  }
</script>

<style scoped lang="less">
  .el-menu{
    user-select: none;
    width: 100%;
  }
</style>
