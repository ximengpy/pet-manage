<template>
  <div>
    <el-table
        :data="articleList"
        style="width: 100%">
      <el-table-column
          label="宠物昵称"
          width="180"
          prop="name"
      >
      </el-table-column>
      <el-table-column
          label="主人姓名"
          width="180"
          prop="master"
      >
      </el-table-column>
      <el-table-column
          label="就诊时间"
          width="180"
          prop="date"
      >
      </el-table-column>
      <el-table-column
          label="挂号费用"
          width="180"
          prop="price"
      >
      </el-table-column>
      <el-table-column
          label="备注信息"
          width="180"
          prop="info"
      >
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
        :close-on-click-modal="false"
    >
    <ArticleEdit
          @handleSubmit="handleSubmit"
          :default-data="defaultData"
      ></ArticleEdit>
    </el-dialog>
  </div>
</template>

<script>
  import ArticleEdit from "../../../components/ArticleEdit";
  import {getfinance, updatefinance, delfinance} from '../../../api/index'
  export default {
    name: "ArticleManage",
    components:{ArticleEdit},
    data(){
      return {
        articleList : [],
        //编辑
        dialogVisible : false,
        defaultData : null,
        totalPrice: 0
      }
    },
    methods:{
      //打开对话框
      handleEdit(index,row = null){
        this.dialogVisible = true;
        this.defaultData = row;
      },
      //删除操作
      handleDelete(index,row){
        delfinance(row._id).then(res=>{
          if (res.data.code === 0) {
            this.$message({
              message: "删除成功",
              type: 'success',
              duration : 2000
            });
            this.articleList.splice(index,1);
          }
        }).catch(()=>{
          this.$message({
            message: "删除失败",
            type: 'error',
            duration : 2000
          });
        })
      },
    // 更新操作
      handleSubmit(data){
        console.log(data)
        updatefinance(this.defaultData._id ,data)
          .then(res=>{
            if (res.data.code === 0) {
              this.$message({
                message: "更新成功",
                type: 'success',
                duration : 2000
              });
              setTimeout(()=>{
                this.changeArticleList();
                this.handleClose();
              },1000)
            }else{
              this.$message({
                message: "更新失败",
                type: 'error',
                duration : 2000
              });
            }
          })
          .catch(()=>{
            this.$message({
              message: "更新失败",
              type: 'error',
              duration : 2000
            });
          });
      },
      //关闭对话框
      handleClose(){
        this.dialogVisible = false;
      },

      changeArticleList(){
        getfinance()
          .then(res=>{
            this.articleList = res.data.data;
            console.log(this.articleList)
            let total = 0
            this.articleList.forEach(item =>{
              total += item.price
            })
            this.totalPrice = total
          });
      },


    },
    mounted() {

      //请求初始文章
      this.changeArticleList();
    }
  }

</script>

<style scoped>

</style>
