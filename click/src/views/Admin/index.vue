<template>
  <div>

    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <MainNav></MainNav>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Menu from "../../components/Menu";
  import MainNav from "../../components/MainNav";
  export default {
    name: "Admin",
    components:{
      Menu,MainNav
    }
  }
</script>

<style scoped lang="less">
  .el-aside{
    overflow: hidden;
    height: 100vh;
    background-color: rgb(84, 92, 100);;
  }
  .el-main{
    position: relative;
    height: 100vh;
    background-color: #fff;
    padding-top: 100px;
    padding-left: 100px;
  }
</style>
