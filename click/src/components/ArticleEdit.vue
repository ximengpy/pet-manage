<template>
  <div class="article-edit">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="宠物昵称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="主人姓名" prop="master">
        <el-input v-model="form.master"></el-input>
      </el-form-item>

      <el-form-item label="联系方式" prop="number">
        <el-input v-model="form.number"></el-input>
      </el-form-item>
      <el-form-item label="挂号费用" prop="price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="备注信息" prop="info">
        <el-input v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
            type="primary"
            @click="onSubmit('form')"
        >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "ArticleEdit",
    data(){
      return {
        form : {
          name : this.defaultData.name||"",
          master : this.defaultData.master||'',
          info : this.defaultData.info||"",
          number:  this.defaultData.number|| 0,
          price:  this.defaultData.price|| 0,
        },
        rules : {
          master : [{ required: true, message: '请选择master' }],
          name : [{ required: true, message: '请输入name' }],
          info : [{ required: true, message: '请输入info' }],
          number : [{ required: true, message: '请输入数字' }],
          price : [{ required: true, message: '请输入数字' }],
        }
      }
    },
    props : ["defaultData"],
    watch:{
      defaultData(){
        this.form = {
          name : this.defaultData.name,
          master : this.defaultData.master,
          info : this.defaultData.info,
          number : this.defaultData.number,
          price : this.defaultData.price,
        }
      }
    },
    methods:{
      uploadSuccess(url){
        this.form.surface = url;
      },
      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit("handleSubmit", {
              master: this.form.master,
              name: this.form.name,
              info: this.form.info,
              number: this.form.number,
              price: this.form.price

            })
          } else {
            return false;
          }
        });
      },
    },
  }
</script>

<style scoped lang="less">
.article-edit {
  width: 80%;
  & .el-form {
    width: 80%;
  }
}
</style>
