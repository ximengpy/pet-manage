<template>
  <div>
    <ArticleEdit
        @handleSubmit="handleSubmit"
        v-loading.fullscreen.lock="fullscreenLoading"
        :default-data="{}"
    ></ArticleEdit>
  </div>
</template>

<script>
  import {financeadd} from "../../../api";
  import ArticleEdit from "../../../components/ArticleEdit";

  export default {
    name: "ArticleAdd",
    components:{ArticleEdit},
    data(){
      return {
        fullscreenLoading : false
      }
    },
    methods:{
      handleSubmit(data){
        this.fullscreenLoading = true;
        financeadd(data).then(res=>{
          if(res.data.code === 0) {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration : 2000
            });
          }else {
            this.$message({
              message:  res.data.msg,
              type: 'error',
              duration : 2000
            });
          }
          setTimeout(()=>{
            this.fullscreenLoading = false;
            // window.location.reload();
          },1000)
        }).catch((e)=>{
          this.$message({
            message: e,
            type: 'error',
            duration : 2000
          });
        })
      }
    },
  }

</script>

<style scoped>

</style>
